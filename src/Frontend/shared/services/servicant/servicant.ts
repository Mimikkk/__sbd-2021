import { $delete } from 'shared/services/servicant/delete';
import { create } from 'shared/services/servicant/create';
import { update } from 'shared/services/servicant/update';
import { read } from 'shared/services/servicant/read';

export const servicant = {
  create,
  read,
  update,
  delete: $delete,
};
