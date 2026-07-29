import {useTranslation} from 'react-i18next';
import {useState, useMemo} from 'react';
import {Link} from 'react-router-dom';
import CategoryFilter from '@/src/components/CategoryFilter';
import DishCard from '@/src/components/DishCard';
import DishModal from '@/src/components/DishModal';
import {menuItems, type Category, type Dietary} from '@/src/lib/data/menu';

export default function MenuPage() {
  const {t} = useTranslation();
  const [category, setCategory] = useState<Category | 'all'>('all');
  const [dietary, setDietary] = useState<Dietary | 'all'>('all');
  const [search, setSearch] = useState('');
  const [selectedDish, setSelectedDish] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return menuItems.filter((item) => {
      if (category !== 'all' && item.category !== category) return false;
      if (dietary !== 'all' && !item.dietary.includes(dietary)) return false;
      if (search) {
        const name = t(`items.${item.id}.name`).toLowerCase();
        if (!name.includes(search.toLowerCase())) return false;
      }
      return true;
    });
  }, [category, dietary, search, t]);

  return (
    <div className="min-h-screen" style={{background: 'var(--bg-dark)'}}>
      {/* Hero Banner */}
      <section className="relative pt-28 pb-10" style={{background: `linear-gradient(180deg, rgba(20,20,20,0.9) 0%, rgba(26,26,26,1) 100%), url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1400&q=80') center/cover no-repeat`, borderBottom: '1px solid var(--border-subtle)'}}>
        <div className="max-w-[1280px] mx-auto px-5 text-center">
          <div className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider mb-4" style={{background: 'rgba(232,160,32,0.12)', color: 'var(--accent-saffron)', border: '1px solid var(--border-saffron)'}}>
            ✦ {t('menu.title')} ✦
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-3" style={{color: 'var(--text-light)'}}>{t('menu.title')}</h1>
          <p className="text-sm max-w-lg mx-auto" style={{color: 'var(--text-dim)'}}>{t('menu.subtitle')}</p>
        </div>
      </section>

      {/* Controls */}
      <section className="sticky top-[72px] z-40 py-4" style={{background: 'rgba(26,26,26,0.95)', backdropFilter: 'blur(8px)', borderBottom: '1px solid var(--border-subtle)'}}>
        <div className="max-w-[1280px] mx-auto px-5">
          <div className="mb-3">
            <input
              type="text"
              placeholder={t('menu.search')}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl text-sm outline-none"
              style={{background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-subtle)', color: 'var(--text-light)'}}
            />
          </div>
          <CategoryFilter category={category} setCategory={setCategory} dietary={dietary} setDietary={setDietary} />
        </div>
      </section>

      {/* Menu Grid */}
      <section className="py-10">
        <div className="max-w-[1280px] mx-auto px-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item) => (
              <DishCard key={item.id} id={item.id} onClick={() => setSelectedDish(item.id)} />
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="text-center py-16 text-sm" style={{color: 'var(--text-dim)'}}>No dishes found.</p>
          )}
        </div>
      </section>

      {selectedDish && <DishModal id={selectedDish} onClose={() => setSelectedDish(null)} />}
    </div>
  );
}
