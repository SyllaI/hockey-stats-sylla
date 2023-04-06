/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Player } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function PlayerUpdateForm(props) {
  const {
    id: idProp,
    player,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    season: "",
    numberOfGoals: "",
    numberOfAssist: "",
    adminSub: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [season, setSeason] = React.useState(initialValues.season);
  const [numberOfGoals, setNumberOfGoals] = React.useState(
    initialValues.numberOfGoals
  );
  const [numberOfAssist, setNumberOfAssist] = React.useState(
    initialValues.numberOfAssist
  );
  const [adminSub, setAdminSub] = React.useState(initialValues.adminSub);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = playerRecord
      ? { ...initialValues, ...playerRecord }
      : initialValues;
    setName(cleanValues.name);
    setSeason(cleanValues.season);
    setNumberOfGoals(cleanValues.numberOfGoals);
    setNumberOfAssist(cleanValues.numberOfAssist);
    setAdminSub(cleanValues.adminSub);
    setErrors({});
  };
  const [playerRecord, setPlayerRecord] = React.useState(player);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp ? await DataStore.query(Player, idProp) : player;
      setPlayerRecord(record);
    };
    queryData();
  }, [idProp, player]);
  React.useEffect(resetStateValues, [playerRecord]);
  const validations = {
    name: [{ type: "Required" }],
    season: [],
    numberOfGoals: [],
    numberOfAssist: [],
    adminSub: [{ type: "Email" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value = getDisplayValue
      ? getDisplayValue(currentValue)
      : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          name,
          season,
          numberOfGoals,
          numberOfAssist,
          adminSub,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            Player.copyOf(playerRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "PlayerUpdateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              season,
              numberOfGoals,
              numberOfAssist,
              adminSub,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Season"
        isRequired={false}
        isReadOnly={false}
        value={season}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              season: value,
              numberOfGoals,
              numberOfAssist,
              adminSub,
            };
            const result = onChange(modelFields);
            value = result?.season ?? value;
          }
          if (errors.season?.hasError) {
            runValidationTasks("season", value);
          }
          setSeason(value);
        }}
        onBlur={() => runValidationTasks("season", season)}
        errorMessage={errors.season?.errorMessage}
        hasError={errors.season?.hasError}
        {...getOverrideProps(overrides, "season")}
      ></TextField>
      <TextField
        label="Number of goals"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={numberOfGoals}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              season,
              numberOfGoals: value,
              numberOfAssist,
              adminSub,
            };
            const result = onChange(modelFields);
            value = result?.numberOfGoals ?? value;
          }
          if (errors.numberOfGoals?.hasError) {
            runValidationTasks("numberOfGoals", value);
          }
          setNumberOfGoals(value);
        }}
        onBlur={() => runValidationTasks("numberOfGoals", numberOfGoals)}
        errorMessage={errors.numberOfGoals?.errorMessage}
        hasError={errors.numberOfGoals?.hasError}
        {...getOverrideProps(overrides, "numberOfGoals")}
      ></TextField>
      <TextField
        label="Number of assist"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={numberOfAssist}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              season,
              numberOfGoals,
              numberOfAssist: value,
              adminSub,
            };
            const result = onChange(modelFields);
            value = result?.numberOfAssist ?? value;
          }
          if (errors.numberOfAssist?.hasError) {
            runValidationTasks("numberOfAssist", value);
          }
          setNumberOfAssist(value);
        }}
        onBlur={() => runValidationTasks("numberOfAssist", numberOfAssist)}
        errorMessage={errors.numberOfAssist?.errorMessage}
        hasError={errors.numberOfAssist?.hasError}
        {...getOverrideProps(overrides, "numberOfAssist")}
      ></TextField>
      <TextField
        label="Admin sub"
        isRequired={false}
        isReadOnly={false}
        value={adminSub}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              season,
              numberOfGoals,
              numberOfAssist,
              adminSub: value,
            };
            const result = onChange(modelFields);
            value = result?.adminSub ?? value;
          }
          if (errors.adminSub?.hasError) {
            runValidationTasks("adminSub", value);
          }
          setAdminSub(value);
        }}
        onBlur={() => runValidationTasks("adminSub", adminSub)}
        errorMessage={errors.adminSub?.errorMessage}
        hasError={errors.adminSub?.hasError}
        {...getOverrideProps(overrides, "adminSub")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || player)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || player) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
