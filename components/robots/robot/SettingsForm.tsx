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
      <div className={"form-label"}>
        <Text size={"l"} bold>
          Change values
        </Text>
      </div>
      <SettingsInputs register={register} settings={settings} />
      <Button onClick={handleSubmit((data) => setSettings(data))}>
        <Text type={"active"}>Update data</Text>
      </Button>
      <style jsx>
        {`
          .form-label {
            text-align: center;
            padding: 20px 0;
          }
          .settings-form {
            padding: 40px;
            display: flex;
            flex-flow: column;
            min-width: 300px;
            width: 40%;
            margin: 0 auto;
          }
        `}
      </style>
    </div>
  );
};

export default SettingsForm;
