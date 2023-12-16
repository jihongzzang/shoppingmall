/* eslint-disable import/no-extraneous-dependencies */

import '@testing-library/jest-dom';

import 'reflect-metadata';

import ResizeObserver from 'resize-observer-polyfill';

import server from './mocks/server';

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));

afterAll(() => server.close());

afterEach(() => server.resetHandlers());

class MockPointerEvent extends Event {
  button: number;

  ctrlKey: boolean;

  pointerType: string;

  constructor(type: string, props: PointerEventInit) {
    super(type, props);
    this.button = props.button || 0;
    this.ctrlKey = props.ctrlKey || false;
    this.pointerType = props.pointerType || 'mouse';
  }
}

global.ResizeObserver = ResizeObserver;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
window.PointerEvent = MockPointerEvent as any;

window.HTMLElement.prototype.scrollIntoView = jest.fn();

window.HTMLElement.prototype.releasePointerCapture = jest.fn();

window.HTMLElement.prototype.hasPointerCapture = jest.fn();
