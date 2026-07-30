import {useTranslation} from 'react-i18next';
import type {Category, Dietary} from '@/src/lib/data/menu';

interface Props {
  category: Category | 'all';
  setCategory: (c: Category | 'all') => void;
  dietary: Dietary | 'all';
  setDietary: (d: Dietary | 'all') => void;
}

export default function CategoryFilter({category, setCategory, dietary, setDietary}: Props) {
  const {t} = useTranslation();

  const categories: (Category | 'all')[] = ['all', 'starters', 'mains', 'desserts', 'drinks'];
  const diets: (Dietary | 'all')[] = ['all', 'vegetarian', 'spicy', 'popular'];

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-2 justify-center">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            className="px-4 py-2 rounded-full text-sm font-semibold transition-all"
            style={{
              background: category === c ? 'var(--accent-saffron)' : 'rgba(255,255,255,0.05)',
              color: category === c ? '#1A1A1A' : 'var(--text-muted)',
              border: `1px solid ${category === c ? 'var(--accent-saffron)' : 'var(--border-subtle)'}`,
            }}
          >
            {t(`menu.${c === 'all' ? 'all' : c}`)}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap gap-2 justify-center">
        {diets.map((d) => (
          <button
            key={d}
            onClick={() => setDietary(d)}
            className="px-3 py-1.5 rounded-full text-xs font-semibold transition-all"
            style={{
              background: dietary === d ? 'rgba(232,160,32,0.15)' : 'transparent',
              color: dietary === d ? 'var(--accent-saffron)' : 'var(--text-dim)',
              border: `1px solid ${dietary === d ? 'var(--accent-saffron)' : 'rgba(255,255,255,0.08)'}`,
            }}
          >
            {t(`menu.${d === 'all' ? 'dietAll' : d}`)}
          </button>
        ))}
      </div>
    </div>
  );
}
