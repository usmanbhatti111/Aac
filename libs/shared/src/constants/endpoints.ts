export const API_ENDPOINTS = {
  EXAMPLE: {
    CREATE_EXAMPLE: '/',
    GET_EXAMPLES: '/',
    EDIT_EXAMPLE: '/:id',
  },
  AUTHENTICATION: {
    SIGNUP: 'signup',
    SIGNIN: 'signin',
    VERIFY_TOKEN: 'verify-token',
  },
  USER: {
    GET: '/',
    GET_ONE: '/:id',
    CREATE: '/',
    UPDATE: '/:id',
    DELETE: '/:id',
  },
  ROLE: {
    GET: '/',
    GET_ONE: '/:id',
    CREATE: '/',
    UPDATE: '/:id',
    DELETE: '/:id',
  },
  PLAN: {
    ADD_PLAN: '/',
    PLAN_LIST: '/',
    PLAN: '/:planId',
    EDIT_PLAN: '/:planId',
    DELETE_PLAN: '/:planId',
    PLAN_TYPE_LIST: 'plan-type-list',
  },
  CONTACT: {
    CREATE_CONTACT: '/',
    CONTACT_LIST: '/',
    CONTACT: '/:contactId',
    EDIT_CONTACT: '/:contactId',
    DELETE_CONTACT: '/:contactId',
    ASSIGN_CONTACT_OWNER: 'assign-contact-owner/:contactId',
  },
  ORGANIZATION: {
    CREATE_ORGANIZATION: '/',
    UPDATE_ORGANIZATION: '/:id',
    GET_ORGANIZATION: '/:id',
  },
  ORGANIZATION_COMPANY_ACCOUNT: {
    CREATE_ORGANIZATION_COMPANY_ACCOUNT: '/',
    GET_ORGANIZATION_COMPANY_ACCOUNTS: 'get-accounts/:organizationId',
    GET_ORGANIZATION_COMPANY_ACCOUNT: '/:id',
  },
  SUPER_ADMIN: {
    BILLING_INVOICES: {
      ASSIGN_PLAN: 'assign-plan',
      ORG_PLAN: 'org-plan',
      ORG_PLANS: 'org-plans',
      GENERATE_INVOICE: 'generate-invoice',
      BILLING_DETAILS: 'billing-details',
      ADD_DISCOUNT: 'add-discount',
    },
    QUICK_LINKS: {
      ADD_QUICK_LINK: '/',
      GET_QUICK_LINKS_GROUP_BY_PRODUCT: '/get-quick-links-group-by-product',
      GET_QUICK_LINKS: '/',
      DELETE_QUICK_LINKS: '/:ids',
      EDIT_QUICK_LINK: '/:id',
    },
    ADD_USER: 'add-user',
    USER_LIST: 'user-list',
    USER_PROFILE: 'user-profile/:userId',
    UPDATE_PROFILE: 'update-profile/:userId',
    ADD_ACCOUNTS: 'add-accounts',
    ACCOUNTS_LIST: 'accounts-list',
    UPDATE_ACCOUNT: 'update-account/:accountId',
    ACCOUNT_DETAIL: 'account-detail/:accountId',
    COMPANY_LIST: 'company-list',
    PRODUCT_LIST: 'product-list',
  },

  JOBS: {
    GET_JOB: '/:id',
    UPDATE_JOB: '/:id',
    DELETE_JOB: '/',
  },
  FAQS: {
    GET_FAQ: '/:id',
    UPDATE_FAQ: '/:id',
    DELETE_FAQ: '/:id',
  },
  PRODUCTS: {
    ADD_PRODUCT: '/',
    GET_PRODUCTS: '/',
    EDIT_PRODUCT: '/:id',
  },

  AIR_SERVICES: {
    TICKETS: {
      ticket: 'ticket',
      ADD_CHILD_TICKET: 'add-child-ticket',
      GET_CHILD_TICKETS: 'get-child-tickets/:id',
      DELETE_CHILD_TICKETS: 'delete-child-tickets/:id',
      EDIT_CHILD_TICKETS: 'edit-child-tickets/:id',
      ASSOCIATE_ASSETS: 'associate-assets',
      DETACH_ASSETS: 'detach-assets',
      CHANGE_STATUS: 'status/:id',
    },
    ASSETS: {
      INVENTORY: 'inventory',
      EDIT_INVENTORY: 'inventory/:id',
      DELETE_INVENTORY: '/:id',
      PURCHASE: 'purchase',
      DELETE_PURCHASE: 'purchase/:id',
      UPDATE_PURCHASE: 'update/:id',
      ADD_SOFTWARE: 'add-software',
      EDIT_SOFTWARE: 'edit-software/:id',
      DELETE_SOFTWARE: 'delete-software/:id',
      GET_SOFTWARE: 'get-software',
      ASSIGN_CATEGORY: 'assign-category/:id',
      SEARCH_INVENTORY: 'search-inventory',
    },
    TASK: {
      ADD_TASK: '/',
      GET_TASK: '/',
      UPDATE_TASK: '/:id',
      DELETE_TASK: '/:id',
    },
    TASK_MANAGEMENT: {
      CREATE_TASK: '/',
      TASK_LIST: '/',
      TASK_DETAIL: '/:id',
      UPDATE_TASK: '/:id',
      DELETE_TASK: '/:id',
    },
    EXPENSE: {
      ADD_EXPENSE: 'add-expense',
      GET_EXPENSE: 'get-expense',
    },
  },
  PRODUCT_FEATURES: {
    ADD_PRODUCT_FEATURE: '/',
    GET_PRODUCTS_FEATURES: '/',
    GET_PRODUCT_FEATURE: '/:id',
    EDIT_PRODUCT_FEATURE: '/:id',
    DELETE_PRODUCTS_FEATURES: '/:ids',
  },

  NEWS_AND_EVENTS: {
    Add_NEWS_OR_EVENT: '/',
    GET_NEWS_OR_EVENTS: '/',
    EDIT_NEWS_OR_EVENT: '/:id',
    GET_NEWS_OR_EVENT: '/:id',
    DELETE_NEWS_OR_EVENTS: '/:ids',
  },

  PAYMENTS: {
    FIND_ONE: '/:id',
    DELETE_ONE: '/:id',
    UPDATE_ONE: '/:id',
  },

  LOGS: {
    GET_LOGS: '/',
    GET_LOGS_BY_USER: '/:id',
  },
  ORG_ADMIN: {
    INVOICES: {
      GET_ONE: '/:id',
      PAY_NOW_INVOICE: 'pay-now-invoice',
    },
  },

  PRODUCT_CATEGORIES: {
    ADD_PRODUCT_CATEGORY: '/',
    GET_PRODUCT_CATEGORIES: '/',
    EDIT_PRODUCT_CATEGORY: '/:id',
  },
};
