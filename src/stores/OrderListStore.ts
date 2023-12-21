import { singleton } from 'tsyringe';

import { Action, Store } from 'usestore-ts';

import { apiService } from '../services/ApiService';

import { OrderSummary } from '../types';

@singleton()
@Store()
export default class OrderListStore {
  orders: OrderSummary[] = [];

  async fetchOrders() {
    this.setOrders([]);

    const orders = await apiService.fetchOrders();

    this.setOrders(orders);
  }

  @Action()
  private setOrders(orders: OrderSummary[]) {
    this.orders = orders;
  }
}
