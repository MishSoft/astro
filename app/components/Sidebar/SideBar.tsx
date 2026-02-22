"use client"
import React, { useState } from 'react'
import SideBarMenuBtn from './SideBarMenuBtn'
import { FaAngleDown } from "react-icons/fa";
import Link from 'next/link';
import { accordingContainer, accordingIcon, accordingItem, accordingLink, accordingWrapper, asydeContainer, navContainer, sidebarWrapper, sideItem, sideItemBtn, sideItemChild, sideItemIcon, sideItemSpan } from '@/app/style/Sidebar/sidebar.style';
import { useSideBarStore } from '@/store/useSideBarStore';

interface AccordingBarProps {
  id?: number;
  name: string;
  href?: URL | string;
  according?: AccordingBarProps[];
  icon?: React.ElementType;
}

const accordingSideBar: AccordingBarProps[] = [
  {
    id: 1,
    name: "Free Horoscopes",
    according: [
      {
        name: "All horoscopes by topics",
        href: "/all-horoscopes-topics"
      },
      {
        name: "All horoscopes at a glance",
        href: "/all-horoscopes-glance"
      },
      {
        name: "Today and Tommorow",
        according: [
          {
            name: "Personal Daily Horoscope",
            href: "/personal-daily-horoscope"
          },
          {
            name: "premium daily horoscope",
            href: "/premium-daily-horoscope"
          },
          {
            name: "daily love horoscope",
            href: "/daily-love-horoscope"
          },
          {
            name: "Calestial Events",
            href: "/calestial-events"
          },
          {
            name: "Short Report Forecast",
            href: "/short-report-forecast"
          },
          {
            name: "Yearly Horoscope analysis",
            href: "/yearly-horoscope-analysis"
          },
          {
            name: "Beyond Midlife",
            href: "/beyond-midlife"
          },
          {
            name: "Weekly Horoscope",
            href: "/weekly-horoscope"
          },
          {
            name: "Color Oracle",
            href: "/color-oracle"
          }
        ],
        icon: FaAngleDown
      },
      {
        name: "Personality",
        according: [
          {
            name: "Psychological Horoscope",
            href: "/psychological-horoscope"
          },
          {
            name: "Personal Portrait",
            href: "/personal-portrait"
          },
          {
            name: "AstroClick Portrait",
            href: "/astroclick-portrait"
          },
          {
            name: "The seven Sins",
            href: "/the-seven-sins"
          },
          {
            name: "Career and Vocation",
            href: "/career-and-vocation"
          },
          {
            name: "Money and Success Horoscope",
            href: "/money-and-success-horoscope"
          },
          {
            name: "Stories from the Stars",
            href: "/stories-from-the-stars"
          },
          {
            name: "Color Horoscope",
            href: "/color-horoscope"
          }
        ],
        icon: FaAngleDown
      },
      {
        name: "Love and Relationship",
        according: [
          {
            name: "relationship horoscope",
            href: "/relationship-horoscope"
          },
          {
            name: "Short Report Partner",
            href: "/short-report-partner"
          },
          {
            name: "Astrology for lovers",
            href: "/astrology-for-lovers"
          },
          {
            name: "AstroClick Love",
            href: "/astroclick-love"
          },
          {
            name: "AstroClick Partner",
            href: "/astroclick-partner"
          }
        ],
        icon: FaAngleDown
      },
      {
        name: "Children",
        according: [
          {
            name: "The Child Horoscope",
            href: "/the-child-horoscope"
          },
          {
            name: "Children and young people",
            href: "/children-and-young-people"
          }
        ],
        icon: FaAngleDown
      },
      {
        name: "Locational Astrology",
        according: [
          {
            name: "AstroClick Travel",
            href: "/astroclick-travel"
          },
          {
            name: "Astro-Click Local Space",
            href: "/astro-click-local-space"
          }
        ],
        icon: FaAngleDown
      },

      {
        name: "Traditional Astrology",
        according: [
          {
            name: "The best time - electional horoscope",
            href: "/the-best-time-electional-horoscope"
          }
        ],
        icon: FaAngleDown
      },
      {
        name: "Horoscope Drawings and Data",
        according: [
          {
            name: "Chart Drawing, Ascendant",
            href: "/chart-drawing-ascendant"
          },
          {
            name: "Extended chart Selection",
            href: "/extended-chart-selection"
          },
          {
            name: "Current Planets",
            href: "/current-planets"
          },
          {
            name: "Astrology Atlas Query",
            href: "/astrology-atlas-query",
          },
          {
            name: "Your Astro-Twins",
            href: "/your-astro-twins"
          },
          {
            name: "Create an Ephemeris",
            href: "/create-an-ephemeris"
          }
        ],
        icon: FaAngleDown
      }
    ],
    icon: FaAngleDown
  },
]

export default function SideBar() {
  const [activeId, setActiveId] = useState<number | null>(null)
  const [activeNested, setActiveNested] = useState<string | null>(null)
  const { isActive } = useSideBarStore();
  return (
    <div className={sidebarWrapper(isActive)}>
      <aside className={asydeContainer(isActive)}>
        <div className='p-6'>
          <SideBarMenuBtn />
        </div>

        <nav className={navContainer}>
          {accordingSideBar.map((item) => {
            const isOpen = activeId === item.id;

            return (
              <div key={item.id} className={sideItem}>

                <button
                  onClick={() => setActiveId(isOpen ? null : item.id!)}
                  className={sideItemBtn(isOpen)}
                >
                  <div className={sideItemChild}>
                    {item.icon && <item.icon className={sideItemIcon(isOpen)} />}
                    <span className={sideItemSpan}>{item.name}</span>
                  </div>

                </button>

                <div className={accordingWrapper(isOpen)}>
                  <div className={accordingContainer}>
                    {item.according?.map((accItem) => {
                      const isNestedOpen = activeNested === accItem.name;

                      return (
                        <div key={accItem.name}>
                          <Link
                            onClick={() => setActiveNested(isNestedOpen ? null : accItem.name)}
                            href={accItem.href || "#"}
                            className={accordingItem(isNestedOpen)}
                          >
                            <span>{accItem.name}</span>
                            {accItem.icon && <accItem.icon className={accordingIcon} />}
                          </Link>

                          {isNestedOpen && accItem.according?.map((nestedItem) => (
                            <Link
                              key={nestedItem.name}
                              href={nestedItem.href || "#"}
                              className={accordingLink}
                            >
                              {nestedItem.name}
                            </Link>
                          ))}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </nav>
      </aside>
    </div>
  )
}

