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
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * HealthApi - axios parameter creator
 * @export
 */
export const HealthApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Check-Health
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        checkStatus: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/health`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
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
                pathTemplate: '/health',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get-App-Stats
         * @param {string} [format] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAppStats: async (format?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/stats/app`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)
            if (format !== undefined) {
                localVarQueryParameter['format'] = format;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/stats/app',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get-DB-Stats
         * @param {string} [format] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDbStats: async (format?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/stats/db`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)
            if (format !== undefined) {
                localVarQueryParameter['format'] = format;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/stats/db',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get-Metrics (since v2.21.3)
         * @param {string} [format] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMetricsData: async (format?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/metrics`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)
            if (format !== undefined) {
                localVarQueryParameter['format'] = format;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/metrics',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get-Support-Info
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSupportInfo: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/support`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
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
                pathTemplate: '/support',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * HealthApi - functional programming interface
 * @export
 */
export const HealthApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = HealthApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Check-Health
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async checkStatus(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.checkStatus(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get-App-Stats
         * @param {HealthApiGetAppStatsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAppStats(requestParameters: HealthApiGetAppStatsRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAppStats(requestParameters.format, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get-DB-Stats
         * @param {HealthApiGetDbStatsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getDbStats(requestParameters: HealthApiGetDbStatsRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getDbStats(requestParameters.format, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get-Metrics (since v2.21.3)
         * @param {HealthApiGetMetricsDataRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getMetricsData(requestParameters: HealthApiGetMetricsDataRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getMetricsData(requestParameters.format, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get-Support-Info
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSupportInfo(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSupportInfo(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * HealthApi - factory interface
 * @export
 */
export const HealthApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = HealthApiFp(configuration)
    return {
        /**
         * 
         * @summary Check-Health
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        checkStatus(options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.checkStatus(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get-App-Stats
         * @param {HealthApiGetAppStatsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAppStats(requestParameters: HealthApiGetAppStatsRequest = {}, options?: AxiosRequestConfig): AxiosPromise<object> {
            return localVarFp.getAppStats(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get-DB-Stats
         * @param {HealthApiGetDbStatsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDbStats(requestParameters: HealthApiGetDbStatsRequest = {}, options?: AxiosRequestConfig): AxiosPromise<object> {
            return localVarFp.getDbStats(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get-Metrics (since v2.21.3)
         * @param {HealthApiGetMetricsDataRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMetricsData(requestParameters: HealthApiGetMetricsDataRequest = {}, options?: AxiosRequestConfig): AxiosPromise<object> {
            return localVarFp.getMetricsData(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get-Support-Info
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSupportInfo(options?: AxiosRequestConfig): AxiosPromise<object> {
            return localVarFp.getSupportInfo(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getAppStats operation in HealthApi.
 * @export
 * @interface HealthApiGetAppStatsRequest
 */
export type HealthApiGetAppStatsRequest = {
    
    /**
    * 
    * @type {string}
    * @memberof HealthApiGetAppStats
    */
    readonly format?: string
    
}

/**
 * Request parameters for getDbStats operation in HealthApi.
 * @export
 * @interface HealthApiGetDbStatsRequest
 */
export type HealthApiGetDbStatsRequest = {
    
    /**
    * 
    * @type {string}
    * @memberof HealthApiGetDbStats
    */
    readonly format?: string
    
}

/**
 * Request parameters for getMetricsData operation in HealthApi.
 * @export
 * @interface HealthApiGetMetricsDataRequest
 */
export type HealthApiGetMetricsDataRequest = {
    
    /**
    * 
    * @type {string}
    * @memberof HealthApiGetMetricsData
    */
    readonly format?: string
    
}

/**
 * HealthApiGenerated - object-oriented interface
 * @export
 * @class HealthApiGenerated
 * @extends {BaseAPI}
 */
export class HealthApiGenerated extends BaseAPI {
    /**
     * 
     * @summary Check-Health
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HealthApiGenerated
     */
    public checkStatus(options?: AxiosRequestConfig) {
        return HealthApiFp(this.configuration).checkStatus(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get-App-Stats
     * @param {HealthApiGetAppStatsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HealthApiGenerated
     */
    public getAppStats(requestParameters: HealthApiGetAppStatsRequest = {}, options?: AxiosRequestConfig) {
        return HealthApiFp(this.configuration).getAppStats(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get-DB-Stats
     * @param {HealthApiGetDbStatsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HealthApiGenerated
     */
    public getDbStats(requestParameters: HealthApiGetDbStatsRequest = {}, options?: AxiosRequestConfig) {
        return HealthApiFp(this.configuration).getDbStats(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get-Metrics (since v2.21.3)
     * @param {HealthApiGetMetricsDataRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HealthApiGenerated
     */
    public getMetricsData(requestParameters: HealthApiGetMetricsDataRequest = {}, options?: AxiosRequestConfig) {
        return HealthApiFp(this.configuration).getMetricsData(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get-Support-Info
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HealthApiGenerated
     */
    public getSupportInfo(options?: AxiosRequestConfig) {
        return HealthApiFp(this.configuration).getSupportInfo(options).then((request) => request(this.axios, this.basePath));
    }
}
