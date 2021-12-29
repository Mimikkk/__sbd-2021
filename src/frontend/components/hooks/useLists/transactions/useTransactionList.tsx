import { useList } from "shared/hooks";
import { columns } from "./columns";
import { Transaction } from "@models";
import { transactionService } from "$/services";

export const useTransactionList = () => {
  const [Items, Context] = useList<Transaction.Row>(transactionService.readAll);

  return [() => <Items columns={columns} pagination />, Context] as const;
};
