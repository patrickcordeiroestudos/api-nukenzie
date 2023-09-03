import dataSource from "@src/data-source";
import { Budget } from "@src/entities/budget.entity";
import { IBudget } from "@src/interfaces/Budget/IBudget";

const createBudgetService = async (data: IBudget) => {
  const budgetRepository = dataSource.getRepository(Budget);
  // create a new query runner
  const queryRunner = dataSource.createQueryRunner();

  // establish real database connection using our new query runner
  await queryRunner.connect();

  // now we can execute any queries on a query runner, for example:
  // await queryRunner.query("SELECT * FROM users")

  // we can also access entity manager that works with connection created by a query runner:
  // const users = await queryRunner.manager.find(User)

  // lets now open a new transaction:
  await queryRunner.startTransaction();

  try {
    // execute some operations on this transaction:
    // await queryRunner.manager
    //   .insert("budget", Budget)
    //   .values({
    //     description: data.description,
    //     value: data.value,
    //   })
    //   .execute();
    // await queryRunner.manager.save(user1);
    // await queryRunner.manager.save(user2);
    // await queryRunner.manager.save(photos);

    // commit transaction now:
    await queryRunner.commitTransaction();
  } catch (err) {
    // since we have errors let's rollback changes we made
    await queryRunner.rollbackTransaction();
  } finally {
    // you need to release query runner which is manually created:
    await queryRunner.release();
  }

  const budget = await budgetRepository.createQueryBuilder("budget");

  return budget;
};

export { createBudgetService };
