export type Category = 'starters' | 'mains' | 'desserts' | 'drinks';
export type Dietary = 'vegetarian' | 'spicy' | 'popular';

export interface MenuItem {
  id: string;
  category: Category;
  dietary: Dietary[];
  imageKey: string;
}

export const menuItems: MenuItem[] = [
  {id: 's1', category: 'starters', dietary: ['popular'], imageKey: 's1'},
  {id: 's2', category: 'starters', dietary: ['popular'], imageKey: 's2'},
  {id: 's3', category: 'starters', dietary: ['vegetarian'], imageKey: 's3'},
  {id: 's4', category: 'starters', dietary: ['spicy'], imageKey: 's4'},
  {id: 'm1', category: 'mains', dietary: ['popular'], imageKey: 'm1'},
  {id: 'm2', category: 'mains', dietary: ['popular'], imageKey: 'm2'},
  {id: 'm3', category: 'mains', dietary: ['spicy'], imageKey: 'm3'},
  {id: 'm4', category: 'mains', dietary: ['popular'], imageKey: 'm4'},
  {id: 'm5', category: 'mains', dietary: ['vegetarian'], imageKey: 'm5'},
  {id: 'd1', category: 'desserts', dietary: ['popular'], imageKey: 'd1'},
  {id: 'd2', category: 'desserts', dietary: ['vegetarian'], imageKey: 'd2'},
  {id: 'd3', category: 'desserts', dietary: ['vegetarian'], imageKey: 'd3'},
  {id: 'dr1', category: 'drinks', dietary: ['popular'], imageKey: 'dr1'},
  {id: 'dr2', category: 'drinks', dietary: ['vegetarian'], imageKey: 'dr2'},
  {id: 'dr3', category: 'drinks', dietary: ['vegetarian'], imageKey: 'dr3'},
];
