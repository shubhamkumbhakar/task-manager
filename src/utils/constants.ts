export const DEFAULT_TASKS = [
  {
    id: 1,
    title: "Prepare Marketing Report",
    description: "Compile and analyze data for the monthly marketing report",
    status: "pending",
    dueDate: "2025-05-23T04:27:00",
  },
  {
    id: 2,
    title: "Review Budget Allocations",
    description: "Review and adjust Q4 budget allocations across departments",
    status: "pending",
    dueDate: "2025-05-04T17:56:00",
  },
  {
    id: 3,
    title: "Update CRM Data",
    description:
      "Ensure all customer and lead data is up-to-date in the CRM system",
    status: "completed",
    dueDate: "2025-04-08T08:39:00",
  },
  {
    id: 4,
    title: "Organize Team Meeting",
    description: "Schedule and prepare for the upcoming team meeting",
    status: "in-progress",
    dueDate: "2025-06-06T05:01:00",
  },
  {
    id: 5,
    title: "Plan Product Launch",
    description: "Plan the strategy for the new product launch event",
    status: "pending",
    dueDate: "2025-07-14T04:11:00",
  },
  {
    id: 6,
    title: "Create Social Media Campaign",
    description: "Develop content for the upcoming social media campaign",
    status: "pending",
    dueDate: "2025-07-22T18:33:00",
  },
  {
    id: 7,
    title: "Conduct Performance Review",
    description: "Conduct performance reviews for team members",
    status: "completed",
    dueDate: "2025-01-23T20:47:00",
  },
  {
    id: 8,
    title: "Finalize Contract with Vendor",
    description: "Negotiate and finalize the contract terms with the vendor",
    status: "pending",
    dueDate: "2025-03-09T18:52:00",
  },
  {
    id: 9,
    title: "Update Website Content",
    description: "Update the website with the latest product information",
    status: "completed",
    dueDate: "2024-11-08T13:53:00",
  },
  {
    id: 10,
    title: "Analyze Customer Feedback",
    description:
      "Collect and analyze customer feedback for product improvements",
    status: "completed",
    dueDate: "2025-09-12T05:52:00",
  },
  {
    id: 11,
    title: "Develop Training Materials",
    description: "Develop new training materials for the sales team",
    status: "completed",
    dueDate: "2025-09-26T11:35:00",
  },
  {
    id: 12,
    title: "Coordinate with Partners",
    description: "Coordinate with external partners for the joint project",
    status: "in-progress",
    dueDate: "2025-01-28T19:16:00",
  },
  {
    id: 13,
    title: "Optimize Ad Campaigns",
    description: "Analyze and optimize ongoing advertising campaigns",
    status: "pending",
    dueDate: "2025-09-04T12:26:00",
  },
  {
    id: 14,
    title: "Research New Market Trends",
    description: "Research trends and opportunities in new markets",
    status: "pending",
    dueDate: "2025-08-11T17:28:00",
  },
  {
    id: 15,
    title: "Implement SEO Strategies",
    description: "Implement SEO improvements based on the latest algorithms",
    status: "in-progress",
    dueDate: "2025-08-19T03:07:00",
  },
  {
    id: 16,
    title: "Design New UI Prototype",
    description: "Design the prototype for the new UI features",
    status: "pending",
    dueDate: "2025-06-18T20:59:00",
  },
  {
    id: 17,
    title: "Test Product Features",
    description: "Test new features in the product for quality assurance",
    status: "in-progress",
    dueDate: "2025-08-19T10:36:00",
  },
  {
    id: 18,
    title: "Monitor Sales Performance",
    description: "Monitor and report on weekly sales performance",
    status: "pending",
    dueDate: "2025-03-09T16:22:00",
  },
  {
    id: 19,
    title: "Plan Company Event",
    description: "Plan the logistics for the upcoming company event",
    status: "completed",
    dueDate: "2025-08-11T14:34:00",
  },
  {
    id: 20,
    title: "Conduct Security Audit",
    description: "Conduct a security audit of the company's IT infrastructure",
    status: "completed",
    dueDate: "2025-01-25T20:31:00",
  },
];

export const LOCAL_STORAGE_KEY = "pi-tasks";

const getTomorrow10PM = () => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  const year = tomorrow.getFullYear();
  const month = String(tomorrow.getMonth() + 1).padStart(2, "0");
  const day = String(tomorrow.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}T22:00:00`;
};

export const EMPTY_TASK = {
  id: 0,
  title: "",
  description: "",
  status: "pending",
  dueDate: getTomorrow10PM(),
};

export const noop = () => {};
