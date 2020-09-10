import { getCustomRepository } from 'typeorm';
import AppError from '../errors/AppError';
import TransactionRepositories from '../repositories/TransactionsRepository';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    const transactionRepositories = await getCustomRepository(
      TransactionRepositories,
    );
    const transactions = await transactionRepositories.findOne(id);
    if (!transactions) {
      throw new AppError('Transaction does not exists');
    }
    await transactionRepositories.remove(transactions);
  }
}

export default DeleteTransactionService;
