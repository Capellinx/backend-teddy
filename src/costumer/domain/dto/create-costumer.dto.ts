export class CreateCostumerDto {
  name: string;
  salary: number;
  company: number;
  
  is_selected?: boolean;
  created_at?: Date | null;
}
