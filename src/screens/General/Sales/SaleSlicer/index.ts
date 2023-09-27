import {apiSlice} from '../../../../services/api';

export const salesApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    postSalesOrder: builder.mutation<any, any>({
      query: orderData => ({
        url: '/sales/create_order',
        method: 'POST',
        body: orderData,
      }),
      invalidatesTags: ['sales'],
    }),
    getSalesOrder: builder.query<any, void>({
      query: () => ({
        url: '/sales/orders',
      }),
      providesTags: ['sales'],
    }),
    getSalesOrderItems: builder.query<any, any>({
      query: orderId => ({
        url: `/sales/orderItems/${orderId}`,
      }),
      providesTags: ['sales'],
    }),
  }),
});

export const {
  usePostSalesOrderMutation,
  useGetSalesOrderQuery,
  useGetSalesOrderItemsQuery,
} = salesApiSlice;
