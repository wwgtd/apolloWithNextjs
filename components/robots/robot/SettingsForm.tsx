import React, { ChangeEvent, memo, useCallback } from "react";
import { useForm } from "react-hook-form";

import { Robot } from "../../../apollo/queries";
import { Button, Text } from "../../../kit";

type SharedProps = {
  settings: Robot["settings"];
};

type InputsProps = {
  register: ReturnType<typeof useForm>["register"];
  parentOption?: string;
};

const getName = (parent: string, name: string) => `${parent ? parent + "." : ""}${name}`;

const SettingsInputs = memo(
  ({ settings, register, parentOption = "" }: SharedProps & InputsProps) => {
    return (
      <>
        {Object.entries(settings).map(([name, val]) => {
          if (typeof val !== "object") {
            return (
              <div className={"field"} key={name}>
                <Text bold>{`${parentOption ? parentOption + "." : ""}${name}`}</Text>
                <input defaultValue={val} name={getName(parentOption, name)} ref={register} />
              </div>
            );
          } else
            return (
              <SettingsInputs key={name} settings={val} parentOption={name} register={register} />
            );
        })}
        <style jsx>
          {`
            .field {
              display: flex;
              flex-flow: column;
              padding: 15px 0;
            }
          `}
        </style>
      </>
    );
  }
);

const SettingsForm = ({
  settings,
  setSettings,
}: SharedProps & { setSettings: (val: any) => void }) => {
  const { register, handleSubmit } = useForm();

  return (
    <div className={"settings-form"}>
      <SettingsInputs register={register} settings={settings} />
      <Button onClick={handleSubmit((data) => setSettings(data))}>
        <Text type={"active"}>Update data</Text>
      </Button>
      <style jsx>
        {`
          .settings-form {
            width: 50%;
            padding: 40px;
            display: flex;
            flex-flow: column;
          }
        `}
      </style>
    </div>
  );
};

export default SettingsForm;
