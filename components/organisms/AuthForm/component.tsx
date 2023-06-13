"use client";

import Link from "next/link";
import { type FormEventHandler, type FC, useState } from "react";
import { useRouter } from "next/navigation";

import Button from "@/components/atoms/Button/component";
import Card from "@/components/atoms/Card/component";
import Input from "@/components/atoms/Input/component";
import { PageRoutes } from "@/constants/routes";
import { register, signIn } from "@/lib/api";

import { INITIAL_STATE } from "./constants";
import { getContent } from "./helpers";
import { AuthFormProps } from "./types";

const AuthForm: FC<AuthFormProps> = ({ mode }) => {
  const [formState, setFormState] = useState(INITIAL_STATE);
  const router = useRouter();

  const { email, password, firstName, lastName } = formState;
  const { linkUrl, linkText, header, subheader, buttonText } = getContent(mode);

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    try {
      if (mode === "register") {
        await register(formState);
      } else {
        await signIn(formState);
      }

      router.replace(PageRoutes.Home);
    } catch (_) {
      throw new Error(`Could not ${mode}`);
    } finally {
      setFormState(INITIAL_STATE);
    }
  };

  return (
    <Card>
      <div className="w-full">
        <div className="text-center">
          <h2 className="text-3xl mb-2">{header}</h2>
          <p className="tex-lg text-black/25">{subheader}</p>
        </div>
        <form onSubmit={handleSubmit} className="py-10 w-full">
          {mode === "register" && (
            <div className="flex mb-8 justify-between">
              <div className="pr-2">
                <div className="text-lg mb-4 ml-2 text-black/50">
                  First Name
                </div>
                <Input
                  required
                  placeholder="First Name"
                  value={firstName}
                  className="border-solid border-gray border-2 px-6 py-2 text-lg rounded-3xl w-full"
                  onChange={(event) =>
                    setFormState((prevState) => ({
                      ...prevState,
                      firstName: event.target.value,
                    }))
                  }
                />
              </div>
              <div className="pl-2">
                <div className="text-lg mb-4 ml-2 text-black/50">Last Name</div>
                <Input
                  required
                  placeholder="Last Name"
                  value={lastName}
                  className="border-solid border-gray border-2 px-6 py-2 text-lg rounded-3xl w-full"
                  onChange={(event) =>
                    setFormState((prevState) => ({
                      ...prevState,
                      lastName: event.target.value,
                    }))
                  }
                />
              </div>
            </div>
          )}
          <div className="mb-8">
            <div className="text-lg mb-4 ml-2 text-black/50">Email</div>
            <Input
              required
              type="email"
              placeholder="Email"
              value={email}
              className="border-solid border-gray border-2 px-6 py-2 text-lg rounded-3xl w-full"
              onChange={(event) =>
                setFormState((prevState) => ({
                  ...prevState,
                  email: event.target.value,
                }))
              }
            />
          </div>
          <div className="mb-8">
            <div className="text-lg mb-4 ml-2 text-black/50">Password</div>
            <Input
              required
              value={password}
              type="password"
              placeholder="Password"
              className="border-solid border-gray border-2 px-6 py-2 text-lg rounded-3xl w-full"
              onChange={(event) =>
                setFormState((prevState) => ({
                  ...prevState,
                  password: event.target.value,
                }))
              }
            />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <span>
                <Link href={linkUrl} className="text-blue-600 font-bold">
                  {linkText}
                </Link>
              </span>
            </div>
            <div>
              <Button type="submit" intent="secondary">
                {buttonText}
              </Button>
            </div>
          </div>
        </form>
      </div>
    </Card>
  );
};

export default AuthForm;
