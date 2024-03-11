/* tslint:disable */
/* eslint-disable */
/*
WhatsApp Business API

See https://developers.facebook.com/docs/whatsapp

The version of the OpenAPI document: 1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction, isBrowser } from '../common';
import { fromBuffer } from "file-type/browser"
const FormData = require("form-data")
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { EnableTwoStepRequestBody } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * TwoStepVerificationApi - axios parameter creator
 * @export
 */
export const TwoStepVerificationApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Disable-Two-Step
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        disable: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/settings/account/two-step`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/settings/account/two-step',
                httpMethod: 'DELETE'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Enable-Two-Step
         * @param {EnableTwoStepRequestBody} enableTwoStepRequestBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        enableAccount: async (enableTwoStepRequestBody: EnableTwoStepRequestBody, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'enableTwoStepRequestBody' is not null or undefined
            assertParamExists('enableAccount', 'enableTwoStepRequestBody', enableTwoStepRequestBody)
            const localVarPath = `/settings/account/two-step`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: enableTwoStepRequestBody,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/settings/account/two-step',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(enableTwoStepRequestBody, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * TwoStepVerificationApi - functional programming interface
 * @export
 */
export const TwoStepVerificationApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TwoStepVerificationApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Disable-Two-Step
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async disable(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.disable(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Enable-Two-Step
         * @param {TwoStepVerificationApiEnableAccountRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async enableAccount(requestParameters: TwoStepVerificationApiEnableAccountRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const enableTwoStepRequestBody: EnableTwoStepRequestBody = {
                pin: requestParameters.pin
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.enableAccount(enableTwoStepRequestBody, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TwoStepVerificationApi - factory interface
 * @export
 */
export const TwoStepVerificationApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TwoStepVerificationApiFp(configuration)
    return {
        /**
         * 
         * @summary Disable-Two-Step
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        disable(options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.disable(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Enable-Two-Step
         * @param {TwoStepVerificationApiEnableAccountRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        enableAccount(requestParameters: TwoStepVerificationApiEnableAccountRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.enableAccount(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for enableAccount operation in TwoStepVerificationApi.
 * @export
 * @interface TwoStepVerificationApiEnableAccountRequest
 */
export type TwoStepVerificationApiEnableAccountRequest = {
    
} & EnableTwoStepRequestBody

/**
 * TwoStepVerificationApiGenerated - object-oriented interface
 * @export
 * @class TwoStepVerificationApiGenerated
 * @extends {BaseAPI}
 */
export class TwoStepVerificationApiGenerated extends BaseAPI {
    /**
     * 
     * @summary Disable-Two-Step
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TwoStepVerificationApiGenerated
     */
    public disable(options?: AxiosRequestConfig) {
        return TwoStepVerificationApiFp(this.configuration).disable(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Enable-Two-Step
     * @param {TwoStepVerificationApiEnableAccountRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TwoStepVerificationApiGenerated
     */
    public enableAccount(requestParameters: TwoStepVerificationApiEnableAccountRequest, options?: AxiosRequestConfig) {
        return TwoStepVerificationApiFp(this.configuration).enableAccount(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}