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
import { RegisterAccountRequestBody } from '../models';
// @ts-ignore
import { RequestCodeRequestBody } from '../models';
// @ts-ignore
import { RequestCodeResponse } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * RegistrationApi - axios parameter creator
 * @export
 */
export const RegistrationApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Request-Code
         * @param {RequestCodeRequestBody} requestCodeRequestBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        requestCode: async (requestCodeRequestBody: RequestCodeRequestBody, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'requestCodeRequestBody' is not null or undefined
            assertParamExists('requestCode', 'requestCodeRequestBody', requestCodeRequestBody)
            const localVarPath = `/account`;
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
                requestBody: requestCodeRequestBody,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/account',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(requestCodeRequestBody, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Register-Account
         * @param {RegisterAccountRequestBody} registerAccountRequestBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        verifyAccount: async (registerAccountRequestBody: RegisterAccountRequestBody, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'registerAccountRequestBody' is not null or undefined
            assertParamExists('verifyAccount', 'registerAccountRequestBody', registerAccountRequestBody)
            const localVarPath = `/account/verify`;
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
                requestBody: registerAccountRequestBody,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/account/verify',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(registerAccountRequestBody, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * RegistrationApi - functional programming interface
 * @export
 */
export const RegistrationApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = RegistrationApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Request-Code
         * @param {RegistrationApiRequestCodeRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async requestCode(requestParameters: RegistrationApiRequestCodeRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const requestCodeRequestBody: RequestCodeRequestBody = {
                cc: requestParameters.cc,
                cert: requestParameters.cert,
                method: requestParameters.method,
                phone_number: requestParameters.phone_number,
                pin: requestParameters.pin
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.requestCode(requestCodeRequestBody, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Register-Account
         * @param {RegistrationApiVerifyAccountRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async verifyAccount(requestParameters: RegistrationApiVerifyAccountRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const registerAccountRequestBody: RegisterAccountRequestBody = {
                code: requestParameters.code
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.verifyAccount(registerAccountRequestBody, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * RegistrationApi - factory interface
 * @export
 */
export const RegistrationApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = RegistrationApiFp(configuration)
    return {
        /**
         * 
         * @summary Request-Code
         * @param {RegistrationApiRequestCodeRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        requestCode(requestParameters: RegistrationApiRequestCodeRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.requestCode(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Register-Account
         * @param {RegistrationApiVerifyAccountRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        verifyAccount(requestParameters: RegistrationApiVerifyAccountRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.verifyAccount(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for requestCode operation in RegistrationApi.
 * @export
 * @interface RegistrationApiRequestCodeRequest
 */
export type RegistrationApiRequestCodeRequest = {
    
} & RequestCodeRequestBody

/**
 * Request parameters for verifyAccount operation in RegistrationApi.
 * @export
 * @interface RegistrationApiVerifyAccountRequest
 */
export type RegistrationApiVerifyAccountRequest = {
    
} & RegisterAccountRequestBody

/**
 * RegistrationApiGenerated - object-oriented interface
 * @export
 * @class RegistrationApiGenerated
 * @extends {BaseAPI}
 */
export class RegistrationApiGenerated extends BaseAPI {
    /**
     * 
     * @summary Request-Code
     * @param {RegistrationApiRequestCodeRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RegistrationApiGenerated
     */
    public requestCode(requestParameters: RegistrationApiRequestCodeRequest, options?: AxiosRequestConfig) {
        return RegistrationApiFp(this.configuration).requestCode(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Register-Account
     * @param {RegistrationApiVerifyAccountRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RegistrationApiGenerated
     */
    public verifyAccount(requestParameters: RegistrationApiVerifyAccountRequest, options?: AxiosRequestConfig) {
        return RegistrationApiFp(this.configuration).verifyAccount(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}