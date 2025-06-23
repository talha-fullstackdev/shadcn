import employees from "./data";
export const GET = async () => {
  return Response.json(employees);
};
