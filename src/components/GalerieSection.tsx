import { useEffect, useState } from 'react';
import Card from './Card';
import CarDetails from './CarDetails';

export default function GalerieSection({ carList , differenceEnJours }: any) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [windowWidth, setWindowWidth] = useState<number>(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getColsPerRow = () => {
    if (windowWidth >= 1280) return 3;
    if (windowWidth >= 768) return 2;
    return 1;
  };

  const colsPerRow = getColsPerRow();

  // Diviser carList en lignes
  const rows = [];
  for (let i = 0; i < carList.length; i += colsPerRow) {
    rows.push(carList.slice(i, i + colsPerRow));
  }

  return (
    <div className="max-w-[1200px] mx-auto p-3">
      <div className="flex flex-col gap-6">
        {rows.map((row: any[], rowIndex: number) => {
          const rowStartIndex = rowIndex * colsPerRow;
          return (
            <div key={rowIndex} className="flex flex-col gap-2">
              {/* ligne de cartes */}
              <div className={`grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3`}>
                {row.map((car, colIndex) => {
                  const globalIndex = rowStartIndex + colIndex;
                  return (
                    <div key={globalIndex} className="flex flex-col gap-2">
                      <Card
                        car={car}
                        onSelect={() =>
                          setSelectedIndex(
                            selectedIndex === globalIndex ? null : globalIndex
                          )
                        }
                      />
                    </div>
                  );
                })}
              </div>

              {/* bloc détails s'affiche sous toute la ligne */}
              {row.some((_, i) => selectedIndex === rowStartIndex + i) && (
                <div className="w-full animate-fade-in  ">
                  <CarDetails
                    car={carList[selectedIndex!]}
                    onBack={() => setSelectedIndex(null)}
                    differenceEnJours={differenceEnJours}
                   
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
