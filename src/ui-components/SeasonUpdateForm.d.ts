/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Season } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type SeasonUpdateFormInputValues = {
    Year?: string;
};
export declare type SeasonUpdateFormValidationValues = {
    Year?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SeasonUpdateFormOverridesProps = {
    SeasonUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Year?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SeasonUpdateFormProps = React.PropsWithChildren<{
    overrides?: SeasonUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    season?: Season;
    onSubmit?: (fields: SeasonUpdateFormInputValues) => SeasonUpdateFormInputValues;
    onSuccess?: (fields: SeasonUpdateFormInputValues) => void;
    onError?: (fields: SeasonUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SeasonUpdateFormInputValues) => SeasonUpdateFormInputValues;
    onValidate?: SeasonUpdateFormValidationValues;
} & React.CSSProperties>;
export default function SeasonUpdateForm(props: SeasonUpdateFormProps): React.ReactElement;
