import React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';
import { G } from '../../screens/_partials/gardenUi';

const ICON = 22;
const COLOR = G.sage;

const stroke = (c = COLOR, width = 1.7) => ({
  stroke: c,
  strokeWidth: width,
  fill: 'none',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
});

export function OnboardingFeatureIcon({ name, color = COLOR, size = ICON }) {
  switch (name) {
    case 'space':
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <Path
            d="M12 3.5L18.5 7v6.5L12 20.5 5.5 13.5V7L12 3.5z"
            {...stroke(color)}
          />
          <Path
            d="M12 9.5c-1.8 0-2.8 1.1-2.8 2.4 0 1.6 2.8 3.6 2.8 3.6s2.8-2 2.8-3.6C14.8 10.6 13.8 9.5 12 9.5z"
            {...stroke(color, 1.5)}
          />
        </Svg>
      );
    case 'leaf':
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <Path
            d="M11 20A7 7 0 019.5 6.5C13 3 20 4 20 4s-1 7-4.5 10.5A7 7 0 0111 20z"
            {...stroke(color)}
          />
          <Path d="M11 20v-8" stroke={color} strokeWidth={1.7} strokeLinecap="round" />
        </Svg>
      );
    case 'plan':
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <Path
            d="M12 3.5L19 6.5V11.5C19 16 12 19.5 12 19.5S5 16 5 11.5V6.5L12 3.5z"
            {...stroke(color)}
          />
          <Path
            d="M12 10.5v5M10 12.5h4"
            stroke={color}
            strokeWidth={1.5}
            strokeLinecap="round"
          />
        </Svg>
      );
    case 'tasks':
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <Path
            d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2"
            {...stroke(color)}
          />
          <Path d="M9 4h6v4H9V4z" {...stroke(color)} />
          <Path d="M9 12h6M9 16h4" stroke={color} strokeWidth={1.5} strokeLinecap="round" />
        </Svg>
      );
    case 'track':
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <Circle cx="12" cy="12" r="3" {...stroke(color, 1.5)} />
          <Path
            d="M12 4.5V7M12 17v2.5M4.5 12H7M17 12h2.5M6.8 6.8l1.7 1.7M15.5 15.5l1.7 1.7M17.2 6.8l-1.7 1.7M8.5 15.5l-1.7 1.7"
            {...stroke(color, 1.5)}
          />
        </Svg>
      );
    case 'check':
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <Path d="M20 6L9 17l-5-5" {...stroke(color, 2.2)} />
        </Svg>
      );
    case 'house':
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <Path
            d="M4 10.5L12 4l8 6.5V19a1 1 0 01-1 1h-5v-6H10v6H5a1 1 0 01-1-1v-8.5z"
            {...stroke(color)}
          />
        </Svg>
      );
    case 'goals':
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <Path
            d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2"
            {...stroke(color)}
          />
          <Path d="M9 4h6v4H9V4z" {...stroke(color)} />
          <Path d="M9 12h6M9 16h4" stroke={color} strokeWidth={1.5} strokeLinecap="round" />
        </Svg>
      );
    case 'bag':
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <Path
            d="M6 7h12l-1.2 12H7.2L6 7zM9 7V5a3 3 0 016 0v2"
            {...stroke(color)}
          />
        </Svg>
      );
    case 'tips':
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <Path
            d="M9 18h6M10 22h4M12 2a7 7 0 00-4 12.7V18h8v-3.3A7 7 0 0012 2z"
            {...stroke(color)}
          />
        </Svg>
      );
    case 'camera':
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <Path
            d="M4 7h3l2-2h6l2 2h3v12H4V7z"
            {...stroke(color)}
          />
          <Circle cx="12" cy="13" r="3.5" {...stroke(color)} />
        </Svg>
      );
    case 'ruler':
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <Path
            d="M4 16l12-12 4 4-12 12H4v-4z"
            {...stroke(color)}
          />
          <Path d="M13 5l2 2M10 8l2 2M7 11l2 2" stroke={color} strokeWidth={1.4} strokeLinecap="round" />
        </Svg>
      );
    case 'refresh':
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <Path
            d="M20 8a8 8 0 10-2.3 5.7M20 8v-5M20 8h-5"
            {...stroke(color)}
          />
        </Svg>
      );
    case 'alert':
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <Path d="M12 9v4M12 17h.01" stroke={color} strokeWidth={2} strokeLinecap="round" />
          <Path
            d="M12 3L2 20h20L12 3z"
            {...stroke(color)}
          />
        </Svg>
      );
    case 'calendar':
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <Path
            d="M7 3v2M17 3v2M4 8h16M6 6h12a2 2 0 012 2v11H4V8a2 2 0 012-2z"
            {...stroke(color)}
          />
        </Svg>
      );
    case 'climate':
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <Circle cx="12" cy="12" r="3.5" {...stroke(color)} />
          <Path
            d="M12 4.5V7M12 17v2.5M6.2 6.2l1.8 1.8M16 16l1.8 1.8M4.5 12H7M17 12h2.5"
            {...stroke(color, 1.5)}
          />
        </Svg>
      );
    case 'star':
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <Path
            d="M12 3.5l2.4 5.2 5.7.5-4.3 3.7 1.3 5.6L12 15.8 6.9 18.5l1.3-5.6-4.3-3.7 5.7-.5L12 3.5z"
            {...stroke(color)}
          />
        </Svg>
      );
    case 'wallet':
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <Path d="M4 7h14a2 2 0 012 2v8H6a2 2 0 01-2-2V7z" {...stroke(color)} />
          <Path d="M4 7V6a2 2 0 012-2h10v3" {...stroke(color)} />
          <Circle cx="16.5" cy="13" r="1" fill={color} />
        </Svg>
      );
    case 'person':
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <Circle cx="12" cy="8" r="3.2" {...stroke(color)} />
          <Path d="M6 19c1.2-3 3.4-4.5 6-4.5s4.8 1.5 6 4.5" {...stroke(color)} />
        </Svg>
      );
    case 'phone':
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <Path
            d="M8 4h8a2 2 0 012 2v12a2 2 0 01-2 2H8a2 2 0 01-2-2V6a2 2 0 012-2z"
            {...stroke(color)}
          />
          <Path d="M11 18h2" stroke={color} strokeWidth={1.7} strokeLinecap="round" />
        </Svg>
      );
    case 'sync':
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <Path
            d="M7 5.5h5.5a2.5 2.5 0 012.5 2.5V11"
            {...stroke(color, 1.5)}
          />
          <Path d="M7 5.5L5 7.5l2 2" {...stroke(color, 1.5)} />
          <Path
            d="M17 18.5h-5.5a2.5 2.5 0 01-2.5-2.5V13"
            {...stroke(color, 1.5)}
          />
          <Path d="M17 18.5l2-2-2-2" {...stroke(color, 1.5)} />
          <Path
            d="M9.5 5H8a2 2 0 00-2 2v10a2 2 0 002 2h1.5"
            {...stroke(color, 1.4)}
          />
          <Path
            d="M14.5 19H16a2 2 0 002-2V7a2 2 0 00-2-2h-1.5"
            {...stroke(color, 1.4)}
          />
        </Svg>
      );
    case 'weather':
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <Circle cx="8.5" cy="9" r="2.8" {...stroke(color, 1.5)} />
          <Path
            d="M8.5 4.5v1.2M8.5 14.3v1.2M4.5 9h1.2M12.3 9h1.2M5.7 6.2l.8.8M10.5 11l.8.8M10.5 7l.8-.8M5.7 11.8l.8-.8"
            {...stroke(color, 1.3)}
          />
          <Path
            d="M7.5 17.5h8.5a3 3 0 000-6 3.8 3.8 0 00-7.4-.8"
            {...stroke(color, 1.5)}
          />
        </Svg>
      );
    case 'clipboardCheck':
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <Path
            d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2"
            {...stroke(color)}
          />
          <Path d="M9 4h6v4H9V4z" {...stroke(color)} />
          <Path d="M9.5 13.5l1.8 1.8L15 11.5" {...stroke(color, 1.6)} />
        </Svg>
      );
    case 'group':
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <Circle cx="9" cy="8" r="2.5" {...stroke(color, 1.5)} />
          <Circle cx="16" cy="9" r="2" {...stroke(color, 1.5)} />
          <Path d="M5 18c.8-2.5 2.4-3.8 4-3.8s3.2 1.3 4 3.8" {...stroke(color, 1.5)} />
          <Path d="M13.5 17.5c.5-1.5 1.5-2.5 2.5-2.5s2 1 2.5 2.5" {...stroke(color, 1.5)} />
        </Svg>
      );
    case 'heart':
      return (
        <Svg width={16} height={16} viewBox="0 0 24 24" fill="none">
          <Path
            d="M12 20s-7-4.6-7-9.2c0-2.8 2.2-4.8 4.7-4.8 1.5 0 2.8.7 3.3 1.8.5-1.1 1.8-1.8 3.3-1.8 2.5 0 4.7 2 4.7 4.8C19 15.4 12 20 12 20z"
            {...stroke(color, 1.5)}
          />
        </Svg>
      );
    case 'comment':
      return (
        <Svg width={16} height={16} viewBox="0 0 24 24" fill="none">
          <Path
            d="M4 5h16v10H8l-4 4V5z"
            {...stroke(color, 1.5)}
          />
        </Svg>
      );
    case 'flower':
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <Circle cx="12" cy="12" r="2.2" {...stroke(color)} />
          <Path
            d="M12 4v2.5M12 17.5V20M4 12h2.5M17.5 12H20M6.8 6.8l1.8 1.8M15.4 15.4l1.8 1.8M17.2 6.8l-1.8 1.8M8.6 15.4l-1.8 1.8"
            {...stroke(color, 1.4)}
          />
        </Svg>
      );
    case 'harvest':
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <Path d="M6 10h12v9H6V10z" {...stroke(color)} />
          <Path d="M9 10V8a3 3 0 016 0v2" {...stroke(color)} />
        </Svg>
      );
    case 'sprout':
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <Path d="M12 20V10" stroke={color} strokeWidth={1.7} strokeLinecap="round" />
          <Path
            d="M12 10C12 10 8 9 7 5c3 1 5 3 5 5M12 10c0 0 4-1 5-5-3 1-5 3-5 5"
            {...stroke(color)}
          />
        </Svg>
      );
    case 'award':
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <Circle cx="12" cy="9" r="4.5" {...stroke(color)} />
          <Path d="M8.5 14.5L7 20l5-2.5L17 20l-1.5-5.5" {...stroke(color, 1.5)} />
          <Path d="M10.5 8.5l1.5 1.5 2.5-2.5" {...stroke(color, 1.5)} />
        </Svg>
      );
    case 'budget':
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <Circle cx="12" cy="12" r="7.5" {...stroke(color)} />
          <Path
            d="M12 8.5v7M10.5 10.5h2.2a1.3 1.3 0 010 2.6H10.5M10.5 13.1h2.5a1.3 1.3 0 010 2.6H10.5"
            stroke={color}
            strokeWidth={1.4}
            strokeLinecap="round"
          />
        </Svg>
      );
    case 'actionPlan':
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <Path
            d="M12 4.5a7.5 7.5 0 105.3 12.7M12 4.5V2M12 4.5l2.2 2.2"
            {...stroke(color, 1.5)}
          />
          <Path d="M9.5 12.5l1.8 1.8L15 10.5" {...stroke(color, 1.6)} />
        </Svg>
      );
    case 'beginner':
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <Path d="M6 10h12v9H6V10z" {...stroke(color)} />
          <Path d="M9 10V8a3 3 0 016 0v2" {...stroke(color)} />
          <Path d="M9.5 14.5c.8 1.2 2 1.8 2.5 1.8s1.7-.6 2.5-1.8" {...stroke(color, 1.4)} />
        </Svg>
      );
    case 'experience':
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <Path d="M12 20V11" stroke={color} strokeWidth={1.7} strokeLinecap="round" />
          <Path
            d="M12 11C12 11 9 10.2 8.2 7.5c2.2.8 3.8 2.2 3.8 3.5M12 11c0 0 3-.8 3.8-3.5-2.2.8-3.8 2.2-3.8 3.5"
            {...stroke(color, 1.4)}
          />
        </Svg>
      );
    case 'expert':
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <Path
            d="M11 20A7 7 0 019.5 6.5C13 3 20 4 20 4s-1 7-4.5 10.5A7 7 0 0111 20z"
            {...stroke(color)}
          />
          <Path d="M11 20v-8M8.5 14h5" stroke={color} strokeWidth={1.5} strokeLinecap="round" />
        </Svg>
      );
    case 'apple':
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <Path
            d="M12 20c-3.5 0-5.5-2.8-5.5-6.2C6.5 10.5 8.5 8 12 8s5.5 2.5 5.5 5.8C17.5 17.2 15.5 20 12 20z"
            {...stroke(color)}
          />
          <Path d="M12 8c0-2.2 1.2-4 3-4.5" {...stroke(color, 1.4)} />
        </Svg>
      );
    case 'email':
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <Path d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7" {...stroke(color, 1.5)} />
          <Path d="M4 8V17C4 18.1046 4.89543 19 6 19H18C19.1046 19 20 18.1046 20 17V8C20 6.89543 19.1046 6 18 6H6C4.89543 6 4 6.89543 4 8Z" {...stroke(color, 1.5)} />
        </Svg>
      );
    case 'bee':
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <Path
            d="M8.5 12a3.5 3.5 0 016 0 3.5 3.5 0 01-6 0z"
            {...stroke(color)}
          />
          <Path d="M12 8.5V6M9.5 9l-1.5-1M14.5 9l1.5-1" {...stroke(color, 1.4)} />
          <Path d="M7 14.5h10M8 17h8" stroke={color} strokeWidth={1.4} strokeLinecap="round" />
        </Svg>
      );
    case 'trowel':
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <Path
            d="M6 18l8.5-8.5a2.5 2.5 0 10-3.5-3.5L2.5 14.5V18H6z"
            {...stroke(color)}
          />
          <Path d="M14 6l4 4" stroke={color} strokeWidth={1.5} strokeLinecap="round" />
        </Svg>
      );
    case 'fence':
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <Path d="M5 8v11M9 8v11M15 8v11M19 8v11" {...stroke(color, 1.5)} />
          <Path d="M4 8h16M4 12h16M4 16h16" {...stroke(color, 1.4)} />
        </Svg>
      );
    case 'soil':
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <Path d="M5 16c2-3 4-4 7-4s5 1 7 4" {...stroke(color)} />
          <Path d="M8 12c.5-2 2-3 4-3s3.5 1 4 3" {...stroke(color, 1.4)} />
          <Path d="M10 18h4" stroke={color} strokeWidth={1.5} strokeLinecap="round" />
        </Svg>
      );
    case 'zone':
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <Circle cx="12" cy="12" r="7" {...stroke(color)} />
          <Circle cx="12" cy="12" r="2" {...stroke(color, 1.4)} />
          <Path d="M12 5v2M12 17v2M5 12h2M17 12h2" {...stroke(color, 1.3)} />
        </Svg>
      );
    case 'magnify':
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <Circle cx="10.5" cy="10.5" r="5.5" {...stroke(color)} />
          <Path d="M15 15l4.5 4.5" {...stroke(color, 1.8)} />
        </Svg>
      );
    case 'droplet':
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <Path
            d="M12 4.5c3 4.5 5 7.2 5 9.8a5 5 0 01-10 0c0-2.6 2-5.3 5-9.8z"
            {...stroke(color)}
          />
        </Svg>
      );
    case 'timeClock':
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <Circle cx="12" cy="12" r="7.5" {...stroke(color)} />
          <Path d="M12 8v4.5l3 2" {...stroke(color, 1.5)} />
        </Svg>
      );
    case 'projects':
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <Path
            d="M6 6h12v14H6V6zM9 4h6v2H9V4z"
            {...stroke(color)}
          />
          <Path d="M9 11h6M9 15h4" stroke={color} strokeWidth={1.5} strokeLinecap="round" />
        </Svg>
      );
    case 'gallery':
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <Path d="M4 7h16v12H4V7z" {...stroke(color)} />
          <Circle cx="9" cy="11" r="1.5" {...stroke(color, 1.4)} />
          <Path d="M4 16l4.5-4 3 2.5L16 10l4 4" {...stroke(color, 1.4)} />
        </Svg>
      );
    case 'puzzle':
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <Path
            d="M8 4h3v2a1.5 1.5 0 003 0V4h3v3a1.5 1.5 0 000 3h-3v8h-3v-3a1.5 1.5 0 00-3 0v3H8v-3a1.5 1.5 0 000-3h3V7H8V4z"
            {...stroke(color, 1.3)}
          />
        </Svg>
      );
    case 'pin':
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <Path
            d="M12 21s6-4.5 6-10a6 6 0 10-12 0c0 5.5 6 10 6 10z"
            {...stroke(color)}
          />
          <Circle cx="12" cy="11" r="2" {...stroke(color, 1.4)} />
        </Svg>
      );
    case 'gps':
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <Circle cx="12" cy="12" r="7" {...stroke(color)} />
          <Circle cx="12" cy="12" r="2.5" {...stroke(color, 1.4)} />
          <Path d="M12 3v3M12 18v3M3 12h3M18 12h3" {...stroke(color, 1.4)} />
        </Svg>
      );
    case 'chevronDown':
      return (
        <Svg width={14} height={14} viewBox="0 0 24 24" fill="none">
          <Path d="M6 9l6 6 6-6" {...stroke(color, 2)} />
        </Svg>
      );
    case 'tree':
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <Path d="M12 20v-4" stroke={color} strokeWidth={1.7} strokeLinecap="round" />
          <Path
            d="M12 16c-3.5 0-5.5-2.5-5.5-5.2C6.5 8 8.5 6 12 6s5.5 2 5.5 4.8C17.5 13.5 15.5 16 12 16z"
            {...stroke(color)}
          />
        </Svg>
      );
    case 'balcony':
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <Path d="M5 10h14v9H5V10z" {...stroke(color)} />
          <Path d="M7 10V7h10v3M9 7V5h6v2" {...stroke(color, 1.4)} />
          <Path d="M8 14h2M14 14h2" stroke={color} strokeWidth={1.5} strokeLinecap="round" />
        </Svg>
      );
    case 'patio':
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <Path d="M5 14h14v5H5v-5z" {...stroke(color)} />
          <Path d="M8 14V9h3v5M13 14V9h3v5" {...stroke(color, 1.4)} />
        </Svg>
      );
    case 'communityGarden':
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <Path d="M4 14h16v6H4v-6z" {...stroke(color)} />
          <Path d="M8 14V10l4-3 4 3v4" {...stroke(color, 1.4)} />
          <Path d="M10 11v3M14 11v3" stroke={color} strokeWidth={1.4} strokeLinecap="round" />
        </Svg>
      );
    case 'indoor':
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <Path d="M8 10h8v10H8V10z" {...stroke(color)} />
          <Path d="M10 10V7h4v3" {...stroke(color)} />
          <Path d="M12 14v4" stroke={color} strokeWidth={1.5} strokeLinecap="round" />
        </Svg>
      );
    case 'clockSlice':
      return (
        <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <Circle cx="12" cy="12" r="7" {...stroke(color)} />
          <Path d="M12 12V7" stroke={color} strokeWidth={1.6} strokeLinecap="round" />
          <Path d="M12 12l3.5 2" stroke={color} strokeWidth={1.6} strokeLinecap="round" />
          <Path d="M12 5a7 7 0 017 7H12V5z" fill={G.sageLight} stroke={color} strokeWidth={1} />
        </Svg>
      );
    default:
      return null;
  }
}
