import { ApiRoutes } from "@/constants/routes";

const fetcher = async <Data>({
  url,
  body,
  method = "post",
  json = true,
}: {
  url: string;
  body?: BodyInit | null;
  method?: string;
  json?: boolean;
}): Promise<Data | null> => {
  const res = await fetch(url, {
    method,
    ...(body && { body }),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error("API error");
  }

  if (json) {
    const { data } = await res.json();
    return data;
  }

  return null;
};

interface User {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export const register = (user: User) =>
  fetcher({
    url: ApiRoutes.Register,
    body: JSON.stringify(user),
  });

export const signIn = (user: User) =>
  fetcher({
    url: ApiRoutes.SignIn,
    body: JSON.stringify(user),
  });
