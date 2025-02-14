// // store.js
import { create } from "zustand";
import { persist } from "zustand/middleware";

const useStore = create(
  persist(
    (set) => ({
      //   // Existing store items
      //   productData: null,
      //   setProductData: (data) => {
      //     set({ productData: data });
      //   },
      //   clearProductData: () => {
      //     set({ productData: null });
      //   },

      //   // fetching featured blogs
      //   featuredPosts: [],
      //   featuredLoading: false,
      //   featuredError: null,
      //   fetchFeaturedPosts: async () => {
      //     set({ featuredLoading: true, featuredError: null });
      //     const options = {
      //       headers: {
      //         Authorization: `Bearer ${process.env.NEXT_PUBLIC_BE_TOKEN}`,
      //       },
      //     };
      //     try {
      //       let url = `http://localhost:1337/api/blogs?filters[isFeatured][$eq]=true&pagination[pageSize]=${3}`;

      //       const response = await fetch(url, options);

      //       if (!response.ok) {
      //         throw new Error("Failed to fetch posts");
      //       }
      //       const data = await response.json();
      //       set({
      //         featuredPosts: data.data,
      //         featuredLoading: false,
      //       });
      //     } catch (error) {
      //       set({ featuredError: error.message, featuredLoading: false });
      //     }
      //   },

      //   // fetching blogs
      //   blogPosts: [],
      //   blogLoading: false,
      //   blogError: null,
      //   pagination: {},
      //   fetchBlogPosts: async (filter, page) => {
      //     set({ blogLoading: true, blogError: null });
      //     const options = {
      //       headers: {
      //         Authorization: `Bearer ${process.env.NEXT_PUBLIC_BE_TOKEN}`,
      //       },
      //     };
      //     try {
      //       let url = `http://localhost:1337/api/blogs`;

      //       if (filter && page) {
      //         url += `?filters[Category][$eq]=${filter}&pagination[page]=${page}&pagination[pageSize]=8`;
      //       } else if (filter) {
      //         url += `?filters[Category][$eq]=${filter}`;
      //       } else if (page) {
      //         url += `?pagination[page]=${page}&pagination[pageSize]=8`;
      //       }
      //       const response = await fetch(url, options);

      //       if (!response.ok) {
      //         throw new Error("Failed to fetch posts");
      //       }

      //       const data = await response.json();

      //       set({
      //         blogPosts: data.data,
      //         pagination: data.meta.pagination,
      //         blogLoading: false,
      //       });
      //     } catch (error) {
      //       set({ blogError: error.message, blogLoading: false });
      //     }
      //   },

      //   // fetching blog
      //   blogPost: [],
      //   blogPostLoading: false,
      //   blogPostError: null,
      //   fetchBlogPost: async (id) => {
      //     set({ blogPostLoading: true, blogPostError: null });
      //     const options = {
      //       headers: {
      //         Authorization: `Bearer ${process.env.NEXT_PUBLIC_BE_TOKEN}`,
      //       },
      //     };
      //     try {
      //       const response = await fetch(
      //         `http://localhost:1337/api/blogs/${id}`,
      //         options
      //       );
      //       if (!response.ok) {
      //         throw new Error("Failed to fetch blog post");
      //       }
      //       const data = await response.json();
      //       set({ blogPost: data.data, blogPostLoading: false });
      //     } catch (error) {
      //       set({ blogPostError: error.message, blogPostLoading: false });
      //     }
      //   },

      //   // fetching categories
      //   categories: [],
      //   categoriesLoading: false,
      //   categoriesError: null,
      //   fetchCategories: async () => {
      //     set({ categoriesLoading: true, categoriesError: null });
      //     const options = {
      //       headers: {
      //         Authorization: `Bearer ${process.env.NEXT_PUBLIC_BE_TOKEN}`,
      //       },
      //     };
      //     try {
      //       const response = await fetch(
      //         "http://localhost:1337/api/categories",
      //         options
      //       );
      //       if (!response.ok) {
      //         throw new Error("Failed to fetch posts");
      //       }
      //       const data = await response.json();
      //       set({ categories: data.data, categoriesLoading: false });
      //     } catch (error) {
      //       set({ categoriesError: error.message, categoriesLoading: false });
      //     }
      //   },

      // instant chat feature
      isVisibleChatForm: false,
      toggleVisibilityChatForm: () =>
        set((state) => ({ isVisibleChatForm: !state.isVisibleChatForm })),

      isVisibleChatFirst: true,
      toggleVisibilityChatFirst: () =>
        set((state) => ({ isVisibleChatFirst: !state.isVisibleChatFirst })),

      isVisibleChatOptions: false,
      toggleVisibilityChatOptions: () =>
        set((state) => ({ isVisibleChatOptions: !state.isVisibleChatOptions })),

      isVisibleChat: true,
      toggleVisibilityChat: () =>
        set((state) => ({ isVisibleChat: !state.isVisibleChat })),
    }),
    {
      name: "product-storage",
      partialize: (state) => ({
        isVisibleChatOptions: state.isVisibleChatOptions,
        isVisibleChat: state.isVisibleChat,
        isVisibleChatForm: state.isVisibleChatForm,
        isVisibleChatFirst: state.isVisibleChatFirst,
      }),
    }
  )
);

export default useStore;
