import {apiSlice} from '../../../services/api';
import {setCategories, setProducts} from './generalSlice';

export const generalApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getCategories: builder.query<any, void>({
      query: () => ({
        url: '/my_categories',
      }),
      providesTags: ['categories'],
      async onQueryStarted(_args, {dispatch, queryFulfilled}) {
        try {
          const {data} = await queryFulfilled;
          dispatch(setCategories(data?.data));
        } catch (error) {}
      },
    }),
    postCategories: builder.mutation<any, any>({
      query: userData => ({
        url: '/create_category',
        method: 'POST',
        body: userData,
      }),
      invalidatesTags: ['categories'],
    }),
    getProducts: builder.query<any, void>({
      query: () => ({
        url: '/my_products',
      }),
      providesTags: ['products'],
      async onQueryStarted(_args, {dispatch, queryFulfilled}) {
        try {
          const {data} = await queryFulfilled;
          dispatch(setProducts(data?.data));
        } catch (error) {}
      },
    }),
    postProducts: builder.mutation<any, any>({
      query: ({categoryId, ...data}) => ({
        url: `/create_product/${categoryId}`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['products'],
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  usePostCategoriesMutation,
  useGetProductsQuery,
  usePostProductsMutation,
} = generalApiSlice;
