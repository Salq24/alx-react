import Enzyme from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import { TextEncoder, TextDecoder } from 'util';
import '@testing-library/jest-dom'; // Extend Jest's assertions with DOM-specific matchers

// Polyfill for TextEncoder and TextDecoder
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

Enzyme.configure({ adapter: new Adapter() });
