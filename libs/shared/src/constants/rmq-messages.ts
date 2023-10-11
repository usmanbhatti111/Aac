export const RMQ_MESSAGES = {
  EXAMPLE: {
    CREATE_EXAMPLE: 'create-example',
    GET_EXAMPLES: 'get-examples',
    EDIT_EXAMPLE: 'edit-example',
  },
  AUTHENTICATION: {
    SIGNUP: 'auth-login',
  },

  ORGANIZATION: {
    UPDATE_ORGANTIZATION: 'update-organization',
    CREATE_ORGANTIZATION: 'create-organization',
    GET_ORGANTIZATION: 'get-organization',
    GET_ORGANTIZATIONS: 'get-organizations',
    DELETE_ORGANTIZATION: 'delete-organization',
  },
  ORGANIZATION_COMPANY_ACCOUNT: {
    CREATE_ORGANIZATION_COMPANY_ACCOUNT: 'create-company-accounts',
    GET_ORGANIZATION_COMPANY_ACCOUNTS: 'get-company-accounts',
    GET_ORGANIZATION_COMPANY_ACCOUNT: 'get-company-account',
  },
  SUPER_ADMIN: {
    BILLING_INVOICES: {
      ASSIGN_PLAN: 'assign-plan',
      GET_ORG_PLAN: 'get-org-plan',
      LIST_ORG_PLAN: 'list-org-plan',
      GENERATE_INVOICE: 'generate-invoice',
      BILLING_DETAILS: 'billing-detials',
      ADD_DISCOUNT: 'add-discount',
    },
    ADD_USER: 'add-user',
    USER_LIST: 'user-list',
    USER_PROFILE: 'user-profile',
    UPDATE_PROFILE: 'update-profile',
    ADD_ACCOUNTS: 'add-accounts',
    ACCOUNTS_LIST: 'accounts-list',
    UPDATE_ACCOUNTS: 'update-accounts',
  },

  JOBS: {
    CREATE_JOB: 'create-job',
    GET_JOB: 'get-job',
    GET_JOBS: 'get-jobs',
    UPDATE_JOB: 'update-job',
    DELETE_JOB: 'delete-job',
  },

  FAQS: {
    CREATE_FAQ: 'create-faq',
    GET_FAQ: 'get-faq',
    GET_FAQS: 'get-faqs',
    UPDATE_FAQ: 'update-faq',
    DELETE_FAQ: 'delete-faq',
  },
  PRODUCTS: {
    ADD_PRODUCT: 'add-product',
    GET_PRODUCTS: 'get-products',
    EDIT_PRODUCT: 'edit-product',
  },
  AIR_SERVICES: {
    TICKETS: {
      CREATE_TICKET: 'create-ticket',
      GET_TICKET_DETAILS: 'get-ticket-details',
      ASSOCIATE_ASSETS: 'associate-assets',
      CREATE_CHILD_TICKET: 'create_child_ticket',
      GET_CHILD_TICKETS: 'get_child_ticket',
    },
    ASSETS: {
      ADD_Inventory: 'add-inventory',
      GET_Inventory: 'get-inventory',
      Delete_Inventory: 'delete-inventory',
    },
    TASK: {
      ADD_TASK: 'add_task',
      GET_TASKS: 'get-tasks',
      UPDATE_TASK: 'update-task',
      DELETE_TASK: 'delete-task',
    },
    EXPENSE: {
      ADD_EXPENSE: 'add-expense',
      GET_EXPENSE: 'get-expense',
    },
  },

  NEWS_AND_EVENTS: {
    ADD_NEWS_AND_EVENTS: 'add-news-and-event',
    EDIT_NEWS_AND_EVENT: 'edit-news-and-event',
    GET_NEWS_OR_EVENT: 'get-news-or-event',
    GET_NEWS_OR_EVENTS: 'get-news-or-events',
    DELETE_NEWS_OR_EVENTS: 'delete-news-or-events',
  },

  ORG_ADMIN: {
    PAYMENTS: {
      ADD_PAYMENT: 'add-payment',
      UPDATE_PAYMENT: 'update-payment',
      GET_ALL_PAYMENTS: 'get-all-payments',
      GET_ONE_PAYMENTS: 'get-one-payment',
      DELETE_ONE_PAYMENTS: 'delete-one-payment',
    },
  },
  PRODUCT_FEATURES: {
    ADD_PRODUCT_FEATURE: 'add-product-feature',
    EDIT_PRODUCT_FEATURE: 'edit-product-feature',
    GET_PRODUCT_FEATURE: 'get-product-feature',
    GET_PRODUCTS_FEATURES: 'get-products-features',
    DELETE_PRODUCTS_FEATURES: 'delete-products-features',
  },
};
