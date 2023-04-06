/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type SeasonCreateFormInputValues = {
    Year?: string;
};
export declare type SeasonCreateFormValidationValues = {
    Year?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SeasonCreateFormOverridesProps = {
    SeasonCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Year?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SeasonCreateFormProps = React.PropsWithChildren<{
    overrides?: SeasonCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: SeasonCreateFormInputValues) => SeasonCreateFormInputValues;
    onSuccess?: (fields: SeasonCreateFormInputValues) => void;
    onError?: (fields: SeasonCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SeasonCreateFormInputValues) => SeasonCreateFormInputValues;
    onValidate?: SeasonCreateFormValidationValues;
} & React.CSSProperties>;
export default function SeasonCreateForm(props: SeasonCreateFormProps): React.ReactElement;
