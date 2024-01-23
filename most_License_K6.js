	
// Creator: k6 Browser Recorder 0.6.2

import { sleep, group } from 'k6'
import http from 'k6/http'

import { FormData } from 'https://jslib.k6.io/formdata/0.0.2/index.js'

export const options = { vus: 100, duration: '5m' }

export default function main() {
  let formData, response

  group('page_1 - https://tr-services.most.gov.bd/', function () {
    response = http.post(
      'https://tr-gateway.most.gov.bd/auth/oauth/check-valid-login-info',
      '{"username":"permit1@yopmail.com","password":"Abc123!"}',
      {
        headers: {
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          accept: 'application/json',
          'content-type': 'application/json',
          'sec-ch-ua-mobile': '?0',
          authorization: '',
          'sec-ch-ua-platform': '"Windows"',
          origin: 'https://tr-services.most.gov.bd',
          'sec-fetch-site': 'same-site',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        },
      }
    )

    response = http.options(
      'https://tr-gateway.most.gov.bd/auth/oauth/check-valid-login-info',
      null,
      {
        headers: {
          accept: '*/*',
          'access-control-request-method': 'POST',
          'access-control-request-headers': 'authorization,content-type',
          origin: 'https://tr-services.most.gov.bd',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-site',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        },
      }
    )

    response = http.post(
      'https://tr-gateway.most.gov.bd/auth/oauth/login',
      '{"username":"permit1@yopmail.com","password":"Abc123!","organization_id":null,"organogram_id":null,"web_device_token":"","device_type":"web"}',
      {
        headers: {
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          accept: 'application/json',
          'content-type': 'application/json',
          'sec-ch-ua-mobile': '?0',
          authorization: '',
          'sec-ch-ua-platform': '"Windows"',
          origin: 'https://tr-services.most.gov.bd',
          'sec-fetch-site': 'same-site',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        },
      }
    )

    response = http.options('https://tr-gateway.most.gov.bd/auth/oauth/login', null, {
      headers: {
        accept: '*/*',
        'access-control-request-method': 'POST',
        'access-control-request-headers': 'authorization,content-type',
        origin: 'https://tr-services.most.gov.bd',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-site',
        'sec-fetch-dest': 'empty',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
      },
    })

    response = http.post('https://tr-gateway.most.gov.bd/auth/oauth/load-auth-state', '{}', {
      headers: {
        'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
        accept: 'application/json',
        'content-type': 'application/json',
        'sec-ch-ua-mobile': '?0',
        authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjE2NjgsInV1aWQiOiJmMmEzZjlkMy0zMGE4LTQyZmItYWIxMi1iODY5MDMzYTJiMjEiLCJvcmdhbml6YXRpb25faWQiOm51bGwsIm9yZ2Fub2dyYW1faWQiOm51bGwsIm9yZ2FuaXphdGlvbl9zaG9ydF9uYW1lIjoiIiwib3JnYW5pemF0aW9uX25hbWVfZW4iOiIiLCJvcmdhbml6YXRpb25fbmFtZV9ibiI6IiIsInJvbGVfaWQiOm51bGwsInJvbGVfY29kZSI6bnVsbCwicHJvZmlsZV90eXBlIjpudWxsLCJwcm9maWxlX2lkIjpudWxsLCJuYW1lIjoiTXIuQWJkdWxsYWgiLCJ1c2VyX3R5cGUiOiJTRVJWSUNFX1JFQ0lQSUVOVCIsImNvbXBhbnlfbmFtZSI6bnVsbCwibW9iaWxlIjpudWxsLCJlbWFpbCI6InBlcm1pdDFAeW9wbWFpbC5jb20iLCJyZW1lbWJlcl90b2tlbiI6bnVsbCwic3RhdHVzIjoxfSwiaWF0IjoxNzA1OTMxODA0LCJleHAiOjE3MDYwMzk4MDQsImp0aSI6InVRYVQ0bUxQdWMifQ.kU47P3PzBBqW9Rgd3U9DK_cyA2YPFR-Y7X50dYF_uv4',
        'sec-ch-ua-platform': '"Windows"',
        origin: 'https://tr-services.most.gov.bd',
        'sec-fetch-site': 'same-site',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
      },
    })

    response = http.options('https://tr-gateway.most.gov.bd/auth/oauth/load-auth-state', null, {
      headers: {
        accept: '*/*',
        'access-control-request-method': 'POST',
        'access-control-request-headers': 'authorization,content-type',
        origin: 'https://tr-services.most.gov.bd',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-site',
        'sec-fetch-dest': 'empty',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
      },
    })

    response = http.post(
      'https://tr-gateway.most.gov.bd/auth/oauth/load-user-scopes',
      '{"user_id":1668}',
      {
        headers: {
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          accept: 'application/json',
          'content-type': 'application/json',
          'sec-ch-ua-mobile': '?0',
          authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjE2NjgsInV1aWQiOiJmMmEzZjlkMy0zMGE4LTQyZmItYWIxMi1iODY5MDMzYTJiMjEiLCJvcmdhbml6YXRpb25faWQiOm51bGwsIm9yZ2Fub2dyYW1faWQiOm51bGwsIm9yZ2FuaXphdGlvbl9zaG9ydF9uYW1lIjoiIiwib3JnYW5pemF0aW9uX25hbWVfZW4iOiIiLCJvcmdhbml6YXRpb25fbmFtZV9ibiI6IiIsInJvbGVfaWQiOm51bGwsInJvbGVfY29kZSI6bnVsbCwicHJvZmlsZV90eXBlIjpudWxsLCJwcm9maWxlX2lkIjpudWxsLCJuYW1lIjoiTXIuQWJkdWxsYWgiLCJ1c2VyX3R5cGUiOiJTRVJWSUNFX1JFQ0lQSUVOVCIsImNvbXBhbnlfbmFtZSI6bnVsbCwibW9iaWxlIjpudWxsLCJlbWFpbCI6InBlcm1pdDFAeW9wbWFpbC5jb20iLCJyZW1lbWJlcl90b2tlbiI6bnVsbCwic3RhdHVzIjoxfSwiaWF0IjoxNzA1OTMxODA0LCJleHAiOjE3MDYwMzk4MDQsImp0aSI6InVRYVQ0bUxQdWMifQ.kU47P3PzBBqW9Rgd3U9DK_cyA2YPFR-Y7X50dYF_uv4',
          'sec-ch-ua-platform': '"Windows"',
          origin: 'https://tr-services.most.gov.bd',
          'sec-fetch-site': 'same-site',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        },
      }
    )

    response = http.options('https://tr-gateway.most.gov.bd/auth/oauth/load-user-scopes', null, {
      headers: {
        accept: '*/*',
        'access-control-request-method': 'POST',
        'access-control-request-headers': 'authorization,content-type',
        origin: 'https://tr-services.most.gov.bd',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-site',
        'sec-fetch-dest': 'empty',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
      },
    })

    response = http.get(
      'https://tr-gateway.most.gov.bd/core/menu?$select=id,title_en,title_bn,url,slug,sort_order,status&$filter=parent_id%3D%271%27+AND+status%3D1&$orderby=sort_order+asc',
      {
        headers: {
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          accept: 'application/json',
          'sec-ch-ua-mobile': '?0',
          authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjE2NjgsInV1aWQiOiJmMmEzZjlkMy0zMGE4LTQyZmItYWIxMi1iODY5MDMzYTJiMjEiLCJvcmdhbml6YXRpb25faWQiOm51bGwsIm9yZ2Fub2dyYW1faWQiOm51bGwsIm9yZ2FuaXphdGlvbl9zaG9ydF9uYW1lIjoiIiwib3JnYW5pemF0aW9uX25hbWVfZW4iOiIiLCJvcmdhbml6YXRpb25fbmFtZV9ibiI6IiIsInJvbGVfaWQiOm51bGwsInJvbGVfY29kZSI6bnVsbCwicHJvZmlsZV90eXBlIjpudWxsLCJwcm9maWxlX2lkIjpudWxsLCJuYW1lIjoiTXIuQWJkdWxsYWgiLCJ1c2VyX3R5cGUiOiJTRVJWSUNFX1JFQ0lQSUVOVCIsImNvbXBhbnlfbmFtZSI6bnVsbCwibW9iaWxlIjpudWxsLCJlbWFpbCI6InBlcm1pdDFAeW9wbWFpbC5jb20iLCJyZW1lbWJlcl90b2tlbiI6bnVsbCwic3RhdHVzIjoxfSwiaWF0IjoxNzA1OTMxODA0LCJleHAiOjE3MDYwMzk4MDQsImp0aSI6InVRYVQ0bUxQdWMifQ.kU47P3PzBBqW9Rgd3U9DK_cyA2YPFR-Y7X50dYF_uv4',
          'sec-ch-ua-platform': '"Windows"',
          origin: 'https://tr-services.most.gov.bd',
          'sec-fetch-site': 'same-site',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        },
      }
    )

    response = http.options(
      'https://tr-gateway.most.gov.bd/core/menu?$select=id,title_en,title_bn,url,slug,sort_order,status&$filter=parent_id%3D%271%27+AND+status%3D1&$orderby=sort_order+asc',
      null,
      {
        headers: {
          accept: '*/*',
          'access-control-request-method': 'GET',
          'access-control-request-headers': 'authorization',
          origin: 'https://tr-services.most.gov.bd',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-site',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        },
      }
    )

    response = http.get(
      'https://tr-gateway.most.gov.bd/core/menu?$select=id,title_en,title_bn,url,slug,sort_order,status&$filter=parent_id%3D%276%27+AND+status%3D1&$orderby=sort_order+asc',
      {
        headers: {
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          accept: 'application/json',
          'sec-ch-ua-mobile': '?0',
          authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjE2NjgsInV1aWQiOiJmMmEzZjlkMy0zMGE4LTQyZmItYWIxMi1iODY5MDMzYTJiMjEiLCJvcmdhbml6YXRpb25faWQiOm51bGwsIm9yZ2Fub2dyYW1faWQiOm51bGwsIm9yZ2FuaXphdGlvbl9zaG9ydF9uYW1lIjoiIiwib3JnYW5pemF0aW9uX25hbWVfZW4iOiIiLCJvcmdhbml6YXRpb25fbmFtZV9ibiI6IiIsInJvbGVfaWQiOm51bGwsInJvbGVfY29kZSI6bnVsbCwicHJvZmlsZV90eXBlIjpudWxsLCJwcm9maWxlX2lkIjpudWxsLCJuYW1lIjoiTXIuQWJkdWxsYWgiLCJ1c2VyX3R5cGUiOiJTRVJWSUNFX1JFQ0lQSUVOVCIsImNvbXBhbnlfbmFtZSI6bnVsbCwibW9iaWxlIjpudWxsLCJlbWFpbCI6InBlcm1pdDFAeW9wbWFpbC5jb20iLCJyZW1lbWJlcl90b2tlbiI6bnVsbCwic3RhdHVzIjoxfSwiaWF0IjoxNzA1OTMxODA0LCJleHAiOjE3MDYwMzk4MDQsImp0aSI6InVRYVQ0bUxQdWMifQ.kU47P3PzBBqW9Rgd3U9DK_cyA2YPFR-Y7X50dYF_uv4',
          'sec-ch-ua-platform': '"Windows"',
          origin: 'https://tr-services.most.gov.bd',
          'sec-fetch-site': 'same-site',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        },
      }
    )

    response = http.options(
      'https://tr-gateway.most.gov.bd/core/menu?$select=id,title_en,title_bn,url,slug,sort_order,status&$filter=parent_id%3D%276%27+AND+status%3D1&$orderby=sort_order+asc',
      null,
      {
        headers: {
          accept: '*/*',
          'access-control-request-method': 'GET',
          'access-control-request-headers': 'authorization',
          origin: 'https://tr-services.most.gov.bd',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-site',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        },
      }
    )
    sleep(8.9)

    response = http.get(
      'https://tr-gateway.most.gov.bd/core/menu?$select=id,title_en,title_bn,url,slug,sort_order,status&$filter=parent_id%3D%271%27+AND+status%3D1&$orderby=sort_order+asc',
      {
        headers: {
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          accept: 'application/json',
          'sec-ch-ua-mobile': '?0',
          authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjE2NjgsInV1aWQiOiJmMmEzZjlkMy0zMGE4LTQyZmItYWIxMi1iODY5MDMzYTJiMjEiLCJvcmdhbml6YXRpb25faWQiOm51bGwsIm9yZ2Fub2dyYW1faWQiOm51bGwsIm9yZ2FuaXphdGlvbl9zaG9ydF9uYW1lIjoiIiwib3JnYW5pemF0aW9uX25hbWVfZW4iOiIiLCJvcmdhbml6YXRpb25fbmFtZV9ibiI6IiIsInJvbGVfaWQiOm51bGwsInJvbGVfY29kZSI6bnVsbCwicHJvZmlsZV90eXBlIjpudWxsLCJwcm9maWxlX2lkIjpudWxsLCJuYW1lIjoiTXIuQWJkdWxsYWgiLCJ1c2VyX3R5cGUiOiJTRVJWSUNFX1JFQ0lQSUVOVCIsImNvbXBhbnlfbmFtZSI6bnVsbCwibW9iaWxlIjpudWxsLCJlbWFpbCI6InBlcm1pdDFAeW9wbWFpbC5jb20iLCJyZW1lbWJlcl90b2tlbiI6bnVsbCwic3RhdHVzIjoxfSwiaWF0IjoxNzA1OTMxODA0LCJleHAiOjE3MDYwMzk4MDQsImp0aSI6InVRYVQ0bUxQdWMifQ.kU47P3PzBBqW9Rgd3U9DK_cyA2YPFR-Y7X50dYF_uv4',
          'sec-ch-ua-platform': '"Windows"',
          origin: 'https://tr-services.most.gov.bd',
          'sec-fetch-site': 'same-site',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        },
      }
    )

    response = http.options(
      'https://tr-gateway.most.gov.bd/core/menu?$select=id,title_en,title_bn,url,slug,sort_order,status&$filter=parent_id%3D%271%27+AND+status%3D1&$orderby=sort_order+asc',
      null,
      {
        headers: {
          accept: '*/*',
          'access-control-request-method': 'GET',
          'access-control-request-headers': 'authorization',
          origin: 'https://tr-services.most.gov.bd',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-site',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        },
      }
    )

    response = http.get(
      'https://tr-gateway.most.gov.bd/auth/organization/dropdown?$select=id,name_en,name_bn,institute_type,description_en,description_bn,status,component_ids,short_name,logo_image,banner_image&$orderby=sort_order+asc,name_en+asc',
      {
        headers: {
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          accept: 'application/json',
          'sec-ch-ua-mobile': '?0',
          authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjE2NjgsInV1aWQiOiJmMmEzZjlkMy0zMGE4LTQyZmItYWIxMi1iODY5MDMzYTJiMjEiLCJvcmdhbml6YXRpb25faWQiOm51bGwsIm9yZ2Fub2dyYW1faWQiOm51bGwsIm9yZ2FuaXphdGlvbl9zaG9ydF9uYW1lIjoiIiwib3JnYW5pemF0aW9uX25hbWVfZW4iOiIiLCJvcmdhbml6YXRpb25fbmFtZV9ibiI6IiIsInJvbGVfaWQiOm51bGwsInJvbGVfY29kZSI6bnVsbCwicHJvZmlsZV90eXBlIjpudWxsLCJwcm9maWxlX2lkIjpudWxsLCJuYW1lIjoiTXIuQWJkdWxsYWgiLCJ1c2VyX3R5cGUiOiJTRVJWSUNFX1JFQ0lQSUVOVCIsImNvbXBhbnlfbmFtZSI6bnVsbCwibW9iaWxlIjpudWxsLCJlbWFpbCI6InBlcm1pdDFAeW9wbWFpbC5jb20iLCJyZW1lbWJlcl90b2tlbiI6bnVsbCwic3RhdHVzIjoxfSwiaWF0IjoxNzA1OTMxODA0LCJleHAiOjE3MDYwMzk4MDQsImp0aSI6InVRYVQ0bUxQdWMifQ.kU47P3PzBBqW9Rgd3U9DK_cyA2YPFR-Y7X50dYF_uv4',
          'sec-ch-ua-platform': '"Windows"',
          origin: 'https://tr-services.most.gov.bd',
          'sec-fetch-site': 'same-site',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        },
      }
    )

    response = http.get(
      'https://tr-gateway.most.gov.bd/core/component/dropdown?$select=id,name_en,name_bn,key,status&$orderby=sort_order+asc',
      {
        headers: {
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          accept: 'application/json',
          'sec-ch-ua-mobile': '?0',
          authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjE2NjgsInV1aWQiOiJmMmEzZjlkMy0zMGE4LTQyZmItYWIxMi1iODY5MDMzYTJiMjEiLCJvcmdhbml6YXRpb25faWQiOm51bGwsIm9yZ2Fub2dyYW1faWQiOm51bGwsIm9yZ2FuaXphdGlvbl9zaG9ydF9uYW1lIjoiIiwib3JnYW5pemF0aW9uX25hbWVfZW4iOiIiLCJvcmdhbml6YXRpb25fbmFtZV9ibiI6IiIsInJvbGVfaWQiOm51bGwsInJvbGVfY29kZSI6bnVsbCwicHJvZmlsZV90eXBlIjpudWxsLCJwcm9maWxlX2lkIjpudWxsLCJuYW1lIjoiTXIuQWJkdWxsYWgiLCJ1c2VyX3R5cGUiOiJTRVJWSUNFX1JFQ0lQSUVOVCIsImNvbXBhbnlfbmFtZSI6bnVsbCwibW9iaWxlIjpudWxsLCJlbWFpbCI6InBlcm1pdDFAeW9wbWFpbC5jb20iLCJyZW1lbWJlcl90b2tlbiI6bnVsbCwic3RhdHVzIjoxfSwiaWF0IjoxNzA1OTMxODA0LCJleHAiOjE3MDYwMzk4MDQsImp0aSI6InVRYVQ0bUxQdWMifQ.kU47P3PzBBqW9Rgd3U9DK_cyA2YPFR-Y7X50dYF_uv4',
          'sec-ch-ua-platform': '"Windows"',
          origin: 'https://tr-services.most.gov.bd',
          'sec-fetch-site': 'same-site',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        },
      }
    )

    response = http.options(
      'https://tr-gateway.most.gov.bd/auth/organization/dropdown?$select=id,name_en,name_bn,institute_type,description_en,description_bn,status,component_ids,short_name,logo_image,banner_image&$orderby=sort_order+asc,name_en+asc',
      null,
      {
        headers: {
          accept: '*/*',
          'access-control-request-method': 'GET',
          'access-control-request-headers': 'authorization',
          origin: 'https://tr-services.most.gov.bd',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-site',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        },
      }
    )

    response = http.get(
      'https://tr-gateway.most.gov.bd/core/lookup/dropdown?$select=id,type,key,value_en,value_bn,is_default,organization_ids,sort_order,status&$orderby=sort_order+asc',
      {
        headers: {
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          accept: 'application/json',
          'sec-ch-ua-mobile': '?0',
          authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjE2NjgsInV1aWQiOiJmMmEzZjlkMy0zMGE4LTQyZmItYWIxMi1iODY5MDMzYTJiMjEiLCJvcmdhbml6YXRpb25faWQiOm51bGwsIm9yZ2Fub2dyYW1faWQiOm51bGwsIm9yZ2FuaXphdGlvbl9zaG9ydF9uYW1lIjoiIiwib3JnYW5pemF0aW9uX25hbWVfZW4iOiIiLCJvcmdhbml6YXRpb25fbmFtZV9ibiI6IiIsInJvbGVfaWQiOm51bGwsInJvbGVfY29kZSI6bnVsbCwicHJvZmlsZV90eXBlIjpudWxsLCJwcm9maWxlX2lkIjpudWxsLCJuYW1lIjoiTXIuQWJkdWxsYWgiLCJ1c2VyX3R5cGUiOiJTRVJWSUNFX1JFQ0lQSUVOVCIsImNvbXBhbnlfbmFtZSI6bnVsbCwibW9iaWxlIjpudWxsLCJlbWFpbCI6InBlcm1pdDFAeW9wbWFpbC5jb20iLCJyZW1lbWJlcl90b2tlbiI6bnVsbCwic3RhdHVzIjoxfSwiaWF0IjoxNzA1OTMxODA0LCJleHAiOjE3MDYwMzk4MDQsImp0aSI6InVRYVQ0bUxQdWMifQ.kU47P3PzBBqW9Rgd3U9DK_cyA2YPFR-Y7X50dYF_uv4',
          'sec-ch-ua-platform': '"Windows"',
          origin: 'https://tr-services.most.gov.bd',
          'sec-fetch-site': 'same-site',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        },
      }
    )

    response = http.options(
      'https://tr-gateway.most.gov.bd/core/component/dropdown?$select=id,name_en,name_bn,key,status&$orderby=sort_order+asc',
      null,
      {
        headers: {
          accept: '*/*',
          'access-control-request-method': 'GET',
          'access-control-request-headers': 'authorization',
          origin: 'https://tr-services.most.gov.bd',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-site',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        },
      }
    )

    response = http.options(
      'https://tr-gateway.most.gov.bd/core/lookup/dropdown?$select=id,type,key,value_en,value_bn,is_default,organization_ids,sort_order,status&$orderby=sort_order+asc',
      null,
      {
        headers: {
          accept: '*/*',
          'access-control-request-method': 'GET',
          'access-control-request-headers': 'authorization',
          origin: 'https://tr-services.most.gov.bd',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-site',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        },
      }
    )

    response = http.get(
      'https://tr-gateway.most.gov.bd/core/menu?$select=id,title_en,title_bn,url,slug,sort_order,status&$filter=parent_id%3D%276%27+AND+status%3D1&$orderby=sort_order+asc',
      {
        headers: {
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          accept: 'application/json',
          'sec-ch-ua-mobile': '?0',
          authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjE2NjgsInV1aWQiOiJmMmEzZjlkMy0zMGE4LTQyZmItYWIxMi1iODY5MDMzYTJiMjEiLCJvcmdhbml6YXRpb25faWQiOm51bGwsIm9yZ2Fub2dyYW1faWQiOm51bGwsIm9yZ2FuaXphdGlvbl9zaG9ydF9uYW1lIjoiIiwib3JnYW5pemF0aW9uX25hbWVfZW4iOiIiLCJvcmdhbml6YXRpb25fbmFtZV9ibiI6IiIsInJvbGVfaWQiOm51bGwsInJvbGVfY29kZSI6bnVsbCwicHJvZmlsZV90eXBlIjpudWxsLCJwcm9maWxlX2lkIjpudWxsLCJuYW1lIjoiTXIuQWJkdWxsYWgiLCJ1c2VyX3R5cGUiOiJTRVJWSUNFX1JFQ0lQSUVOVCIsImNvbXBhbnlfbmFtZSI6bnVsbCwibW9iaWxlIjpudWxsLCJlbWFpbCI6InBlcm1pdDFAeW9wbWFpbC5jb20iLCJyZW1lbWJlcl90b2tlbiI6bnVsbCwic3RhdHVzIjoxfSwiaWF0IjoxNzA1OTMxODA0LCJleHAiOjE3MDYwMzk4MDQsImp0aSI6InVRYVQ0bUxQdWMifQ.kU47P3PzBBqW9Rgd3U9DK_cyA2YPFR-Y7X50dYF_uv4',
          'sec-ch-ua-platform': '"Windows"',
          origin: 'https://tr-services.most.gov.bd',
          'sec-fetch-site': 'same-site',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        },
      }
    )

    response = http.options(
      'https://tr-gateway.most.gov.bd/core/menu?$select=id,title_en,title_bn,url,slug,sort_order,status&$filter=parent_id%3D%276%27+AND+status%3D1&$orderby=sort_order+asc',
      null,
      {
        headers: {
          accept: '*/*',
          'access-control-request-method': 'GET',
          'access-control-request-headers': 'authorization',
          origin: 'https://tr-services.most.gov.bd',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-site',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        },
      }
    )

    response = http.get(
      'https://tr-gateway.most.gov.bd/core/service-mapping/all?$select=&$search=&$filter=1%3D1&$queryParams=%7B%22service_id%22:%2252%22%7D&$expand=&$orderby=id+desc&$top=10&$skip=0',
      {
        headers: {
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          accept: 'application/json',
          'sec-ch-ua-mobile': '?0',
          authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjE2NjgsInV1aWQiOiJmMmEzZjlkMy0zMGE4LTQyZmItYWIxMi1iODY5MDMzYTJiMjEiLCJvcmdhbml6YXRpb25faWQiOm51bGwsIm9yZ2Fub2dyYW1faWQiOm51bGwsIm9yZ2FuaXphdGlvbl9zaG9ydF9uYW1lIjoiIiwib3JnYW5pemF0aW9uX25hbWVfZW4iOiIiLCJvcmdhbml6YXRpb25fbmFtZV9ibiI6IiIsInJvbGVfaWQiOm51bGwsInJvbGVfY29kZSI6bnVsbCwicHJvZmlsZV90eXBlIjpudWxsLCJwcm9maWxlX2lkIjpudWxsLCJuYW1lIjoiTXIuQWJkdWxsYWgiLCJ1c2VyX3R5cGUiOiJTRVJWSUNFX1JFQ0lQSUVOVCIsImNvbXBhbnlfbmFtZSI6bnVsbCwibW9iaWxlIjpudWxsLCJlbWFpbCI6InBlcm1pdDFAeW9wbWFpbC5jb20iLCJyZW1lbWJlcl90b2tlbiI6bnVsbCwic3RhdHVzIjoxfSwiaWF0IjoxNzA1OTMxODA0LCJleHAiOjE3MDYwMzk4MDQsImp0aSI6InVRYVQ0bUxQdWMifQ.kU47P3PzBBqW9Rgd3U9DK_cyA2YPFR-Y7X50dYF_uv4',
          'sec-ch-ua-platform': '"Windows"',
          origin: 'https://tr-services.most.gov.bd',
          'sec-fetch-site': 'same-site',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        },
      }
    )

    response = http.options(
      'https://tr-gateway.most.gov.bd/core/service-mapping/all?$select=&$search=&$filter=1%3D1&$queryParams=%7B%22service_id%22:%2252%22%7D&$expand=&$orderby=id+desc&$top=10&$skip=0',
      null,
      {
        headers: {
          accept: '*/*',
          'access-control-request-method': 'GET',
          'access-control-request-headers': 'authorization',
          origin: 'https://tr-services.most.gov.bd',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-site',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        },
      }
    )
    sleep(2.6)
  })

  group(
    'page_2 - https://tr-license.most.gov.bd/en/services/baera/previous-data-enlistment',
    function () {
      response = http.get(
        'https://tr-license.most.gov.bd/en/services/baera/previous-data-enlistment',
        {
          headers: {
            'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'upgrade-insecure-requests': '1',
            accept:
              'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
            'sec-fetch-site': 'same-site',
            'sec-fetch-mode': 'navigate',
            'sec-fetch-user': '?1',
            'sec-fetch-dest': 'document',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )
      sleep(0.8)

      response = http.get(
        'https://tr-socket.most.gov.bd/socket.io/?EIO=4&transport=polling&t=OqnTTP4',
        {
          headers: {
            'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
            accept: '*/*',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            origin: 'https://tr-license.most.gov.bd',
            'sec-fetch-site': 'same-site',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.get('https://tr-gateway.most.gov.bd/core/option/load', {
        headers: {
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          accept: 'application/json',
          'sec-ch-ua-mobile': '?0',
          authorization: '',
          'sec-ch-ua-platform': '"Windows"',
          origin: 'https://tr-license.most.gov.bd',
          'sec-fetch-site': 'same-site',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        },
      })

      response = http.options('https://tr-gateway.most.gov.bd/core/option/load', null, {
        headers: {
          accept: '*/*',
          'access-control-request-method': 'GET',
          'access-control-request-headers': 'authorization',
          origin: 'https://tr-license.most.gov.bd',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-site',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        },
      })

      response = http.post(
        'https://tr-socket.most.gov.bd/socket.io/?EIO=4&transport=polling&t=OqnTTS0&sid=tNdHIk3uKFmbSqgBALXb',
        '40',
        {
          headers: {
            'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
            accept: '*/*',
            'content-type': 'text/plain; charset=UTF-8',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            origin: 'https://tr-license.most.gov.bd',
            'sec-fetch-site': 'same-site',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.get(
        'https://tr-socket.most.gov.bd/socket.io/?EIO=4&transport=polling&t=OqnTTS2&sid=tNdHIk3uKFmbSqgBALXb',
        {
          headers: {
            'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
            accept: '*/*',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            origin: 'https://tr-license.most.gov.bd',
            'sec-fetch-site': 'same-site',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.get(
        'https://tr-gateway.most.gov.bd/core/menu?$select=id,title_en,title_bn,url,slug,sort_order,status&$filter=parent_id%3D%271%27+AND+status%3D1&$orderby=sort_order+asc',
        {
          headers: {
            'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
            accept: 'application/json',
            'sec-ch-ua-mobile': '?0',
            authorization: '',
            'sec-ch-ua-platform': '"Windows"',
            origin: 'https://tr-license.most.gov.bd',
            'sec-fetch-site': 'same-site',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.options(
        'https://tr-gateway.most.gov.bd/core/menu?$select=id,title_en,title_bn,url,slug,sort_order,status&$filter=parent_id%3D%271%27+AND+status%3D1&$orderby=sort_order+asc',
        null,
        {
          headers: {
            accept: '*/*',
            'access-control-request-method': 'GET',
            'access-control-request-headers': 'authorization',
            origin: 'https://tr-license.most.gov.bd',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-site',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.get(
        'https://tr-gateway.most.gov.bd/core/service-mapping/dropdown?$select=id,name_en,name_bn,status,organization_id,component_id,service_assignment_id,service_id,description_en,description_bn,icon,image,key,slug&$orderby=name_en+asc',
        {
          headers: {
            'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
            accept: 'application/json',
            'sec-ch-ua-mobile': '?0',
            authorization: '',
            'sec-ch-ua-platform': '"Windows"',
            origin: 'https://tr-license.most.gov.bd',
            'sec-fetch-site': 'same-site',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.options(
        'https://tr-gateway.most.gov.bd/core/service-mapping/dropdown?$select=id,name_en,name_bn,status,organization_id,component_id,service_assignment_id,service_id,description_en,description_bn,icon,image,key,slug&$orderby=name_en+asc',
        null,
        {
          headers: {
            accept: '*/*',
            'access-control-request-method': 'GET',
            'access-control-request-headers': 'authorization',
            origin: 'https://tr-license.most.gov.bd',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-site',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.get(
        'https://tr-gateway.most.gov.bd/auth/organization/dropdown?$select=id,name_en,name_bn,institute_type,description_en,description_bn,status,component_ids,short_name,logo_image,banner_image&$orderby=sort_order+asc,name_en+asc',
        {
          headers: {
            'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
            accept: 'application/json',
            'sec-ch-ua-mobile': '?0',
            authorization: '',
            'sec-ch-ua-platform': '"Windows"',
            origin: 'https://tr-license.most.gov.bd',
            'sec-fetch-site': 'same-site',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.options(
        'https://tr-gateway.most.gov.bd/auth/organization/dropdown?$select=id,name_en,name_bn,institute_type,description_en,description_bn,status,component_ids,short_name,logo_image,banner_image&$orderby=sort_order+asc,name_en+asc',
        null,
        {
          headers: {
            accept: '*/*',
            'access-control-request-method': 'GET',
            'access-control-request-headers': 'authorization',
            origin: 'https://tr-license.most.gov.bd',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-site',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.get(
        'https://tr-gateway.most.gov.bd/auth/organization/dropdown?$select=id,name_en,name_bn,institute_type,description_en,description_bn,status,component_ids,short_name,logo_image,banner_image&$orderby=sort_order+asc,name_en+asc',
        {
          headers: {
            'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
            accept: 'application/json',
            'sec-ch-ua-mobile': '?0',
            authorization: '',
            'sec-ch-ua-platform': '"Windows"',
            origin: 'https://tr-license.most.gov.bd',
            'sec-fetch-site': 'same-site',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.options(
        'https://tr-gateway.most.gov.bd/auth/organization/dropdown?$select=id,name_en,name_bn,institute_type,description_en,description_bn,status,component_ids,short_name,logo_image,banner_image&$orderby=sort_order+asc,name_en+asc',
        null,
        {
          headers: {
            accept: '*/*',
            'access-control-request-method': 'GET',
            'access-control-request-headers': 'authorization',
            origin: 'https://tr-license.most.gov.bd',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-site',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.get(
        'https://tr-gateway.most.gov.bd/core/menu?$select=id,title_en,title_bn,url,slug,sort_order,status&$filter=parent_id%3D%276%27+AND+status%3D1&$orderby=sort_order+asc',
        {
          headers: {
            'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
            accept: 'application/json',
            'sec-ch-ua-mobile': '?0',
            authorization: '',
            'sec-ch-ua-platform': '"Windows"',
            origin: 'https://tr-license.most.gov.bd',
            'sec-fetch-site': 'same-site',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.options(
        'https://tr-gateway.most.gov.bd/core/menu?$select=id,title_en,title_bn,url,slug,sort_order,status&$filter=parent_id%3D%276%27+AND+status%3D1&$orderby=sort_order+asc',
        null,
        {
          headers: {
            accept: '*/*',
            'access-control-request-method': 'GET',
            'access-control-request-headers': 'authorization',
            origin: 'https://tr-license.most.gov.bd',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-site',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.get('https://tr-services.most.gov.bd/post_message_to_frame_owner.html', {
        headers: {
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          'upgrade-insecure-requests': '1',
          accept:
            'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
          'sec-fetch-site': 'same-site',
          'sec-fetch-mode': 'navigate',
          'sec-fetch-dest': 'iframe',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        },
      })

      response = http.get(
        'https://tr-gateway.most.gov.bd/core/location/dropdown?$filter=location_type_id+IN(%27COUNTRY%27,+%27DIVISION%27,+%27DISTRICT%27,+%27THANA%27)&$orderby=name_en+asc',
        {
          headers: {
            'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
            accept: 'application/json',
            'sec-ch-ua-mobile': '?0',
            authorization: '',
            'sec-ch-ua-platform': '"Windows"',
            origin: 'https://tr-license.most.gov.bd',
            'sec-fetch-site': 'same-site',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.options(
        'https://tr-gateway.most.gov.bd/core/location/dropdown?$filter=location_type_id+IN(%27COUNTRY%27,+%27DIVISION%27,+%27DISTRICT%27,+%27THANA%27)&$orderby=name_en+asc',
        null,
        {
          headers: {
            accept: '*/*',
            'access-control-request-method': 'GET',
            'access-control-request-headers': 'authorization',
            origin: 'https://tr-license.most.gov.bd',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-site',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.get(
        'https://tr-socket.most.gov.bd/socket.io/?EIO=4&transport=polling&t=OqnTTZO&sid=tNdHIk3uKFmbSqgBALXb',
        {
          headers: {
            'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
            accept: '*/*',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            origin: 'https://tr-license.most.gov.bd',
            'sec-fetch-site': 'same-site',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.post('https://tr-gateway.most.gov.bd/auth/oauth/load-auth-state', '{}', {
        headers: {
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          accept: 'application/json',
          'content-type': 'application/json',
          'sec-ch-ua-mobile': '?0',
          authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjE2NjgsInV1aWQiOiJmMmEzZjlkMy0zMGE4LTQyZmItYWIxMi1iODY5MDMzYTJiMjEiLCJvcmdhbml6YXRpb25faWQiOm51bGwsIm9yZ2Fub2dyYW1faWQiOm51bGwsIm9yZ2FuaXphdGlvbl9zaG9ydF9uYW1lIjoiIiwib3JnYW5pemF0aW9uX25hbWVfZW4iOiIiLCJvcmdhbml6YXRpb25fbmFtZV9ibiI6IiIsInJvbGVfaWQiOm51bGwsInJvbGVfY29kZSI6bnVsbCwicHJvZmlsZV90eXBlIjpudWxsLCJwcm9maWxlX2lkIjpudWxsLCJuYW1lIjoiTXIuQWJkdWxsYWgiLCJ1c2VyX3R5cGUiOiJTRVJWSUNFX1JFQ0lQSUVOVCIsImNvbXBhbnlfbmFtZSI6bnVsbCwibW9iaWxlIjpudWxsLCJlbWFpbCI6InBlcm1pdDFAeW9wbWFpbC5jb20iLCJyZW1lbWJlcl90b2tlbiI6bnVsbCwic3RhdHVzIjoxfSwiaWF0IjoxNzA1OTMxODA0LCJleHAiOjE3MDYwMzk4MDQsImp0aSI6InVRYVQ0bUxQdWMifQ.kU47P3PzBBqW9Rgd3U9DK_cyA2YPFR-Y7X50dYF_uv4',
          'sec-ch-ua-platform': '"Windows"',
          origin: 'https://tr-license.most.gov.bd',
          'sec-fetch-site': 'same-site',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        },
      })

      response = http.options('https://tr-gateway.most.gov.bd/auth/oauth/load-auth-state', null, {
        headers: {
          accept: '*/*',
          'access-control-request-method': 'POST',
          'access-control-request-headers': 'authorization,content-type',
          origin: 'https://tr-license.most.gov.bd',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-site',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        },
      })

      response = http.post(
        'https://tr-gateway.most.gov.bd/auth/oauth/load-user-scopes',
        '{"user_id":1668}',
        {
          headers: {
            'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
            accept: 'application/json',
            'content-type': 'application/json',
            'sec-ch-ua-mobile': '?0',
            authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjE2NjgsInV1aWQiOiJmMmEzZjlkMy0zMGE4LTQyZmItYWIxMi1iODY5MDMzYTJiMjEiLCJvcmdhbml6YXRpb25faWQiOm51bGwsIm9yZ2Fub2dyYW1faWQiOm51bGwsIm9yZ2FuaXphdGlvbl9zaG9ydF9uYW1lIjoiIiwib3JnYW5pemF0aW9uX25hbWVfZW4iOiIiLCJvcmdhbml6YXRpb25fbmFtZV9ibiI6IiIsInJvbGVfaWQiOm51bGwsInJvbGVfY29kZSI6bnVsbCwicHJvZmlsZV90eXBlIjpudWxsLCJwcm9maWxlX2lkIjpudWxsLCJuYW1lIjoiTXIuQWJkdWxsYWgiLCJ1c2VyX3R5cGUiOiJTRVJWSUNFX1JFQ0lQSUVOVCIsImNvbXBhbnlfbmFtZSI6bnVsbCwibW9iaWxlIjpudWxsLCJlbWFpbCI6InBlcm1pdDFAeW9wbWFpbC5jb20iLCJyZW1lbWJlcl90b2tlbiI6bnVsbCwic3RhdHVzIjoxfSwiaWF0IjoxNzA1OTMxODA0LCJleHAiOjE3MDYwMzk4MDQsImp0aSI6InVRYVQ0bUxQdWMifQ.kU47P3PzBBqW9Rgd3U9DK_cyA2YPFR-Y7X50dYF_uv4',
            'sec-ch-ua-platform': '"Windows"',
            origin: 'https://tr-license.most.gov.bd',
            'sec-fetch-site': 'same-site',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.get(
        'https://tr-gateway.most.gov.bd/auth/applicant-profile/applicant/details/1668',
        {
          headers: {
            'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
            accept: 'application/json',
            'sec-ch-ua-mobile': '?0',
            authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjE2NjgsInV1aWQiOiJmMmEzZjlkMy0zMGE4LTQyZmItYWIxMi1iODY5MDMzYTJiMjEiLCJvcmdhbml6YXRpb25faWQiOm51bGwsIm9yZ2Fub2dyYW1faWQiOm51bGwsIm9yZ2FuaXphdGlvbl9zaG9ydF9uYW1lIjoiIiwib3JnYW5pemF0aW9uX25hbWVfZW4iOiIiLCJvcmdhbml6YXRpb25fbmFtZV9ibiI6IiIsInJvbGVfaWQiOm51bGwsInJvbGVfY29kZSI6bnVsbCwicHJvZmlsZV90eXBlIjpudWxsLCJwcm9maWxlX2lkIjpudWxsLCJuYW1lIjoiTXIuQWJkdWxsYWgiLCJ1c2VyX3R5cGUiOiJTRVJWSUNFX1JFQ0lQSUVOVCIsImNvbXBhbnlfbmFtZSI6bnVsbCwibW9iaWxlIjpudWxsLCJlbWFpbCI6InBlcm1pdDFAeW9wbWFpbC5jb20iLCJyZW1lbWJlcl90b2tlbiI6bnVsbCwic3RhdHVzIjoxfSwiaWF0IjoxNzA1OTMxODA0LCJleHAiOjE3MDYwMzk4MDQsImp0aSI6InVRYVQ0bUxQdWMifQ.kU47P3PzBBqW9Rgd3U9DK_cyA2YPFR-Y7X50dYF_uv4',
            'sec-ch-ua-platform': '"Windows"',
            origin: 'https://tr-license.most.gov.bd',
            'sec-fetch-site': 'same-site',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.options('https://tr-gateway.most.gov.bd/auth/oauth/load-user-scopes', null, {
        headers: {
          accept: '*/*',
          'access-control-request-method': 'POST',
          'access-control-request-headers': 'authorization,content-type',
          origin: 'https://tr-license.most.gov.bd',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-site',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        },
      })

      response = http.options(
        'https://tr-gateway.most.gov.bd/auth/applicant-profile/applicant/details/1668',
        null,
        {
          headers: {
            accept: '*/*',
            'access-control-request-method': 'GET',
            'access-control-request-headers': 'authorization',
            origin: 'https://tr-license.most.gov.bd',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-site',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )
      sleep(7.6)

      response = http.get(
        'https://tr-gateway.most.gov.bd/core/enum/dropdown?$select=id,type,key,value_en,value_bn,is_default,organization_ids,sort_order,status&$orderby=sort_order+asc+value_en+asc',
        {
          headers: {
            'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
            accept: 'application/json',
            'sec-ch-ua-mobile': '?0',
            authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjE2NjgsInV1aWQiOiJmMmEzZjlkMy0zMGE4LTQyZmItYWIxMi1iODY5MDMzYTJiMjEiLCJvcmdhbml6YXRpb25faWQiOm51bGwsIm9yZ2Fub2dyYW1faWQiOm51bGwsIm9yZ2FuaXphdGlvbl9zaG9ydF9uYW1lIjoiIiwib3JnYW5pemF0aW9uX25hbWVfZW4iOiIiLCJvcmdhbml6YXRpb25fbmFtZV9ibiI6IiIsInJvbGVfaWQiOm51bGwsInJvbGVfY29kZSI6bnVsbCwicHJvZmlsZV90eXBlIjpudWxsLCJwcm9maWxlX2lkIjpudWxsLCJuYW1lIjoiTXIuQWJkdWxsYWgiLCJ1c2VyX3R5cGUiOiJTRVJWSUNFX1JFQ0lQSUVOVCIsImNvbXBhbnlfbmFtZSI6bnVsbCwibW9iaWxlIjpudWxsLCJlbWFpbCI6InBlcm1pdDFAeW9wbWFpbC5jb20iLCJyZW1lbWJlcl90b2tlbiI6bnVsbCwic3RhdHVzIjoxfSwiaWF0IjoxNzA1OTMxODA0LCJleHAiOjE3MDYwMzk4MDQsImp0aSI6InVRYVQ0bUxQdWMifQ.kU47P3PzBBqW9Rgd3U9DK_cyA2YPFR-Y7X50dYF_uv4',
            'sec-ch-ua-platform': '"Windows"',
            origin: 'https://tr-license.most.gov.bd',
            'sec-fetch-site': 'same-site',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.options(
        'https://tr-gateway.most.gov.bd/core/enum/dropdown?$select=id,type,key,value_en,value_bn,is_default,organization_ids,sort_order,status&$orderby=sort_order+asc+value_en+asc',
        null,
        {
          headers: {
            accept: '*/*',
            'access-control-request-method': 'GET',
            'access-control-request-headers': 'authorization',
            origin: 'https://tr-license.most.gov.bd',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-site',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.get(
        'https://tr-gateway.most.gov.bd/core/service-mapping/dropdown?$select=id,name_en,name_bn,status,organization_id,component_id,service_assignment_id,service_id,description_en,description_bn,icon,image,key,slug&$orderby=name_en+asc',
        {
          headers: {
            'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
            accept: 'application/json',
            'sec-ch-ua-mobile': '?0',
            authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjE2NjgsInV1aWQiOiJmMmEzZjlkMy0zMGE4LTQyZmItYWIxMi1iODY5MDMzYTJiMjEiLCJvcmdhbml6YXRpb25faWQiOm51bGwsIm9yZ2Fub2dyYW1faWQiOm51bGwsIm9yZ2FuaXphdGlvbl9zaG9ydF9uYW1lIjoiIiwib3JnYW5pemF0aW9uX25hbWVfZW4iOiIiLCJvcmdhbml6YXRpb25fbmFtZV9ibiI6IiIsInJvbGVfaWQiOm51bGwsInJvbGVfY29kZSI6bnVsbCwicHJvZmlsZV90eXBlIjpudWxsLCJwcm9maWxlX2lkIjpudWxsLCJuYW1lIjoiTXIuQWJkdWxsYWgiLCJ1c2VyX3R5cGUiOiJTRVJWSUNFX1JFQ0lQSUVOVCIsImNvbXBhbnlfbmFtZSI6bnVsbCwibW9iaWxlIjpudWxsLCJlbWFpbCI6InBlcm1pdDFAeW9wbWFpbC5jb20iLCJyZW1lbWJlcl90b2tlbiI6bnVsbCwic3RhdHVzIjoxfSwiaWF0IjoxNzA1OTMxODA0LCJleHAiOjE3MDYwMzk4MDQsImp0aSI6InVRYVQ0bUxQdWMifQ.kU47P3PzBBqW9Rgd3U9DK_cyA2YPFR-Y7X50dYF_uv4',
            'sec-ch-ua-platform': '"Windows"',
            origin: 'https://tr-license.most.gov.bd',
            'sec-fetch-site': 'same-site',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.options(
        'https://tr-gateway.most.gov.bd/core/service-mapping/dropdown?$select=id,name_en,name_bn,status,organization_id,component_id,service_assignment_id,service_id,description_en,description_bn,icon,image,key,slug&$orderby=name_en+asc',
        null,
        {
          headers: {
            accept: '*/*',
            'access-control-request-method': 'GET',
            'access-control-request-headers': 'authorization',
            origin: 'https://tr-license.most.gov.bd',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-site',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )
      sleep(12.5)

      formData = new FormData()
      formData.boundary = '----WebKitFormBoundaryhanmCgAC0yDgMsAJ'
      formData.append('componentName', 'License')
      formData.append('file', '1678165347882.pdf')
      formData.append('recordFieldName', 'original_license_attachment')
      formData.append('recordId', 'null')
      formData.append('recordType', 'RCOManual')

      response = http.post('https://tr-cdn.most.gov.bd/file/upload', formData.body(), {
        headers: {
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          accept: 'application/json',
          'content-type': 'multipart/form-data; boundary=----WebKitFormBoundaryhanmCgAC0yDgMsAJ',
          'sec-ch-ua-mobile': '?0',
          authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjE2NjgsInV1aWQiOiJmMmEzZjlkMy0zMGE4LTQyZmItYWIxMi1iODY5MDMzYTJiMjEiLCJvcmdhbml6YXRpb25faWQiOm51bGwsIm9yZ2Fub2dyYW1faWQiOm51bGwsIm9yZ2FuaXphdGlvbl9zaG9ydF9uYW1lIjoiIiwib3JnYW5pemF0aW9uX25hbWVfZW4iOiIiLCJvcmdhbml6YXRpb25fbmFtZV9ibiI6IiIsInJvbGVfaWQiOm51bGwsInJvbGVfY29kZSI6bnVsbCwicHJvZmlsZV90eXBlIjpudWxsLCJwcm9maWxlX2lkIjpudWxsLCJuYW1lIjoiTXIuQWJkdWxsYWgiLCJ1c2VyX3R5cGUiOiJTRVJWSUNFX1JFQ0lQSUVOVCIsImNvbXBhbnlfbmFtZSI6bnVsbCwibW9iaWxlIjpudWxsLCJlbWFpbCI6InBlcm1pdDFAeW9wbWFpbC5jb20iLCJyZW1lbWJlcl90b2tlbiI6bnVsbCwic3RhdHVzIjoxfSwiaWF0IjoxNzA1OTMxODA0LCJleHAiOjE3MDYwMzk4MDQsImp0aSI6InVRYVQ0bUxQdWMifQ.kU47P3PzBBqW9Rgd3U9DK_cyA2YPFR-Y7X50dYF_uv4',
          'sec-ch-ua-platform': '"Windows"',
          origin: 'https://tr-license.most.gov.bd',
          'sec-fetch-site': 'same-site',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        },
      })

      response = http.options('https://tr-cdn.most.gov.bd/file/upload', null, {
        headers: {
          accept: '*/*',
          'access-control-request-method': 'POST',
          'access-control-request-headers': 'authorization',
          origin: 'https://tr-license.most.gov.bd',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-site',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        },
      })
      sleep(85.5)

      formData = new FormData()
      formData.boundary = '----WebKitFormBoundaryXLYkYljDv3GydoAo'
      formData.append('componentName', 'License')
      formData.append('file', 'th (1).jpg')
      formData.append('recordFieldName', 'null')
      formData.append('recordId', 'null')
      formData.append('recordType', 'null')

      response = http.post('https://tr-cdn.most.gov.bd/file/upload', formData.body(), {
        headers: {
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          accept: 'application/json',
          'content-type': 'multipart/form-data; boundary=----WebKitFormBoundaryXLYkYljDv3GydoAo',
          'sec-ch-ua-mobile': '?0',
          authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjE2NjgsInV1aWQiOiJmMmEzZjlkMy0zMGE4LTQyZmItYWIxMi1iODY5MDMzYTJiMjEiLCJvcmdhbml6YXRpb25faWQiOm51bGwsIm9yZ2Fub2dyYW1faWQiOm51bGwsIm9yZ2FuaXphdGlvbl9zaG9ydF9uYW1lIjoiIiwib3JnYW5pemF0aW9uX25hbWVfZW4iOiIiLCJvcmdhbml6YXRpb25fbmFtZV9ibiI6IiIsInJvbGVfaWQiOm51bGwsInJvbGVfY29kZSI6bnVsbCwicHJvZmlsZV90eXBlIjpudWxsLCJwcm9maWxlX2lkIjpudWxsLCJuYW1lIjoiTXIuQWJkdWxsYWgiLCJ1c2VyX3R5cGUiOiJTRVJWSUNFX1JFQ0lQSUVOVCIsImNvbXBhbnlfbmFtZSI6bnVsbCwibW9iaWxlIjpudWxsLCJlbWFpbCI6InBlcm1pdDFAeW9wbWFpbC5jb20iLCJyZW1lbWJlcl90b2tlbiI6bnVsbCwic3RhdHVzIjoxfSwiaWF0IjoxNzA1OTMxODA0LCJleHAiOjE3MDYwMzk4MDQsImp0aSI6InVRYVQ0bUxQdWMifQ.kU47P3PzBBqW9Rgd3U9DK_cyA2YPFR-Y7X50dYF_uv4',
          'sec-ch-ua-platform': '"Windows"',
          origin: 'https://tr-license.most.gov.bd',
          'sec-fetch-site': 'same-site',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        },
      })

      response = http.options('https://tr-cdn.most.gov.bd/file/upload', null, {
        headers: {
          accept: '*/*',
          'access-control-request-method': 'POST',
          'access-control-request-headers': 'authorization',
          origin: 'https://tr-license.most.gov.bd',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-site',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        },
      })
      sleep(8.4)

      response = http.post(
        'https://tr-gateway.most.gov.bd/license/rco-application/store',
        '{"applicationData":{"type_of_certificate":"PROVISIONAL","provisional_certificate_number":"71/2023","original_license_attachment":"65ae743f6dd91","legacy_issue_renew_date":"2020-01-03T13:57:29.452Z","legacy_expiry_date":"2024-02-09T13:57:35.512Z","institute_name":"Somed","institute_address":"Mirpur ","institute_division_id":3,"institute_district_id":21,"institute_upazila_id":5158,"institute_mobile":"01293843294","institute_email":"abc@yopmail.com","rco_name":"Somed","rco_designation":"RCO officer ","rco_date_of_birth":"2009-01-09T13:58:25.128Z","rco_gender":"MALE","applicant_signature":"65ae749498093","is_agreed":true,"application_type":"NEW","application_medium":"MANUAL","current_active_step":2,"organization_id":7,"service_mapping_id":57,"status":"SUBMITTED"}}',
        {
          headers: {
            'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
            accept: 'application/json',
            'content-type': 'application/json',
            'sec-ch-ua-mobile': '?0',
            authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjE2NjgsInV1aWQiOiJmMmEzZjlkMy0zMGE4LTQyZmItYWIxMi1iODY5MDMzYTJiMjEiLCJvcmdhbml6YXRpb25faWQiOm51bGwsIm9yZ2Fub2dyYW1faWQiOm51bGwsIm9yZ2FuaXphdGlvbl9zaG9ydF9uYW1lIjoiIiwib3JnYW5pemF0aW9uX25hbWVfZW4iOiIiLCJvcmdhbml6YXRpb25fbmFtZV9ibiI6IiIsInJvbGVfaWQiOm51bGwsInJvbGVfY29kZSI6bnVsbCwicHJvZmlsZV90eXBlIjpudWxsLCJwcm9maWxlX2lkIjpudWxsLCJuYW1lIjoiTXIuQWJkdWxsYWgiLCJ1c2VyX3R5cGUiOiJTRVJWSUNFX1JFQ0lQSUVOVCIsImNvbXBhbnlfbmFtZSI6bnVsbCwibW9iaWxlIjpudWxsLCJlbWFpbCI6InBlcm1pdDFAeW9wbWFpbC5jb20iLCJyZW1lbWJlcl90b2tlbiI6bnVsbCwic3RhdHVzIjoxfSwiaWF0IjoxNzA1OTMxODA0LCJleHAiOjE3MDYwMzk4MDQsImp0aSI6InVRYVQ0bUxQdWMifQ.kU47P3PzBBqW9Rgd3U9DK_cyA2YPFR-Y7X50dYF_uv4',
            'sec-ch-ua-platform': '"Windows"',
            origin: 'https://tr-license.most.gov.bd',
            'sec-fetch-site': 'same-site',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.options(
        'https://tr-gateway.most.gov.bd/license/rco-application/store',
        null,
        {
          headers: {
            accept: '*/*',
            'access-control-request-method': 'POST',
            'access-control-request-headers': 'authorization,content-type',
            origin: 'https://tr-license.most.gov.bd',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-site',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )
      sleep(1)

      response = http.get('https://tr-gateway.most.gov.bd/license/rco-application/42', {
        headers: {
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          accept: 'application/json',
          'sec-ch-ua-mobile': '?0',
          authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjE2NjgsInV1aWQiOiJmMmEzZjlkMy0zMGE4LTQyZmItYWIxMi1iODY5MDMzYTJiMjEiLCJvcmdhbml6YXRpb25faWQiOm51bGwsIm9yZ2Fub2dyYW1faWQiOm51bGwsIm9yZ2FuaXphdGlvbl9zaG9ydF9uYW1lIjoiIiwib3JnYW5pemF0aW9uX25hbWVfZW4iOiIiLCJvcmdhbml6YXRpb25fbmFtZV9ibiI6IiIsInJvbGVfaWQiOm51bGwsInJvbGVfY29kZSI6bnVsbCwicHJvZmlsZV90eXBlIjpudWxsLCJwcm9maWxlX2lkIjpudWxsLCJuYW1lIjoiTXIuQWJkdWxsYWgiLCJ1c2VyX3R5cGUiOiJTRVJWSUNFX1JFQ0lQSUVOVCIsImNvbXBhbnlfbmFtZSI6bnVsbCwibW9iaWxlIjpudWxsLCJlbWFpbCI6InBlcm1pdDFAeW9wbWFpbC5jb20iLCJyZW1lbWJlcl90b2tlbiI6bnVsbCwic3RhdHVzIjoxfSwiaWF0IjoxNzA1OTMxODA0LCJleHAiOjE3MDYwMzk4MDQsImp0aSI6InVRYVQ0bUxQdWMifQ.kU47P3PzBBqW9Rgd3U9DK_cyA2YPFR-Y7X50dYF_uv4',
          'sec-ch-ua-platform': '"Windows"',
          origin: 'https://tr-license.most.gov.bd',
          'sec-fetch-site': 'same-site',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        },
      })

      response = http.options('https://tr-gateway.most.gov.bd/license/rco-application/42', null, {
        headers: {
          accept: '*/*',
          'access-control-request-method': 'GET',
          'access-control-request-headers': 'authorization',
          origin: 'https://tr-license.most.gov.bd',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-site',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        },
      })
      sleep(3.1)
    }
  )

  group(
    'page_3 - https://tr-accounts.most.gov.bd/my-account/en/license/application-list',
    function () {
      response = http.get(
        'https://tr-accounts.most.gov.bd/my-account/en/license/application-list',
        {
          headers: {
            'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'upgrade-insecure-requests': '1',
            accept:
              'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
            'sec-fetch-site': 'same-site',
            'sec-fetch-mode': 'navigate',
            'sec-fetch-user': '?1',
            'sec-fetch-dest': 'document',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )
      sleep(2.1)

      response = http.get(
        'https://tr-socket.most.gov.bd/socket.io/?EIO=4&transport=polling&t=OqnTx05',
        {
          headers: {
            'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
            accept: '*/*',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            origin: 'https://tr-accounts.most.gov.bd',
            'sec-fetch-site': 'same-site',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.get('https://tr-gateway.most.gov.bd/core/option/load', {
        headers: {
          'x-client-secret': '9a169F9B0F4f4350Ad1a430ce4F9d215',
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'x-app-identifier': 'UserPanelUI',
          'sec-ch-ua-mobile': '?0',
          authorization: '',
          accept: 'application/json',
          'x-client-id': '95b4b010fde64b1aace9d46f3c1880d5',
          'sec-ch-ua-platform': '"Windows"',
          origin: 'https://tr-accounts.most.gov.bd',
          'sec-fetch-site': 'same-site',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        },
      })

      response = http.options('https://tr-gateway.most.gov.bd/core/option/load', null, {
        headers: {
          accept: '*/*',
          'access-control-request-method': 'GET',
          'access-control-request-headers':
            'authorization,x-app-identifier,x-client-id,x-client-secret',
          origin: 'https://tr-accounts.most.gov.bd',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-site',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        },
      })

      response = http.post(
        'https://tr-socket.most.gov.bd/socket.io/?EIO=4&transport=polling&t=OqnTx2S&sid=QROsM3goFZFRT659ALXd',
        '40',
        {
          headers: {
            'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
            accept: '*/*',
            'content-type': 'text/plain; charset=UTF-8',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            origin: 'https://tr-accounts.most.gov.bd',
            'sec-fetch-site': 'same-site',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.get(
        'https://tr-socket.most.gov.bd/socket.io/?EIO=4&transport=polling&t=OqnTx2U&sid=QROsM3goFZFRT659ALXd',
        {
          headers: {
            'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
            accept: '*/*',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            origin: 'https://tr-accounts.most.gov.bd',
            'sec-fetch-site': 'same-site',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.get(
        'https://tr-socket.most.gov.bd/socket.io/?EIO=4&transport=polling&t=OqnTx3D&sid=QROsM3goFZFRT659ALXd',
        {
          headers: {
            'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
            accept: '*/*',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            origin: 'https://tr-accounts.most.gov.bd',
            'sec-fetch-site': 'same-site',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.get('https://tr-services.most.gov.bd/post_message_to_frame_owner.html', {
        headers: {
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          'upgrade-insecure-requests': '1',
          accept:
            'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
          'sec-fetch-site': 'same-site',
          'sec-fetch-mode': 'navigate',
          'sec-fetch-dest': 'iframe',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        },
      })

      response = http.get(
        'https://tr-gateway.most.gov.bd/core/location/dropdown?$select=id,name_en,name_bn,parent_location_id,location_type_id,country_id,division_id,district_id,status&$filter=location_type_id+IN(%27COUNTRY%27,+%27DIVISION%27,+%27DISTRICT%27,+%27THANA%27)&$orderby=name_en+asc',
        {
          headers: {
            'x-client-secret': '9a169F9B0F4f4350Ad1a430ce4F9d215',
            'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
            'x-app-identifier': 'UserPanelUI',
            'sec-ch-ua-mobile': '?0',
            authorization: '',
            accept: 'application/json',
            'x-client-id': '95b4b010fde64b1aace9d46f3c1880d5',
            'sec-ch-ua-platform': '"Windows"',
            origin: 'https://tr-accounts.most.gov.bd',
            'sec-fetch-site': 'same-site',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.options(
        'https://tr-gateway.most.gov.bd/core/location/dropdown?$select=id,name_en,name_bn,parent_location_id,location_type_id,country_id,division_id,district_id,status&$filter=location_type_id+IN(%27COUNTRY%27,+%27DIVISION%27,+%27DISTRICT%27,+%27THANA%27)&$orderby=name_en+asc',
        null,
        {
          headers: {
            accept: '*/*',
            'access-control-request-method': 'GET',
            'access-control-request-headers':
              'authorization,x-app-identifier,x-client-id,x-client-secret',
            origin: 'https://tr-accounts.most.gov.bd',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-site',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.post('https://tr-gateway.most.gov.bd/auth/oauth/load-auth-state', '{}', {
        headers: {
          'x-client-secret': '9a169F9B0F4f4350Ad1a430ce4F9d215',
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'x-app-identifier': 'UserPanelUI',
          'sec-ch-ua-mobile': '?0',
          authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjE2NjgsInV1aWQiOiJmMmEzZjlkMy0zMGE4LTQyZmItYWIxMi1iODY5MDMzYTJiMjEiLCJvcmdhbml6YXRpb25faWQiOm51bGwsIm9yZ2Fub2dyYW1faWQiOm51bGwsIm9yZ2FuaXphdGlvbl9zaG9ydF9uYW1lIjoiIiwib3JnYW5pemF0aW9uX25hbWVfZW4iOiIiLCJvcmdhbml6YXRpb25fbmFtZV9ibiI6IiIsInJvbGVfaWQiOm51bGwsInJvbGVfY29kZSI6bnVsbCwicHJvZmlsZV90eXBlIjpudWxsLCJwcm9maWxlX2lkIjpudWxsLCJuYW1lIjoiTXIuQWJkdWxsYWgiLCJ1c2VyX3R5cGUiOiJTRVJWSUNFX1JFQ0lQSUVOVCIsImNvbXBhbnlfbmFtZSI6bnVsbCwibW9iaWxlIjpudWxsLCJlbWFpbCI6InBlcm1pdDFAeW9wbWFpbC5jb20iLCJyZW1lbWJlcl90b2tlbiI6bnVsbCwic3RhdHVzIjoxfSwiaWF0IjoxNzA1OTMxODA0LCJleHAiOjE3MDYwMzk4MDQsImp0aSI6InVRYVQ0bUxQdWMifQ.kU47P3PzBBqW9Rgd3U9DK_cyA2YPFR-Y7X50dYF_uv4',
          'content-type': 'application/json',
          accept: 'application/json',
          'x-client-id': '95b4b010fde64b1aace9d46f3c1880d5',
          'sec-ch-ua-platform': '"Windows"',
          origin: 'https://tr-accounts.most.gov.bd',
          'sec-fetch-site': 'same-site',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        },
      })

      response = http.options('https://tr-gateway.most.gov.bd/auth/oauth/load-auth-state', null, {
        headers: {
          accept: '*/*',
          'access-control-request-method': 'POST',
          'access-control-request-headers':
            'authorization,content-type,x-app-identifier,x-client-id,x-client-secret',
          origin: 'https://tr-accounts.most.gov.bd',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-site',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        },
      })

      response = http.post(
        'https://tr-gateway.most.gov.bd/auth/oauth/load-user-scopes',
        '{"user_id":1668}',
        {
          headers: {
            'x-client-secret': '9a169F9B0F4f4350Ad1a430ce4F9d215',
            'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
            'x-app-identifier': 'UserPanelUI',
            'sec-ch-ua-mobile': '?0',
            authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjE2NjgsInV1aWQiOiJmMmEzZjlkMy0zMGE4LTQyZmItYWIxMi1iODY5MDMzYTJiMjEiLCJvcmdhbml6YXRpb25faWQiOm51bGwsIm9yZ2Fub2dyYW1faWQiOm51bGwsIm9yZ2FuaXphdGlvbl9zaG9ydF9uYW1lIjoiIiwib3JnYW5pemF0aW9uX25hbWVfZW4iOiIiLCJvcmdhbml6YXRpb25fbmFtZV9ibiI6IiIsInJvbGVfaWQiOm51bGwsInJvbGVfY29kZSI6bnVsbCwicHJvZmlsZV90eXBlIjpudWxsLCJwcm9maWxlX2lkIjpudWxsLCJuYW1lIjoiTXIuQWJkdWxsYWgiLCJ1c2VyX3R5cGUiOiJTRVJWSUNFX1JFQ0lQSUVOVCIsImNvbXBhbnlfbmFtZSI6bnVsbCwibW9iaWxlIjpudWxsLCJlbWFpbCI6InBlcm1pdDFAeW9wbWFpbC5jb20iLCJyZW1lbWJlcl90b2tlbiI6bnVsbCwic3RhdHVzIjoxfSwiaWF0IjoxNzA1OTMxODA0LCJleHAiOjE3MDYwMzk4MDQsImp0aSI6InVRYVQ0bUxQdWMifQ.kU47P3PzBBqW9Rgd3U9DK_cyA2YPFR-Y7X50dYF_uv4',
            'content-type': 'application/json',
            accept: 'application/json',
            'x-client-id': '95b4b010fde64b1aace9d46f3c1880d5',
            'sec-ch-ua-platform': '"Windows"',
            origin: 'https://tr-accounts.most.gov.bd',
            'sec-fetch-site': 'same-site',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.options('https://tr-gateway.most.gov.bd/auth/oauth/load-user-scopes', null, {
        headers: {
          accept: '*/*',
          'access-control-request-method': 'POST',
          'access-control-request-headers':
            'authorization,content-type,x-app-identifier,x-client-id,x-client-secret',
          origin: 'https://tr-accounts.most.gov.bd',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-site',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        },
      })

      response = http.get('https://tr-gateway.most.gov.bd/grant/committee/committeeMember/1668', {
        headers: {
          'x-client-secret': '9a169F9B0F4f4350Ad1a430ce4F9d215',
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'x-app-identifier': 'UserPanelUI',
          'sec-ch-ua-mobile': '?0',
          authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjE2NjgsInV1aWQiOiJmMmEzZjlkMy0zMGE4LTQyZmItYWIxMi1iODY5MDMzYTJiMjEiLCJvcmdhbml6YXRpb25faWQiOm51bGwsIm9yZ2Fub2dyYW1faWQiOm51bGwsIm9yZ2FuaXphdGlvbl9zaG9ydF9uYW1lIjoiIiwib3JnYW5pemF0aW9uX25hbWVfZW4iOiIiLCJvcmdhbml6YXRpb25fbmFtZV9ibiI6IiIsInJvbGVfaWQiOm51bGwsInJvbGVfY29kZSI6bnVsbCwicHJvZmlsZV90eXBlIjpudWxsLCJwcm9maWxlX2lkIjpudWxsLCJuYW1lIjoiTXIuQWJkdWxsYWgiLCJ1c2VyX3R5cGUiOiJTRVJWSUNFX1JFQ0lQSUVOVCIsImNvbXBhbnlfbmFtZSI6bnVsbCwibW9iaWxlIjpudWxsLCJlbWFpbCI6InBlcm1pdDFAeW9wbWFpbC5jb20iLCJyZW1lbWJlcl90b2tlbiI6bnVsbCwic3RhdHVzIjoxfSwiaWF0IjoxNzA1OTMxODA0LCJleHAiOjE3MDYwMzk4MDQsImp0aSI6InVRYVQ0bUxQdWMifQ.kU47P3PzBBqW9Rgd3U9DK_cyA2YPFR-Y7X50dYF_uv4',
          accept: 'application/json',
          'x-client-id': '95b4b010fde64b1aace9d46f3c1880d5',
          'sec-ch-ua-platform': '"Windows"',
          origin: 'https://tr-accounts.most.gov.bd',
          'sec-fetch-site': 'same-site',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        },
      })

      response = http.options(
        'https://tr-gateway.most.gov.bd/grant/committee/committeeMember/1668',
        null,
        {
          headers: {
            accept: '*/*',
            'access-control-request-method': 'GET',
            'access-control-request-headers':
              'authorization,x-app-identifier,x-client-id,x-client-secret',
            origin: 'https://tr-accounts.most.gov.bd',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-site',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.get('https://tr-gateway.most.gov.bd/auth/institute-head/user/1668', {
        headers: {
          'x-client-secret': '9a169F9B0F4f4350Ad1a430ce4F9d215',
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'x-app-identifier': 'UserPanelUI',
          'sec-ch-ua-mobile': '?0',
          authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjE2NjgsInV1aWQiOiJmMmEzZjlkMy0zMGE4LTQyZmItYWIxMi1iODY5MDMzYTJiMjEiLCJvcmdhbml6YXRpb25faWQiOm51bGwsIm9yZ2Fub2dyYW1faWQiOm51bGwsIm9yZ2FuaXphdGlvbl9zaG9ydF9uYW1lIjoiIiwib3JnYW5pemF0aW9uX25hbWVfZW4iOiIiLCJvcmdhbml6YXRpb25fbmFtZV9ibiI6IiIsInJvbGVfaWQiOm51bGwsInJvbGVfY29kZSI6bnVsbCwicHJvZmlsZV90eXBlIjpudWxsLCJwcm9maWxlX2lkIjpudWxsLCJuYW1lIjoiTXIuQWJkdWxsYWgiLCJ1c2VyX3R5cGUiOiJTRVJWSUNFX1JFQ0lQSUVOVCIsImNvbXBhbnlfbmFtZSI6bnVsbCwibW9iaWxlIjpudWxsLCJlbWFpbCI6InBlcm1pdDFAeW9wbWFpbC5jb20iLCJyZW1lbWJlcl90b2tlbiI6bnVsbCwic3RhdHVzIjoxfSwiaWF0IjoxNzA1OTMxODA0LCJleHAiOjE3MDYwMzk4MDQsImp0aSI6InVRYVQ0bUxQdWMifQ.kU47P3PzBBqW9Rgd3U9DK_cyA2YPFR-Y7X50dYF_uv4',
          accept: 'application/json',
          'x-client-id': '95b4b010fde64b1aace9d46f3c1880d5',
          'sec-ch-ua-platform': '"Windows"',
          origin: 'https://tr-accounts.most.gov.bd',
          'sec-fetch-site': 'same-site',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        },
      })

      response = http.get(
        'https://tr-gateway.most.gov.bd/library/library-setup/getLibraryInfoByMemberUserId?$memberUserId=1668',
        {
          headers: {
            'x-client-secret': '9a169F9B0F4f4350Ad1a430ce4F9d215',
            'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
            'x-app-identifier': 'UserPanelUI',
            'sec-ch-ua-mobile': '?0',
            authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjE2NjgsInV1aWQiOiJmMmEzZjlkMy0zMGE4LTQyZmItYWIxMi1iODY5MDMzYTJiMjEiLCJvcmdhbml6YXRpb25faWQiOm51bGwsIm9yZ2Fub2dyYW1faWQiOm51bGwsIm9yZ2FuaXphdGlvbl9zaG9ydF9uYW1lIjoiIiwib3JnYW5pemF0aW9uX25hbWVfZW4iOiIiLCJvcmdhbml6YXRpb25fbmFtZV9ibiI6IiIsInJvbGVfaWQiOm51bGwsInJvbGVfY29kZSI6bnVsbCwicHJvZmlsZV90eXBlIjpudWxsLCJwcm9maWxlX2lkIjpudWxsLCJuYW1lIjoiTXIuQWJkdWxsYWgiLCJ1c2VyX3R5cGUiOiJTRVJWSUNFX1JFQ0lQSUVOVCIsImNvbXBhbnlfbmFtZSI6bnVsbCwibW9iaWxlIjpudWxsLCJlbWFpbCI6InBlcm1pdDFAeW9wbWFpbC5jb20iLCJyZW1lbWJlcl90b2tlbiI6bnVsbCwic3RhdHVzIjoxfSwiaWF0IjoxNzA1OTMxODA0LCJleHAiOjE3MDYwMzk4MDQsImp0aSI6InVRYVQ0bUxQdWMifQ.kU47P3PzBBqW9Rgd3U9DK_cyA2YPFR-Y7X50dYF_uv4',
            accept: 'application/json',
            'x-client-id': '95b4b010fde64b1aace9d46f3c1880d5',
            'sec-ch-ua-platform': '"Windows"',
            origin: 'https://tr-accounts.most.gov.bd',
            'sec-fetch-site': 'same-site',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.options(
        'https://tr-gateway.most.gov.bd/auth/institute-head/user/1668',
        null,
        {
          headers: {
            accept: '*/*',
            'access-control-request-method': 'GET',
            'access-control-request-headers':
              'authorization,x-app-identifier,x-client-id,x-client-secret',
            origin: 'https://tr-accounts.most.gov.bd',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-site',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.options(
        'https://tr-gateway.most.gov.bd/library/library-setup/getLibraryInfoByMemberUserId?$memberUserId=1668',
        null,
        {
          headers: {
            accept: '*/*',
            'access-control-request-method': 'GET',
            'access-control-request-headers':
              'authorization,x-app-identifier,x-client-id,x-client-secret',
            origin: 'https://tr-accounts.most.gov.bd',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-site',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.post(
        'https://tr-gateway.most.gov.bd/auth/oauth/load-user-scopes',
        '{"user_id":1668}',
        {
          headers: {
            'x-client-secret': '9a169F9B0F4f4350Ad1a430ce4F9d215',
            'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
            'x-app-identifier': 'UserPanelUI',
            'sec-ch-ua-mobile': '?0',
            authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjE2NjgsInV1aWQiOiJmMmEzZjlkMy0zMGE4LTQyZmItYWIxMi1iODY5MDMzYTJiMjEiLCJvcmdhbml6YXRpb25faWQiOm51bGwsIm9yZ2Fub2dyYW1faWQiOm51bGwsIm9yZ2FuaXphdGlvbl9zaG9ydF9uYW1lIjoiIiwib3JnYW5pemF0aW9uX25hbWVfZW4iOiIiLCJvcmdhbml6YXRpb25fbmFtZV9ibiI6IiIsInJvbGVfaWQiOm51bGwsInJvbGVfY29kZSI6bnVsbCwicHJvZmlsZV90eXBlIjpudWxsLCJwcm9maWxlX2lkIjpudWxsLCJuYW1lIjoiTXIuQWJkdWxsYWgiLCJ1c2VyX3R5cGUiOiJTRVJWSUNFX1JFQ0lQSUVOVCIsImNvbXBhbnlfbmFtZSI6bnVsbCwibW9iaWxlIjpudWxsLCJlbWFpbCI6InBlcm1pdDFAeW9wbWFpbC5jb20iLCJyZW1lbWJlcl90b2tlbiI6bnVsbCwic3RhdHVzIjoxfSwiaWF0IjoxNzA1OTMxODA0LCJleHAiOjE3MDYwMzk4MDQsImp0aSI6InVRYVQ0bUxQdWMifQ.kU47P3PzBBqW9Rgd3U9DK_cyA2YPFR-Y7X50dYF_uv4',
            'content-type': 'application/json',
            accept: 'application/json',
            'x-client-id': '95b4b010fde64b1aace9d46f3c1880d5',
            'sec-ch-ua-platform': '"Windows"',
            origin: 'https://tr-accounts.most.gov.bd',
            'sec-fetch-site': 'same-site',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.options('https://tr-gateway.most.gov.bd/auth/oauth/load-user-scopes', null, {
        headers: {
          accept: '*/*',
          'access-control-request-method': 'POST',
          'access-control-request-headers':
            'authorization,content-type,x-app-identifier,x-client-id,x-client-secret',
          origin: 'https://tr-accounts.most.gov.bd',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-site',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        },
      })

      response = http.get('https://tr-gateway.most.gov.bd/grant/committee/committeeMember/1668', {
        headers: {
          'x-client-secret': '9a169F9B0F4f4350Ad1a430ce4F9d215',
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'x-app-identifier': 'UserPanelUI',
          'sec-ch-ua-mobile': '?0',
          authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjE2NjgsInV1aWQiOiJmMmEzZjlkMy0zMGE4LTQyZmItYWIxMi1iODY5MDMzYTJiMjEiLCJvcmdhbml6YXRpb25faWQiOm51bGwsIm9yZ2Fub2dyYW1faWQiOm51bGwsIm9yZ2FuaXphdGlvbl9zaG9ydF9uYW1lIjoiIiwib3JnYW5pemF0aW9uX25hbWVfZW4iOiIiLCJvcmdhbml6YXRpb25fbmFtZV9ibiI6IiIsInJvbGVfaWQiOm51bGwsInJvbGVfY29kZSI6bnVsbCwicHJvZmlsZV90eXBlIjpudWxsLCJwcm9maWxlX2lkIjpudWxsLCJuYW1lIjoiTXIuQWJkdWxsYWgiLCJ1c2VyX3R5cGUiOiJTRVJWSUNFX1JFQ0lQSUVOVCIsImNvbXBhbnlfbmFtZSI6bnVsbCwibW9iaWxlIjpudWxsLCJlbWFpbCI6InBlcm1pdDFAeW9wbWFpbC5jb20iLCJyZW1lbWJlcl90b2tlbiI6bnVsbCwic3RhdHVzIjoxfSwiaWF0IjoxNzA1OTMxODA0LCJleHAiOjE3MDYwMzk4MDQsImp0aSI6InVRYVQ0bUxQdWMifQ.kU47P3PzBBqW9Rgd3U9DK_cyA2YPFR-Y7X50dYF_uv4',
          accept: 'application/json',
          'x-client-id': '95b4b010fde64b1aace9d46f3c1880d5',
          'sec-ch-ua-platform': '"Windows"',
          origin: 'https://tr-accounts.most.gov.bd',
          'sec-fetch-site': 'same-site',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        },
      })

      response = http.get('https://tr-gateway.most.gov.bd/auth/institute-head/user/1668', {
        headers: {
          'x-client-secret': '9a169F9B0F4f4350Ad1a430ce4F9d215',
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'x-app-identifier': 'UserPanelUI',
          'sec-ch-ua-mobile': '?0',
          authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjE2NjgsInV1aWQiOiJmMmEzZjlkMy0zMGE4LTQyZmItYWIxMi1iODY5MDMzYTJiMjEiLCJvcmdhbml6YXRpb25faWQiOm51bGwsIm9yZ2Fub2dyYW1faWQiOm51bGwsIm9yZ2FuaXphdGlvbl9zaG9ydF9uYW1lIjoiIiwib3JnYW5pemF0aW9uX25hbWVfZW4iOiIiLCJvcmdhbml6YXRpb25fbmFtZV9ibiI6IiIsInJvbGVfaWQiOm51bGwsInJvbGVfY29kZSI6bnVsbCwicHJvZmlsZV90eXBlIjpudWxsLCJwcm9maWxlX2lkIjpudWxsLCJuYW1lIjoiTXIuQWJkdWxsYWgiLCJ1c2VyX3R5cGUiOiJTRVJWSUNFX1JFQ0lQSUVOVCIsImNvbXBhbnlfbmFtZSI6bnVsbCwibW9iaWxlIjpudWxsLCJlbWFpbCI6InBlcm1pdDFAeW9wbWFpbC5jb20iLCJyZW1lbWJlcl90b2tlbiI6bnVsbCwic3RhdHVzIjoxfSwiaWF0IjoxNzA1OTMxODA0LCJleHAiOjE3MDYwMzk4MDQsImp0aSI6InVRYVQ0bUxQdWMifQ.kU47P3PzBBqW9Rgd3U9DK_cyA2YPFR-Y7X50dYF_uv4',
          accept: 'application/json',
          'x-client-id': '95b4b010fde64b1aace9d46f3c1880d5',
          'sec-ch-ua-platform': '"Windows"',
          origin: 'https://tr-accounts.most.gov.bd',
          'sec-fetch-site': 'same-site',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        },
      })

      response = http.get(
        'https://tr-gateway.most.gov.bd/library/library-setup/getLibraryInfoByMemberUserId?$memberUserId=1668',
        {
          headers: {
            'x-client-secret': '9a169F9B0F4f4350Ad1a430ce4F9d215',
            'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
            'x-app-identifier': 'UserPanelUI',
            'sec-ch-ua-mobile': '?0',
            authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjE2NjgsInV1aWQiOiJmMmEzZjlkMy0zMGE4LTQyZmItYWIxMi1iODY5MDMzYTJiMjEiLCJvcmdhbml6YXRpb25faWQiOm51bGwsIm9yZ2Fub2dyYW1faWQiOm51bGwsIm9yZ2FuaXphdGlvbl9zaG9ydF9uYW1lIjoiIiwib3JnYW5pemF0aW9uX25hbWVfZW4iOiIiLCJvcmdhbml6YXRpb25fbmFtZV9ibiI6IiIsInJvbGVfaWQiOm51bGwsInJvbGVfY29kZSI6bnVsbCwicHJvZmlsZV90eXBlIjpudWxsLCJwcm9maWxlX2lkIjpudWxsLCJuYW1lIjoiTXIuQWJkdWxsYWgiLCJ1c2VyX3R5cGUiOiJTRVJWSUNFX1JFQ0lQSUVOVCIsImNvbXBhbnlfbmFtZSI6bnVsbCwibW9iaWxlIjpudWxsLCJlbWFpbCI6InBlcm1pdDFAeW9wbWFpbC5jb20iLCJyZW1lbWJlcl90b2tlbiI6bnVsbCwic3RhdHVzIjoxfSwiaWF0IjoxNzA1OTMxODA0LCJleHAiOjE3MDYwMzk4MDQsImp0aSI6InVRYVQ0bUxQdWMifQ.kU47P3PzBBqW9Rgd3U9DK_cyA2YPFR-Y7X50dYF_uv4',
            accept: 'application/json',
            'x-client-id': '95b4b010fde64b1aace9d46f3c1880d5',
            'sec-ch-ua-platform': '"Windows"',
            origin: 'https://tr-accounts.most.gov.bd',
            'sec-fetch-site': 'same-site',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.options(
        'https://tr-gateway.most.gov.bd/grant/committee/committeeMember/1668',
        null,
        {
          headers: {
            accept: '*/*',
            'access-control-request-method': 'GET',
            'access-control-request-headers':
              'authorization,x-app-identifier,x-client-id,x-client-secret',
            origin: 'https://tr-accounts.most.gov.bd',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-site',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.options(
        'https://tr-gateway.most.gov.bd/auth/institute-head/user/1668',
        null,
        {
          headers: {
            accept: '*/*',
            'access-control-request-method': 'GET',
            'access-control-request-headers':
              'authorization,x-app-identifier,x-client-id,x-client-secret',
            origin: 'https://tr-accounts.most.gov.bd',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-site',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.options(
        'https://tr-gateway.most.gov.bd/library/library-setup/getLibraryInfoByMemberUserId?$memberUserId=1668',
        null,
        {
          headers: {
            accept: '*/*',
            'access-control-request-method': 'GET',
            'access-control-request-headers':
              'authorization,x-app-identifier,x-client-id,x-client-secret',
            origin: 'https://tr-accounts.most.gov.bd',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-site',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.get('https://tr-gateway.most.gov.bd/util/notification/count-badge/1668', {
        headers: {
          'x-client-secret': '9a169F9B0F4f4350Ad1a430ce4F9d215',
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'x-app-identifier': 'UserPanelUI',
          'sec-ch-ua-mobile': '?0',
          authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjE2NjgsInV1aWQiOiJmMmEzZjlkMy0zMGE4LTQyZmItYWIxMi1iODY5MDMzYTJiMjEiLCJvcmdhbml6YXRpb25faWQiOm51bGwsIm9yZ2Fub2dyYW1faWQiOm51bGwsIm9yZ2FuaXphdGlvbl9zaG9ydF9uYW1lIjoiIiwib3JnYW5pemF0aW9uX25hbWVfZW4iOiIiLCJvcmdhbml6YXRpb25fbmFtZV9ibiI6IiIsInJvbGVfaWQiOm51bGwsInJvbGVfY29kZSI6bnVsbCwicHJvZmlsZV90eXBlIjpudWxsLCJwcm9maWxlX2lkIjpudWxsLCJuYW1lIjoiTXIuQWJkdWxsYWgiLCJ1c2VyX3R5cGUiOiJTRVJWSUNFX1JFQ0lQSUVOVCIsImNvbXBhbnlfbmFtZSI6bnVsbCwibW9iaWxlIjpudWxsLCJlbWFpbCI6InBlcm1pdDFAeW9wbWFpbC5jb20iLCJyZW1lbWJlcl90b2tlbiI6bnVsbCwic3RhdHVzIjoxfSwiaWF0IjoxNzA1OTMxODA0LCJleHAiOjE3MDYwMzk4MDQsImp0aSI6InVRYVQ0bUxQdWMifQ.kU47P3PzBBqW9Rgd3U9DK_cyA2YPFR-Y7X50dYF_uv4',
          accept: 'application/json',
          'x-client-id': '95b4b010fde64b1aace9d46f3c1880d5',
          'sec-ch-ua-platform': '"Windows"',
          origin: 'https://tr-accounts.most.gov.bd',
          'sec-fetch-site': 'same-site',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        },
      })

      response = http.options(
        'https://tr-gateway.most.gov.bd/util/notification/count-badge/1668',
        null,
        {
          headers: {
            accept: '*/*',
            'access-control-request-method': 'GET',
            'access-control-request-headers':
              'authorization,x-app-identifier,x-client-id,x-client-secret',
            origin: 'https://tr-accounts.most.gov.bd',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-site',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.get(
        'https://tr-gateway.most.gov.bd/util/notification?$search=&$filter=receiver_id+eq+1668&$orderby=id+desc&$top=10',
        {
          headers: {
            'x-client-secret': '9a169F9B0F4f4350Ad1a430ce4F9d215',
            'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
            'x-app-identifier': 'UserPanelUI',
            'sec-ch-ua-mobile': '?0',
            authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjE2NjgsInV1aWQiOiJmMmEzZjlkMy0zMGE4LTQyZmItYWIxMi1iODY5MDMzYTJiMjEiLCJvcmdhbml6YXRpb25faWQiOm51bGwsIm9yZ2Fub2dyYW1faWQiOm51bGwsIm9yZ2FuaXphdGlvbl9zaG9ydF9uYW1lIjoiIiwib3JnYW5pemF0aW9uX25hbWVfZW4iOiIiLCJvcmdhbml6YXRpb25fbmFtZV9ibiI6IiIsInJvbGVfaWQiOm51bGwsInJvbGVfY29kZSI6bnVsbCwicHJvZmlsZV90eXBlIjpudWxsLCJwcm9maWxlX2lkIjpudWxsLCJuYW1lIjoiTXIuQWJkdWxsYWgiLCJ1c2VyX3R5cGUiOiJTRVJWSUNFX1JFQ0lQSUVOVCIsImNvbXBhbnlfbmFtZSI6bnVsbCwibW9iaWxlIjpudWxsLCJlbWFpbCI6InBlcm1pdDFAeW9wbWFpbC5jb20iLCJyZW1lbWJlcl90b2tlbiI6bnVsbCwic3RhdHVzIjoxfSwiaWF0IjoxNzA1OTMxODA0LCJleHAiOjE3MDYwMzk4MDQsImp0aSI6InVRYVQ0bUxQdWMifQ.kU47P3PzBBqW9Rgd3U9DK_cyA2YPFR-Y7X50dYF_uv4',
            accept: 'application/json',
            'x-client-id': '95b4b010fde64b1aace9d46f3c1880d5',
            'sec-ch-ua-platform': '"Windows"',
            origin: 'https://tr-accounts.most.gov.bd',
            'sec-fetch-site': 'same-site',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.options(
        'https://tr-gateway.most.gov.bd/util/notification?$search=&$filter=receiver_id+eq+1668&$orderby=id+desc&$top=10',
        null,
        {
          headers: {
            accept: '*/*',
            'access-control-request-method': 'GET',
            'access-control-request-headers':
              'authorization,x-app-identifier,x-client-id,x-client-secret',
            origin: 'https://tr-accounts.most.gov.bd',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-site',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.get(
        'https://tr-gateway.most.gov.bd/core/component/dropdown?$select=id,name_en,name_bn,key,status&$orderby=sort_order+asc',
        {
          headers: {
            'x-client-secret': '9a169F9B0F4f4350Ad1a430ce4F9d215',
            'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
            'x-app-identifier': 'UserPanelUI',
            'sec-ch-ua-mobile': '?0',
            authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjE2NjgsInV1aWQiOiJmMmEzZjlkMy0zMGE4LTQyZmItYWIxMi1iODY5MDMzYTJiMjEiLCJvcmdhbml6YXRpb25faWQiOm51bGwsIm9yZ2Fub2dyYW1faWQiOm51bGwsIm9yZ2FuaXphdGlvbl9zaG9ydF9uYW1lIjoiIiwib3JnYW5pemF0aW9uX25hbWVfZW4iOiIiLCJvcmdhbml6YXRpb25fbmFtZV9ibiI6IiIsInJvbGVfaWQiOm51bGwsInJvbGVfY29kZSI6bnVsbCwicHJvZmlsZV90eXBlIjpudWxsLCJwcm9maWxlX2lkIjpudWxsLCJuYW1lIjoiTXIuQWJkdWxsYWgiLCJ1c2VyX3R5cGUiOiJTRVJWSUNFX1JFQ0lQSUVOVCIsImNvbXBhbnlfbmFtZSI6bnVsbCwibW9iaWxlIjpudWxsLCJlbWFpbCI6InBlcm1pdDFAeW9wbWFpbC5jb20iLCJyZW1lbWJlcl90b2tlbiI6bnVsbCwic3RhdHVzIjoxfSwiaWF0IjoxNzA1OTMxODA0LCJleHAiOjE3MDYwMzk4MDQsImp0aSI6InVRYVQ0bUxQdWMifQ.kU47P3PzBBqW9Rgd3U9DK_cyA2YPFR-Y7X50dYF_uv4',
            accept: 'application/json',
            'x-client-id': '95b4b010fde64b1aace9d46f3c1880d5',
            'sec-ch-ua-platform': '"Windows"',
            origin: 'https://tr-accounts.most.gov.bd',
            'sec-fetch-site': 'same-site',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.options(
        'https://tr-gateway.most.gov.bd/core/component/dropdown?$select=id,name_en,name_bn,key,status&$orderby=sort_order+asc',
        null,
        {
          headers: {
            accept: '*/*',
            'access-control-request-method': 'GET',
            'access-control-request-headers':
              'authorization,x-app-identifier,x-client-id,x-client-secret',
            origin: 'https://tr-accounts.most.gov.bd',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-site',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.post(
        'https://tr-gateway.most.gov.bd/license/user-panel/summary/availed-services',
        '{}',
        {
          headers: {
            'x-client-secret': '9a169F9B0F4f4350Ad1a430ce4F9d215',
            'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
            'x-app-identifier': 'UserPanelUI',
            'sec-ch-ua-mobile': '?0',
            authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjE2NjgsInV1aWQiOiJmMmEzZjlkMy0zMGE4LTQyZmItYWIxMi1iODY5MDMzYTJiMjEiLCJvcmdhbml6YXRpb25faWQiOm51bGwsIm9yZ2Fub2dyYW1faWQiOm51bGwsIm9yZ2FuaXphdGlvbl9zaG9ydF9uYW1lIjoiIiwib3JnYW5pemF0aW9uX25hbWVfZW4iOiIiLCJvcmdhbml6YXRpb25fbmFtZV9ibiI6IiIsInJvbGVfaWQiOm51bGwsInJvbGVfY29kZSI6bnVsbCwicHJvZmlsZV90eXBlIjpudWxsLCJwcm9maWxlX2lkIjpudWxsLCJuYW1lIjoiTXIuQWJkdWxsYWgiLCJ1c2VyX3R5cGUiOiJTRVJWSUNFX1JFQ0lQSUVOVCIsImNvbXBhbnlfbmFtZSI6bnVsbCwibW9iaWxlIjpudWxsLCJlbWFpbCI6InBlcm1pdDFAeW9wbWFpbC5jb20iLCJyZW1lbWJlcl90b2tlbiI6bnVsbCwic3RhdHVzIjoxfSwiaWF0IjoxNzA1OTMxODA0LCJleHAiOjE3MDYwMzk4MDQsImp0aSI6InVRYVQ0bUxQdWMifQ.kU47P3PzBBqW9Rgd3U9DK_cyA2YPFR-Y7X50dYF_uv4',
            'content-type': 'application/json',
            accept: 'application/json',
            'x-client-id': '95b4b010fde64b1aace9d46f3c1880d5',
            'sec-ch-ua-platform': '"Windows"',
            origin: 'https://tr-accounts.most.gov.bd',
            'sec-fetch-site': 'same-site',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.options(
        'https://tr-gateway.most.gov.bd/license/user-panel/summary/availed-services',
        null,
        {
          headers: {
            accept: '*/*',
            'access-control-request-method': 'POST',
            'access-control-request-headers':
              'authorization,content-type,x-app-identifier,x-client-id,x-client-secret',
            origin: 'https://tr-accounts.most.gov.bd',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-site',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.get(
        'https://tr-gateway.most.gov.bd/license/user-panel/license-permit/expiring-soon/1668',
        {
          headers: {
            'x-client-secret': '9a169F9B0F4f4350Ad1a430ce4F9d215',
            'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
            'x-app-identifier': 'UserPanelUI',
            'sec-ch-ua-mobile': '?0',
            authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjE2NjgsInV1aWQiOiJmMmEzZjlkMy0zMGE4LTQyZmItYWIxMi1iODY5MDMzYTJiMjEiLCJvcmdhbml6YXRpb25faWQiOm51bGwsIm9yZ2Fub2dyYW1faWQiOm51bGwsIm9yZ2FuaXphdGlvbl9zaG9ydF9uYW1lIjoiIiwib3JnYW5pemF0aW9uX25hbWVfZW4iOiIiLCJvcmdhbml6YXRpb25fbmFtZV9ibiI6IiIsInJvbGVfaWQiOm51bGwsInJvbGVfY29kZSI6bnVsbCwicHJvZmlsZV90eXBlIjpudWxsLCJwcm9maWxlX2lkIjpudWxsLCJuYW1lIjoiTXIuQWJkdWxsYWgiLCJ1c2VyX3R5cGUiOiJTRVJWSUNFX1JFQ0lQSUVOVCIsImNvbXBhbnlfbmFtZSI6bnVsbCwibW9iaWxlIjpudWxsLCJlbWFpbCI6InBlcm1pdDFAeW9wbWFpbC5jb20iLCJyZW1lbWJlcl90b2tlbiI6bnVsbCwic3RhdHVzIjoxfSwiaWF0IjoxNzA1OTMxODA0LCJleHAiOjE3MDYwMzk4MDQsImp0aSI6InVRYVQ0bUxQdWMifQ.kU47P3PzBBqW9Rgd3U9DK_cyA2YPFR-Y7X50dYF_uv4',
            accept: 'application/json',
            'x-client-id': '95b4b010fde64b1aace9d46f3c1880d5',
            'sec-ch-ua-platform': '"Windows"',
            origin: 'https://tr-accounts.most.gov.bd',
            'sec-fetch-site': 'same-site',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.options(
        'https://tr-gateway.most.gov.bd/license/user-panel/license-permit/expiring-soon/1668',
        null,
        {
          headers: {
            accept: '*/*',
            'access-control-request-method': 'GET',
            'access-control-request-headers':
              'authorization,x-app-identifier,x-client-id,x-client-secret',
            origin: 'https://tr-accounts.most.gov.bd',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-site',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.post(
        'https://tr-gateway.most.gov.bd/license/user-panel/summary/application-tracking',
        '{}',
        {
          headers: {
            'x-client-secret': '9a169F9B0F4f4350Ad1a430ce4F9d215',
            'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
            'x-app-identifier': 'UserPanelUI',
            'sec-ch-ua-mobile': '?0',
            authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjE2NjgsInV1aWQiOiJmMmEzZjlkMy0zMGE4LTQyZmItYWIxMi1iODY5MDMzYTJiMjEiLCJvcmdhbml6YXRpb25faWQiOm51bGwsIm9yZ2Fub2dyYW1faWQiOm51bGwsIm9yZ2FuaXphdGlvbl9zaG9ydF9uYW1lIjoiIiwib3JnYW5pemF0aW9uX25hbWVfZW4iOiIiLCJvcmdhbml6YXRpb25fbmFtZV9ibiI6IiIsInJvbGVfaWQiOm51bGwsInJvbGVfY29kZSI6bnVsbCwicHJvZmlsZV90eXBlIjpudWxsLCJwcm9maWxlX2lkIjpudWxsLCJuYW1lIjoiTXIuQWJkdWxsYWgiLCJ1c2VyX3R5cGUiOiJTRVJWSUNFX1JFQ0lQSUVOVCIsImNvbXBhbnlfbmFtZSI6bnVsbCwibW9iaWxlIjpudWxsLCJlbWFpbCI6InBlcm1pdDFAeW9wbWFpbC5jb20iLCJyZW1lbWJlcl90b2tlbiI6bnVsbCwic3RhdHVzIjoxfSwiaWF0IjoxNzA1OTMxODA0LCJleHAiOjE3MDYwMzk4MDQsImp0aSI6InVRYVQ0bUxQdWMifQ.kU47P3PzBBqW9Rgd3U9DK_cyA2YPFR-Y7X50dYF_uv4',
            'content-type': 'application/json',
            accept: 'application/json',
            'x-client-id': '95b4b010fde64b1aace9d46f3c1880d5',
            'sec-ch-ua-platform': '"Windows"',
            origin: 'https://tr-accounts.most.gov.bd',
            'sec-fetch-site': 'same-site',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.options(
        'https://tr-gateway.most.gov.bd/license/user-panel/summary/application-tracking',
        null,
        {
          headers: {
            accept: '*/*',
            'access-control-request-method': 'POST',
            'access-control-request-headers':
              'authorization,content-type,x-app-identifier,x-client-id,x-client-secret',
            origin: 'https://tr-accounts.most.gov.bd',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-site',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.get(
        'https://tr-gateway.most.gov.bd/core/service-mapping/dropdown?$select=id,name_en,name_bn,status,organization_id,component_id,service_assignment_id,service_id,description_en,description_bn,icon,image,key,slug&$orderby=name_en+asc',
        {
          headers: {
            'x-client-secret': '9a169F9B0F4f4350Ad1a430ce4F9d215',
            'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
            'x-app-identifier': 'UserPanelUI',
            'sec-ch-ua-mobile': '?0',
            authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjE2NjgsInV1aWQiOiJmMmEzZjlkMy0zMGE4LTQyZmItYWIxMi1iODY5MDMzYTJiMjEiLCJvcmdhbml6YXRpb25faWQiOm51bGwsIm9yZ2Fub2dyYW1faWQiOm51bGwsIm9yZ2FuaXphdGlvbl9zaG9ydF9uYW1lIjoiIiwib3JnYW5pemF0aW9uX25hbWVfZW4iOiIiLCJvcmdhbml6YXRpb25fbmFtZV9ibiI6IiIsInJvbGVfaWQiOm51bGwsInJvbGVfY29kZSI6bnVsbCwicHJvZmlsZV90eXBlIjpudWxsLCJwcm9maWxlX2lkIjpudWxsLCJuYW1lIjoiTXIuQWJkdWxsYWgiLCJ1c2VyX3R5cGUiOiJTRVJWSUNFX1JFQ0lQSUVOVCIsImNvbXBhbnlfbmFtZSI6bnVsbCwibW9iaWxlIjpudWxsLCJlbWFpbCI6InBlcm1pdDFAeW9wbWFpbC5jb20iLCJyZW1lbWJlcl90b2tlbiI6bnVsbCwic3RhdHVzIjoxfSwiaWF0IjoxNzA1OTMxODA0LCJleHAiOjE3MDYwMzk4MDQsImp0aSI6InVRYVQ0bUxQdWMifQ.kU47P3PzBBqW9Rgd3U9DK_cyA2YPFR-Y7X50dYF_uv4',
            accept: 'application/json',
            'x-client-id': '95b4b010fde64b1aace9d46f3c1880d5',
            'sec-ch-ua-platform': '"Windows"',
            origin: 'https://tr-accounts.most.gov.bd',
            'sec-fetch-site': 'same-site',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.options(
        'https://tr-gateway.most.gov.bd/core/service-mapping/dropdown?$select=id,name_en,name_bn,status,organization_id,component_id,service_assignment_id,service_id,description_en,description_bn,icon,image,key,slug&$orderby=name_en+asc',
        null,
        {
          headers: {
            accept: '*/*',
            'access-control-request-method': 'GET',
            'access-control-request-headers':
              'authorization,x-app-identifier,x-client-id,x-client-secret',
            origin: 'https://tr-accounts.most.gov.bd',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-site',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.get(
        'https://tr-gateway.most.gov.bd/license/user-panel/application?$select=&$search=&$filter=&$queryParams=%7B%7D&$expand=&$orderby=id+desc&$top=10&$skip=0',
        {
          headers: {
            'x-client-secret': '9a169F9B0F4f4350Ad1a430ce4F9d215',
            'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
            'x-app-identifier': 'UserPanelUI',
            'sec-ch-ua-mobile': '?0',
            authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjE2NjgsInV1aWQiOiJmMmEzZjlkMy0zMGE4LTQyZmItYWIxMi1iODY5MDMzYTJiMjEiLCJvcmdhbml6YXRpb25faWQiOm51bGwsIm9yZ2Fub2dyYW1faWQiOm51bGwsIm9yZ2FuaXphdGlvbl9zaG9ydF9uYW1lIjoiIiwib3JnYW5pemF0aW9uX25hbWVfZW4iOiIiLCJvcmdhbml6YXRpb25fbmFtZV9ibiI6IiIsInJvbGVfaWQiOm51bGwsInJvbGVfY29kZSI6bnVsbCwicHJvZmlsZV90eXBlIjpudWxsLCJwcm9maWxlX2lkIjpudWxsLCJuYW1lIjoiTXIuQWJkdWxsYWgiLCJ1c2VyX3R5cGUiOiJTRVJWSUNFX1JFQ0lQSUVOVCIsImNvbXBhbnlfbmFtZSI6bnVsbCwibW9iaWxlIjpudWxsLCJlbWFpbCI6InBlcm1pdDFAeW9wbWFpbC5jb20iLCJyZW1lbWJlcl90b2tlbiI6bnVsbCwic3RhdHVzIjoxfSwiaWF0IjoxNzA1OTMxODA0LCJleHAiOjE3MDYwMzk4MDQsImp0aSI6InVRYVQ0bUxQdWMifQ.kU47P3PzBBqW9Rgd3U9DK_cyA2YPFR-Y7X50dYF_uv4',
            accept: 'application/json',
            'x-client-id': '95b4b010fde64b1aace9d46f3c1880d5',
            'sec-ch-ua-platform': '"Windows"',
            origin: 'https://tr-accounts.most.gov.bd',
            'sec-fetch-site': 'same-site',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.options(
        'https://tr-gateway.most.gov.bd/license/user-panel/application?$select=&$search=&$filter=&$queryParams=%7B%7D&$expand=&$orderby=id+desc&$top=10&$skip=0',
        null,
        {
          headers: {
            accept: '*/*',
            'access-control-request-method': 'GET',
            'access-control-request-headers':
              'authorization,x-app-identifier,x-client-id,x-client-secret',
            origin: 'https://tr-accounts.most.gov.bd',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-site',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )
      sleep(10.1)

      response = http.get('https://tr-gateway.most.gov.bd/license/rco-application/42', {
        headers: {
          'x-client-secret': '9a169F9B0F4f4350Ad1a430ce4F9d215',
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'x-app-identifier': 'UserPanelUI',
          'sec-ch-ua-mobile': '?0',
          authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjE2NjgsInV1aWQiOiJmMmEzZjlkMy0zMGE4LTQyZmItYWIxMi1iODY5MDMzYTJiMjEiLCJvcmdhbml6YXRpb25faWQiOm51bGwsIm9yZ2Fub2dyYW1faWQiOm51bGwsIm9yZ2FuaXphdGlvbl9zaG9ydF9uYW1lIjoiIiwib3JnYW5pemF0aW9uX25hbWVfZW4iOiIiLCJvcmdhbml6YXRpb25fbmFtZV9ibiI6IiIsInJvbGVfaWQiOm51bGwsInJvbGVfY29kZSI6bnVsbCwicHJvZmlsZV90eXBlIjpudWxsLCJwcm9maWxlX2lkIjpudWxsLCJuYW1lIjoiTXIuQWJkdWxsYWgiLCJ1c2VyX3R5cGUiOiJTRVJWSUNFX1JFQ0lQSUVOVCIsImNvbXBhbnlfbmFtZSI6bnVsbCwibW9iaWxlIjpudWxsLCJlbWFpbCI6InBlcm1pdDFAeW9wbWFpbC5jb20iLCJyZW1lbWJlcl90b2tlbiI6bnVsbCwic3RhdHVzIjoxfSwiaWF0IjoxNzA1OTMxODA0LCJleHAiOjE3MDYwMzk4MDQsImp0aSI6InVRYVQ0bUxQdWMifQ.kU47P3PzBBqW9Rgd3U9DK_cyA2YPFR-Y7X50dYF_uv4',
          accept: 'application/json',
          'x-client-id': '95b4b010fde64b1aace9d46f3c1880d5',
          'sec-ch-ua-platform': '"Windows"',
          origin: 'https://tr-accounts.most.gov.bd',
          'sec-fetch-site': 'same-site',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        },
      })

      response = http.options('https://tr-gateway.most.gov.bd/license/rco-application/42', null, {
        headers: {
          accept: '*/*',
          'access-control-request-method': 'GET',
          'access-control-request-headers':
            'authorization,x-app-identifier,x-client-id,x-client-secret',
          origin: 'https://tr-accounts.most.gov.bd',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-site',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        },
      })
      sleep(0.5)

      response = http.get('https://tr-gateway.most.gov.bd/license/rco-application/42', {
        headers: {
          'x-client-secret': '9a169F9B0F4f4350Ad1a430ce4F9d215',
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'x-app-identifier': 'UserPanelUI',
          'sec-ch-ua-mobile': '?0',
          authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjE2NjgsInV1aWQiOiJmMmEzZjlkMy0zMGE4LTQyZmItYWIxMi1iODY5MDMzYTJiMjEiLCJvcmdhbml6YXRpb25faWQiOm51bGwsIm9yZ2Fub2dyYW1faWQiOm51bGwsIm9yZ2FuaXphdGlvbl9zaG9ydF9uYW1lIjoiIiwib3JnYW5pemF0aW9uX25hbWVfZW4iOiIiLCJvcmdhbml6YXRpb25fbmFtZV9ibiI6IiIsInJvbGVfaWQiOm51bGwsInJvbGVfY29kZSI6bnVsbCwicHJvZmlsZV90eXBlIjpudWxsLCJwcm9maWxlX2lkIjpudWxsLCJuYW1lIjoiTXIuQWJkdWxsYWgiLCJ1c2VyX3R5cGUiOiJTRVJWSUNFX1JFQ0lQSUVOVCIsImNvbXBhbnlfbmFtZSI6bnVsbCwibW9iaWxlIjpudWxsLCJlbWFpbCI6InBlcm1pdDFAeW9wbWFpbC5jb20iLCJyZW1lbWJlcl90b2tlbiI6bnVsbCwic3RhdHVzIjoxfSwiaWF0IjoxNzA1OTMxODA0LCJleHAiOjE3MDYwMzk4MDQsImp0aSI6InVRYVQ0bUxQdWMifQ.kU47P3PzBBqW9Rgd3U9DK_cyA2YPFR-Y7X50dYF_uv4',
          accept: 'application/json',
          'x-client-id': '95b4b010fde64b1aace9d46f3c1880d5',
          'sec-ch-ua-platform': '"Windows"',
          origin: 'https://tr-accounts.most.gov.bd',
          'sec-fetch-site': 'same-site',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        },
      })

      response = http.options('https://tr-gateway.most.gov.bd/license/rco-application/42', null, {
        headers: {
          accept: '*/*',
          'access-control-request-method': 'GET',
          'access-control-request-headers':
            'authorization,x-app-identifier,x-client-id,x-client-secret',
          origin: 'https://tr-accounts.most.gov.bd',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-site',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        },
      })
      sleep(23.6)

      response = http.get(
        'https://tr-accounts.most.gov.bd/my-account/en/license/application-list',
        {
          headers: {
            'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'upgrade-insecure-requests': '1',
            accept:
              'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
            'sec-fetch-site': 'same-origin',
            'sec-fetch-mode': 'navigate',
            'sec-fetch-user': '?1',
            'sec-fetch-dest': 'document',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.get(
        'https://tr-socket.most.gov.bd/socket.io/?EIO=4&transport=polling&t=OqnU3ra',
        {
          headers: {
            'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
            accept: '*/*',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            origin: 'https://tr-accounts.most.gov.bd',
            'sec-fetch-site': 'same-site',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.get('https://tr-gateway.most.gov.bd/core/option/load', {
        headers: {
          'x-client-secret': '9a169F9B0F4f4350Ad1a430ce4F9d215',
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'x-app-identifier': 'UserPanelUI',
          'sec-ch-ua-mobile': '?0',
          authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjE2NjgsInV1aWQiOiJmMmEzZjlkMy0zMGE4LTQyZmItYWIxMi1iODY5MDMzYTJiMjEiLCJvcmdhbml6YXRpb25faWQiOm51bGwsIm9yZ2Fub2dyYW1faWQiOm51bGwsIm9yZ2FuaXphdGlvbl9zaG9ydF9uYW1lIjoiIiwib3JnYW5pemF0aW9uX25hbWVfZW4iOiIiLCJvcmdhbml6YXRpb25fbmFtZV9ibiI6IiIsInJvbGVfaWQiOm51bGwsInJvbGVfY29kZSI6bnVsbCwicHJvZmlsZV90eXBlIjpudWxsLCJwcm9maWxlX2lkIjpudWxsLCJuYW1lIjoiTXIuQWJkdWxsYWgiLCJ1c2VyX3R5cGUiOiJTRVJWSUNFX1JFQ0lQSUVOVCIsImNvbXBhbnlfbmFtZSI6bnVsbCwibW9iaWxlIjpudWxsLCJlbWFpbCI6InBlcm1pdDFAeW9wbWFpbC5jb20iLCJyZW1lbWJlcl90b2tlbiI6bnVsbCwic3RhdHVzIjoxfSwiaWF0IjoxNzA1OTMxODA0LCJleHAiOjE3MDYwMzk4MDQsImp0aSI6InVRYVQ0bUxQdWMifQ.kU47P3PzBBqW9Rgd3U9DK_cyA2YPFR-Y7X50dYF_uv4',
          accept: 'application/json',
          'x-client-id': '95b4b010fde64b1aace9d46f3c1880d5',
          'sec-ch-ua-platform': '"Windows"',
          origin: 'https://tr-accounts.most.gov.bd',
          'sec-fetch-site': 'same-site',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        },
      })

      response = http.options('https://tr-gateway.most.gov.bd/core/option/load', null, {
        headers: {
          accept: '*/*',
          'access-control-request-method': 'GET',
          'access-control-request-headers':
            'authorization,x-app-identifier,x-client-id,x-client-secret',
          origin: 'https://tr-accounts.most.gov.bd',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-site',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        },
      })

      response = http.get('https://tr-services.most.gov.bd/post_message_to_frame_owner.html', {
        headers: {
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          'upgrade-insecure-requests': '1',
          accept:
            'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
          'sec-fetch-site': 'same-site',
          'sec-fetch-mode': 'navigate',
          'sec-fetch-dest': 'iframe',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        },
      })

      response = http.get(
        'https://tr-gateway.most.gov.bd/core/location/dropdown?$select=id,name_en,name_bn,parent_location_id,location_type_id,country_id,division_id,district_id,status&$filter=location_type_id+IN(%27COUNTRY%27,+%27DIVISION%27,+%27DISTRICT%27,+%27THANA%27)&$orderby=name_en+asc',
        {
          headers: {
            'x-client-secret': '9a169F9B0F4f4350Ad1a430ce4F9d215',
            'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
            'x-app-identifier': 'UserPanelUI',
            'sec-ch-ua-mobile': '?0',
            authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjE2NjgsInV1aWQiOiJmMmEzZjlkMy0zMGE4LTQyZmItYWIxMi1iODY5MDMzYTJiMjEiLCJvcmdhbml6YXRpb25faWQiOm51bGwsIm9yZ2Fub2dyYW1faWQiOm51bGwsIm9yZ2FuaXphdGlvbl9zaG9ydF9uYW1lIjoiIiwib3JnYW5pemF0aW9uX25hbWVfZW4iOiIiLCJvcmdhbml6YXRpb25fbmFtZV9ibiI6IiIsInJvbGVfaWQiOm51bGwsInJvbGVfY29kZSI6bnVsbCwicHJvZmlsZV90eXBlIjpudWxsLCJwcm9maWxlX2lkIjpudWxsLCJuYW1lIjoiTXIuQWJkdWxsYWgiLCJ1c2VyX3R5cGUiOiJTRVJWSUNFX1JFQ0lQSUVOVCIsImNvbXBhbnlfbmFtZSI6bnVsbCwibW9iaWxlIjpudWxsLCJlbWFpbCI6InBlcm1pdDFAeW9wbWFpbC5jb20iLCJyZW1lbWJlcl90b2tlbiI6bnVsbCwic3RhdHVzIjoxfSwiaWF0IjoxNzA1OTMxODA0LCJleHAiOjE3MDYwMzk4MDQsImp0aSI6InVRYVQ0bUxQdWMifQ.kU47P3PzBBqW9Rgd3U9DK_cyA2YPFR-Y7X50dYF_uv4',
            accept: 'application/json',
            'x-client-id': '95b4b010fde64b1aace9d46f3c1880d5',
            'sec-ch-ua-platform': '"Windows"',
            origin: 'https://tr-accounts.most.gov.bd',
            'sec-fetch-site': 'same-site',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.options(
        'https://tr-gateway.most.gov.bd/core/location/dropdown?$select=id,name_en,name_bn,parent_location_id,location_type_id,country_id,division_id,district_id,status&$filter=location_type_id+IN(%27COUNTRY%27,+%27DIVISION%27,+%27DISTRICT%27,+%27THANA%27)&$orderby=name_en+asc',
        null,
        {
          headers: {
            accept: '*/*',
            'access-control-request-method': 'GET',
            'access-control-request-headers':
              'authorization,x-app-identifier,x-client-id,x-client-secret',
            origin: 'https://tr-accounts.most.gov.bd',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-site',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.post('https://tr-gateway.most.gov.bd/auth/oauth/load-auth-state', '{}', {
        headers: {
          'x-client-secret': '9a169F9B0F4f4350Ad1a430ce4F9d215',
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'x-app-identifier': 'UserPanelUI',
          'sec-ch-ua-mobile': '?0',
          authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjE2NjgsInV1aWQiOiJmMmEzZjlkMy0zMGE4LTQyZmItYWIxMi1iODY5MDMzYTJiMjEiLCJvcmdhbml6YXRpb25faWQiOm51bGwsIm9yZ2Fub2dyYW1faWQiOm51bGwsIm9yZ2FuaXphdGlvbl9zaG9ydF9uYW1lIjoiIiwib3JnYW5pemF0aW9uX25hbWVfZW4iOiIiLCJvcmdhbml6YXRpb25fbmFtZV9ibiI6IiIsInJvbGVfaWQiOm51bGwsInJvbGVfY29kZSI6bnVsbCwicHJvZmlsZV90eXBlIjpudWxsLCJwcm9maWxlX2lkIjpudWxsLCJuYW1lIjoiTXIuQWJkdWxsYWgiLCJ1c2VyX3R5cGUiOiJTRVJWSUNFX1JFQ0lQSUVOVCIsImNvbXBhbnlfbmFtZSI6bnVsbCwibW9iaWxlIjpudWxsLCJlbWFpbCI6InBlcm1pdDFAeW9wbWFpbC5jb20iLCJyZW1lbWJlcl90b2tlbiI6bnVsbCwic3RhdHVzIjoxfSwiaWF0IjoxNzA1OTMxODA0LCJleHAiOjE3MDYwMzk4MDQsImp0aSI6InVRYVQ0bUxQdWMifQ.kU47P3PzBBqW9Rgd3U9DK_cyA2YPFR-Y7X50dYF_uv4',
          'content-type': 'application/json',
          accept: 'application/json',
          'x-client-id': '95b4b010fde64b1aace9d46f3c1880d5',
          'sec-ch-ua-platform': '"Windows"',
          origin: 'https://tr-accounts.most.gov.bd',
          'sec-fetch-site': 'same-site',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        },
      })

      response = http.options('https://tr-gateway.most.gov.bd/auth/oauth/load-auth-state', null, {
        headers: {
          accept: '*/*',
          'access-control-request-method': 'POST',
          'access-control-request-headers':
            'authorization,content-type,x-app-identifier,x-client-id,x-client-secret',
          origin: 'https://tr-accounts.most.gov.bd',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-site',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        },
      })

      response = http.post(
        'https://tr-socket.most.gov.bd/socket.io/?EIO=4&transport=polling&t=OqnU3xR&sid=OuekHG1DwsouBGDqALXh',
        '40',
        {
          headers: {
            'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
            accept: '*/*',
            'content-type': 'text/plain; charset=UTF-8',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            origin: 'https://tr-accounts.most.gov.bd',
            'sec-fetch-site': 'same-site',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.get(
        'https://tr-socket.most.gov.bd/socket.io/?EIO=4&transport=polling&t=OqnU3xT&sid=OuekHG1DwsouBGDqALXh',
        {
          headers: {
            'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
            accept: '*/*',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            origin: 'https://tr-accounts.most.gov.bd',
            'sec-fetch-site': 'same-site',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.post(
        'https://tr-gateway.most.gov.bd/auth/oauth/load-user-scopes',
        '{"user_id":1668}',
        {
          headers: {
            'x-client-secret': '9a169F9B0F4f4350Ad1a430ce4F9d215',
            'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
            'x-app-identifier': 'UserPanelUI',
            'sec-ch-ua-mobile': '?0',
            authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjE2NjgsInV1aWQiOiJmMmEzZjlkMy0zMGE4LTQyZmItYWIxMi1iODY5MDMzYTJiMjEiLCJvcmdhbml6YXRpb25faWQiOm51bGwsIm9yZ2Fub2dyYW1faWQiOm51bGwsIm9yZ2FuaXphdGlvbl9zaG9ydF9uYW1lIjoiIiwib3JnYW5pemF0aW9uX25hbWVfZW4iOiIiLCJvcmdhbml6YXRpb25fbmFtZV9ibiI6IiIsInJvbGVfaWQiOm51bGwsInJvbGVfY29kZSI6bnVsbCwicHJvZmlsZV90eXBlIjpudWxsLCJwcm9maWxlX2lkIjpudWxsLCJuYW1lIjoiTXIuQWJkdWxsYWgiLCJ1c2VyX3R5cGUiOiJTRVJWSUNFX1JFQ0lQSUVOVCIsImNvbXBhbnlfbmFtZSI6bnVsbCwibW9iaWxlIjpudWxsLCJlbWFpbCI6InBlcm1pdDFAeW9wbWFpbC5jb20iLCJyZW1lbWJlcl90b2tlbiI6bnVsbCwic3RhdHVzIjoxfSwiaWF0IjoxNzA1OTMxODA0LCJleHAiOjE3MDYwMzk4MDQsImp0aSI6InVRYVQ0bUxQdWMifQ.kU47P3PzBBqW9Rgd3U9DK_cyA2YPFR-Y7X50dYF_uv4',
            'content-type': 'application/json',
            accept: 'application/json',
            'x-client-id': '95b4b010fde64b1aace9d46f3c1880d5',
            'sec-ch-ua-platform': '"Windows"',
            origin: 'https://tr-accounts.most.gov.bd',
            'sec-fetch-site': 'same-site',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.options('https://tr-gateway.most.gov.bd/auth/oauth/load-user-scopes', null, {
        headers: {
          accept: '*/*',
          'access-control-request-method': 'POST',
          'access-control-request-headers':
            'authorization,content-type,x-app-identifier,x-client-id,x-client-secret',
          origin: 'https://tr-accounts.most.gov.bd',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-site',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        },
      })

      response = http.get('https://tr-gateway.most.gov.bd/grant/committee/committeeMember/1668', {
        headers: {
          'x-client-secret': '9a169F9B0F4f4350Ad1a430ce4F9d215',
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'x-app-identifier': 'UserPanelUI',
          'sec-ch-ua-mobile': '?0',
          authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjE2NjgsInV1aWQiOiJmMmEzZjlkMy0zMGE4LTQyZmItYWIxMi1iODY5MDMzYTJiMjEiLCJvcmdhbml6YXRpb25faWQiOm51bGwsIm9yZ2Fub2dyYW1faWQiOm51bGwsIm9yZ2FuaXphdGlvbl9zaG9ydF9uYW1lIjoiIiwib3JnYW5pemF0aW9uX25hbWVfZW4iOiIiLCJvcmdhbml6YXRpb25fbmFtZV9ibiI6IiIsInJvbGVfaWQiOm51bGwsInJvbGVfY29kZSI6bnVsbCwicHJvZmlsZV90eXBlIjpudWxsLCJwcm9maWxlX2lkIjpudWxsLCJuYW1lIjoiTXIuQWJkdWxsYWgiLCJ1c2VyX3R5cGUiOiJTRVJWSUNFX1JFQ0lQSUVOVCIsImNvbXBhbnlfbmFtZSI6bnVsbCwibW9iaWxlIjpudWxsLCJlbWFpbCI6InBlcm1pdDFAeW9wbWFpbC5jb20iLCJyZW1lbWJlcl90b2tlbiI6bnVsbCwic3RhdHVzIjoxfSwiaWF0IjoxNzA1OTMxODA0LCJleHAiOjE3MDYwMzk4MDQsImp0aSI6InVRYVQ0bUxQdWMifQ.kU47P3PzBBqW9Rgd3U9DK_cyA2YPFR-Y7X50dYF_uv4',
          accept: 'application/json',
          'x-client-id': '95b4b010fde64b1aace9d46f3c1880d5',
          'sec-ch-ua-platform': '"Windows"',
          origin: 'https://tr-accounts.most.gov.bd',
          'sec-fetch-site': 'same-site',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        },
      })

      response = http.get('https://tr-gateway.most.gov.bd/auth/institute-head/user/1668', {
        headers: {
          'x-client-secret': '9a169F9B0F4f4350Ad1a430ce4F9d215',
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'x-app-identifier': 'UserPanelUI',
          'sec-ch-ua-mobile': '?0',
          authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjE2NjgsInV1aWQiOiJmMmEzZjlkMy0zMGE4LTQyZmItYWIxMi1iODY5MDMzYTJiMjEiLCJvcmdhbml6YXRpb25faWQiOm51bGwsIm9yZ2Fub2dyYW1faWQiOm51bGwsIm9yZ2FuaXphdGlvbl9zaG9ydF9uYW1lIjoiIiwib3JnYW5pemF0aW9uX25hbWVfZW4iOiIiLCJvcmdhbml6YXRpb25fbmFtZV9ibiI6IiIsInJvbGVfaWQiOm51bGwsInJvbGVfY29kZSI6bnVsbCwicHJvZmlsZV90eXBlIjpudWxsLCJwcm9maWxlX2lkIjpudWxsLCJuYW1lIjoiTXIuQWJkdWxsYWgiLCJ1c2VyX3R5cGUiOiJTRVJWSUNFX1JFQ0lQSUVOVCIsImNvbXBhbnlfbmFtZSI6bnVsbCwibW9iaWxlIjpudWxsLCJlbWFpbCI6InBlcm1pdDFAeW9wbWFpbC5jb20iLCJyZW1lbWJlcl90b2tlbiI6bnVsbCwic3RhdHVzIjoxfSwiaWF0IjoxNzA1OTMxODA0LCJleHAiOjE3MDYwMzk4MDQsImp0aSI6InVRYVQ0bUxQdWMifQ.kU47P3PzBBqW9Rgd3U9DK_cyA2YPFR-Y7X50dYF_uv4',
          accept: 'application/json',
          'x-client-id': '95b4b010fde64b1aace9d46f3c1880d5',
          'sec-ch-ua-platform': '"Windows"',
          origin: 'https://tr-accounts.most.gov.bd',
          'sec-fetch-site': 'same-site',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        },
      })

      response = http.options(
        'https://tr-gateway.most.gov.bd/grant/committee/committeeMember/1668',
        null,
        {
          headers: {
            accept: '*/*',
            'access-control-request-method': 'GET',
            'access-control-request-headers':
              'authorization,x-app-identifier,x-client-id,x-client-secret',
            origin: 'https://tr-accounts.most.gov.bd',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-site',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.get(
        'https://tr-gateway.most.gov.bd/library/library-setup/getLibraryInfoByMemberUserId?$memberUserId=1668',
        {
          headers: {
            'x-client-secret': '9a169F9B0F4f4350Ad1a430ce4F9d215',
            'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
            'x-app-identifier': 'UserPanelUI',
            'sec-ch-ua-mobile': '?0',
            authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjE2NjgsInV1aWQiOiJmMmEzZjlkMy0zMGE4LTQyZmItYWIxMi1iODY5MDMzYTJiMjEiLCJvcmdhbml6YXRpb25faWQiOm51bGwsIm9yZ2Fub2dyYW1faWQiOm51bGwsIm9yZ2FuaXphdGlvbl9zaG9ydF9uYW1lIjoiIiwib3JnYW5pemF0aW9uX25hbWVfZW4iOiIiLCJvcmdhbml6YXRpb25fbmFtZV9ibiI6IiIsInJvbGVfaWQiOm51bGwsInJvbGVfY29kZSI6bnVsbCwicHJvZmlsZV90eXBlIjpudWxsLCJwcm9maWxlX2lkIjpudWxsLCJuYW1lIjoiTXIuQWJkdWxsYWgiLCJ1c2VyX3R5cGUiOiJTRVJWSUNFX1JFQ0lQSUVOVCIsImNvbXBhbnlfbmFtZSI6bnVsbCwibW9iaWxlIjpudWxsLCJlbWFpbCI6InBlcm1pdDFAeW9wbWFpbC5jb20iLCJyZW1lbWJlcl90b2tlbiI6bnVsbCwic3RhdHVzIjoxfSwiaWF0IjoxNzA1OTMxODA0LCJleHAiOjE3MDYwMzk4MDQsImp0aSI6InVRYVQ0bUxQdWMifQ.kU47P3PzBBqW9Rgd3U9DK_cyA2YPFR-Y7X50dYF_uv4',
            accept: 'application/json',
            'x-client-id': '95b4b010fde64b1aace9d46f3c1880d5',
            'sec-ch-ua-platform': '"Windows"',
            origin: 'https://tr-accounts.most.gov.bd',
            'sec-fetch-site': 'same-site',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.options(
        'https://tr-gateway.most.gov.bd/auth/institute-head/user/1668',
        null,
        {
          headers: {
            accept: '*/*',
            'access-control-request-method': 'GET',
            'access-control-request-headers':
              'authorization,x-app-identifier,x-client-id,x-client-secret',
            origin: 'https://tr-accounts.most.gov.bd',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-site',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.options(
        'https://tr-gateway.most.gov.bd/library/library-setup/getLibraryInfoByMemberUserId?$memberUserId=1668',
        null,
        {
          headers: {
            accept: '*/*',
            'access-control-request-method': 'GET',
            'access-control-request-headers':
              'authorization,x-app-identifier,x-client-id,x-client-secret',
            origin: 'https://tr-accounts.most.gov.bd',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-site',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.get(
        'https://tr-socket.most.gov.bd/socket.io/?EIO=4&transport=polling&t=OqnU3yN&sid=OuekHG1DwsouBGDqALXh',
        {
          headers: {
            'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
            accept: '*/*',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            origin: 'https://tr-accounts.most.gov.bd',
            'sec-fetch-site': 'same-site',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.get('https://tr-gateway.most.gov.bd/util/notification/count-badge/1668', {
        headers: {
          'x-client-secret': '9a169F9B0F4f4350Ad1a430ce4F9d215',
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'x-app-identifier': 'UserPanelUI',
          'sec-ch-ua-mobile': '?0',
          authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjE2NjgsInV1aWQiOiJmMmEzZjlkMy0zMGE4LTQyZmItYWIxMi1iODY5MDMzYTJiMjEiLCJvcmdhbml6YXRpb25faWQiOm51bGwsIm9yZ2Fub2dyYW1faWQiOm51bGwsIm9yZ2FuaXphdGlvbl9zaG9ydF9uYW1lIjoiIiwib3JnYW5pemF0aW9uX25hbWVfZW4iOiIiLCJvcmdhbml6YXRpb25fbmFtZV9ibiI6IiIsInJvbGVfaWQiOm51bGwsInJvbGVfY29kZSI6bnVsbCwicHJvZmlsZV90eXBlIjpudWxsLCJwcm9maWxlX2lkIjpudWxsLCJuYW1lIjoiTXIuQWJkdWxsYWgiLCJ1c2VyX3R5cGUiOiJTRVJWSUNFX1JFQ0lQSUVOVCIsImNvbXBhbnlfbmFtZSI6bnVsbCwibW9iaWxlIjpudWxsLCJlbWFpbCI6InBlcm1pdDFAeW9wbWFpbC5jb20iLCJyZW1lbWJlcl90b2tlbiI6bnVsbCwic3RhdHVzIjoxfSwiaWF0IjoxNzA1OTMxODA0LCJleHAiOjE3MDYwMzk4MDQsImp0aSI6InVRYVQ0bUxQdWMifQ.kU47P3PzBBqW9Rgd3U9DK_cyA2YPFR-Y7X50dYF_uv4',
          accept: 'application/json',
          'x-client-id': '95b4b010fde64b1aace9d46f3c1880d5',
          'sec-ch-ua-platform': '"Windows"',
          origin: 'https://tr-accounts.most.gov.bd',
          'sec-fetch-site': 'same-site',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        },
      })

      response = http.options(
        'https://tr-gateway.most.gov.bd/util/notification/count-badge/1668',
        null,
        {
          headers: {
            accept: '*/*',
            'access-control-request-method': 'GET',
            'access-control-request-headers':
              'authorization,x-app-identifier,x-client-id,x-client-secret',
            origin: 'https://tr-accounts.most.gov.bd',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-site',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.get(
        'https://tr-gateway.most.gov.bd/util/notification?$search=&$filter=receiver_id+eq+1668&$orderby=id+desc&$top=10',
        {
          headers: {
            'x-client-secret': '9a169F9B0F4f4350Ad1a430ce4F9d215',
            'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
            'x-app-identifier': 'UserPanelUI',
            'sec-ch-ua-mobile': '?0',
            authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjE2NjgsInV1aWQiOiJmMmEzZjlkMy0zMGE4LTQyZmItYWIxMi1iODY5MDMzYTJiMjEiLCJvcmdhbml6YXRpb25faWQiOm51bGwsIm9yZ2Fub2dyYW1faWQiOm51bGwsIm9yZ2FuaXphdGlvbl9zaG9ydF9uYW1lIjoiIiwib3JnYW5pemF0aW9uX25hbWVfZW4iOiIiLCJvcmdhbml6YXRpb25fbmFtZV9ibiI6IiIsInJvbGVfaWQiOm51bGwsInJvbGVfY29kZSI6bnVsbCwicHJvZmlsZV90eXBlIjpudWxsLCJwcm9maWxlX2lkIjpudWxsLCJuYW1lIjoiTXIuQWJkdWxsYWgiLCJ1c2VyX3R5cGUiOiJTRVJWSUNFX1JFQ0lQSUVOVCIsImNvbXBhbnlfbmFtZSI6bnVsbCwibW9iaWxlIjpudWxsLCJlbWFpbCI6InBlcm1pdDFAeW9wbWFpbC5jb20iLCJyZW1lbWJlcl90b2tlbiI6bnVsbCwic3RhdHVzIjoxfSwiaWF0IjoxNzA1OTMxODA0LCJleHAiOjE3MDYwMzk4MDQsImp0aSI6InVRYVQ0bUxQdWMifQ.kU47P3PzBBqW9Rgd3U9DK_cyA2YPFR-Y7X50dYF_uv4',
            accept: 'application/json',
            'x-client-id': '95b4b010fde64b1aace9d46f3c1880d5',
            'sec-ch-ua-platform': '"Windows"',
            origin: 'https://tr-accounts.most.gov.bd',
            'sec-fetch-site': 'same-site',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.options(
        'https://tr-gateway.most.gov.bd/util/notification?$search=&$filter=receiver_id+eq+1668&$orderby=id+desc&$top=10',
        null,
        {
          headers: {
            accept: '*/*',
            'access-control-request-method': 'GET',
            'access-control-request-headers':
              'authorization,x-app-identifier,x-client-id,x-client-secret',
            origin: 'https://tr-accounts.most.gov.bd',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-site',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.get(
        'https://tr-gateway.most.gov.bd/core/component/dropdown?$select=id,name_en,name_bn,key,status&$orderby=sort_order+asc',
        {
          headers: {
            'x-client-secret': '9a169F9B0F4f4350Ad1a430ce4F9d215',
            'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
            'x-app-identifier': 'UserPanelUI',
            'sec-ch-ua-mobile': '?0',
            authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjE2NjgsInV1aWQiOiJmMmEzZjlkMy0zMGE4LTQyZmItYWIxMi1iODY5MDMzYTJiMjEiLCJvcmdhbml6YXRpb25faWQiOm51bGwsIm9yZ2Fub2dyYW1faWQiOm51bGwsIm9yZ2FuaXphdGlvbl9zaG9ydF9uYW1lIjoiIiwib3JnYW5pemF0aW9uX25hbWVfZW4iOiIiLCJvcmdhbml6YXRpb25fbmFtZV9ibiI6IiIsInJvbGVfaWQiOm51bGwsInJvbGVfY29kZSI6bnVsbCwicHJvZmlsZV90eXBlIjpudWxsLCJwcm9maWxlX2lkIjpudWxsLCJuYW1lIjoiTXIuQWJkdWxsYWgiLCJ1c2VyX3R5cGUiOiJTRVJWSUNFX1JFQ0lQSUVOVCIsImNvbXBhbnlfbmFtZSI6bnVsbCwibW9iaWxlIjpudWxsLCJlbWFpbCI6InBlcm1pdDFAeW9wbWFpbC5jb20iLCJyZW1lbWJlcl90b2tlbiI6bnVsbCwic3RhdHVzIjoxfSwiaWF0IjoxNzA1OTMxODA0LCJleHAiOjE3MDYwMzk4MDQsImp0aSI6InVRYVQ0bUxQdWMifQ.kU47P3PzBBqW9Rgd3U9DK_cyA2YPFR-Y7X50dYF_uv4',
            accept: 'application/json',
            'x-client-id': '95b4b010fde64b1aace9d46f3c1880d5',
            'sec-ch-ua-platform': '"Windows"',
            origin: 'https://tr-accounts.most.gov.bd',
            'sec-fetch-site': 'same-site',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.options(
        'https://tr-gateway.most.gov.bd/core/component/dropdown?$select=id,name_en,name_bn,key,status&$orderby=sort_order+asc',
        null,
        {
          headers: {
            accept: '*/*',
            'access-control-request-method': 'GET',
            'access-control-request-headers':
              'authorization,x-app-identifier,x-client-id,x-client-secret',
            origin: 'https://tr-accounts.most.gov.bd',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-site',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.post(
        'https://tr-gateway.most.gov.bd/license/user-panel/summary/availed-services',
        '{}',
        {
          headers: {
            'x-client-secret': '9a169F9B0F4f4350Ad1a430ce4F9d215',
            'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
            'x-app-identifier': 'UserPanelUI',
            'sec-ch-ua-mobile': '?0',
            authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjE2NjgsInV1aWQiOiJmMmEzZjlkMy0zMGE4LTQyZmItYWIxMi1iODY5MDMzYTJiMjEiLCJvcmdhbml6YXRpb25faWQiOm51bGwsIm9yZ2Fub2dyYW1faWQiOm51bGwsIm9yZ2FuaXphdGlvbl9zaG9ydF9uYW1lIjoiIiwib3JnYW5pemF0aW9uX25hbWVfZW4iOiIiLCJvcmdhbml6YXRpb25fbmFtZV9ibiI6IiIsInJvbGVfaWQiOm51bGwsInJvbGVfY29kZSI6bnVsbCwicHJvZmlsZV90eXBlIjpudWxsLCJwcm9maWxlX2lkIjpudWxsLCJuYW1lIjoiTXIuQWJkdWxsYWgiLCJ1c2VyX3R5cGUiOiJTRVJWSUNFX1JFQ0lQSUVOVCIsImNvbXBhbnlfbmFtZSI6bnVsbCwibW9iaWxlIjpudWxsLCJlbWFpbCI6InBlcm1pdDFAeW9wbWFpbC5jb20iLCJyZW1lbWJlcl90b2tlbiI6bnVsbCwic3RhdHVzIjoxfSwiaWF0IjoxNzA1OTMxODA0LCJleHAiOjE3MDYwMzk4MDQsImp0aSI6InVRYVQ0bUxQdWMifQ.kU47P3PzBBqW9Rgd3U9DK_cyA2YPFR-Y7X50dYF_uv4',
            'content-type': 'application/json',
            accept: 'application/json',
            'x-client-id': '95b4b010fde64b1aace9d46f3c1880d5',
            'sec-ch-ua-platform': '"Windows"',
            origin: 'https://tr-accounts.most.gov.bd',
            'sec-fetch-site': 'same-site',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.options(
        'https://tr-gateway.most.gov.bd/license/user-panel/summary/availed-services',
        null,
        {
          headers: {
            accept: '*/*',
            'access-control-request-method': 'POST',
            'access-control-request-headers':
              'authorization,content-type,x-app-identifier,x-client-id,x-client-secret',
            origin: 'https://tr-accounts.most.gov.bd',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-site',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.get(
        'https://tr-gateway.most.gov.bd/license/user-panel/license-permit/expiring-soon/1668',
        {
          headers: {
            'x-client-secret': '9a169F9B0F4f4350Ad1a430ce4F9d215',
            'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
            'x-app-identifier': 'UserPanelUI',
            'sec-ch-ua-mobile': '?0',
            authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjE2NjgsInV1aWQiOiJmMmEzZjlkMy0zMGE4LTQyZmItYWIxMi1iODY5MDMzYTJiMjEiLCJvcmdhbml6YXRpb25faWQiOm51bGwsIm9yZ2Fub2dyYW1faWQiOm51bGwsIm9yZ2FuaXphdGlvbl9zaG9ydF9uYW1lIjoiIiwib3JnYW5pemF0aW9uX25hbWVfZW4iOiIiLCJvcmdhbml6YXRpb25fbmFtZV9ibiI6IiIsInJvbGVfaWQiOm51bGwsInJvbGVfY29kZSI6bnVsbCwicHJvZmlsZV90eXBlIjpudWxsLCJwcm9maWxlX2lkIjpudWxsLCJuYW1lIjoiTXIuQWJkdWxsYWgiLCJ1c2VyX3R5cGUiOiJTRVJWSUNFX1JFQ0lQSUVOVCIsImNvbXBhbnlfbmFtZSI6bnVsbCwibW9iaWxlIjpudWxsLCJlbWFpbCI6InBlcm1pdDFAeW9wbWFpbC5jb20iLCJyZW1lbWJlcl90b2tlbiI6bnVsbCwic3RhdHVzIjoxfSwiaWF0IjoxNzA1OTMxODA0LCJleHAiOjE3MDYwMzk4MDQsImp0aSI6InVRYVQ0bUxQdWMifQ.kU47P3PzBBqW9Rgd3U9DK_cyA2YPFR-Y7X50dYF_uv4',
            accept: 'application/json',
            'x-client-id': '95b4b010fde64b1aace9d46f3c1880d5',
            'sec-ch-ua-platform': '"Windows"',
            origin: 'https://tr-accounts.most.gov.bd',
            'sec-fetch-site': 'same-site',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.options(
        'https://tr-gateway.most.gov.bd/license/user-panel/license-permit/expiring-soon/1668',
        null,
        {
          headers: {
            accept: '*/*',
            'access-control-request-method': 'GET',
            'access-control-request-headers':
              'authorization,x-app-identifier,x-client-id,x-client-secret',
            origin: 'https://tr-accounts.most.gov.bd',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-site',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.post(
        'https://tr-gateway.most.gov.bd/license/user-panel/summary/application-tracking',
        '{}',
        {
          headers: {
            'x-client-secret': '9a169F9B0F4f4350Ad1a430ce4F9d215',
            'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
            'x-app-identifier': 'UserPanelUI',
            'sec-ch-ua-mobile': '?0',
            authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjE2NjgsInV1aWQiOiJmMmEzZjlkMy0zMGE4LTQyZmItYWIxMi1iODY5MDMzYTJiMjEiLCJvcmdhbml6YXRpb25faWQiOm51bGwsIm9yZ2Fub2dyYW1faWQiOm51bGwsIm9yZ2FuaXphdGlvbl9zaG9ydF9uYW1lIjoiIiwib3JnYW5pemF0aW9uX25hbWVfZW4iOiIiLCJvcmdhbml6YXRpb25fbmFtZV9ibiI6IiIsInJvbGVfaWQiOm51bGwsInJvbGVfY29kZSI6bnVsbCwicHJvZmlsZV90eXBlIjpudWxsLCJwcm9maWxlX2lkIjpudWxsLCJuYW1lIjoiTXIuQWJkdWxsYWgiLCJ1c2VyX3R5cGUiOiJTRVJWSUNFX1JFQ0lQSUVOVCIsImNvbXBhbnlfbmFtZSI6bnVsbCwibW9iaWxlIjpudWxsLCJlbWFpbCI6InBlcm1pdDFAeW9wbWFpbC5jb20iLCJyZW1lbWJlcl90b2tlbiI6bnVsbCwic3RhdHVzIjoxfSwiaWF0IjoxNzA1OTMxODA0LCJleHAiOjE3MDYwMzk4MDQsImp0aSI6InVRYVQ0bUxQdWMifQ.kU47P3PzBBqW9Rgd3U9DK_cyA2YPFR-Y7X50dYF_uv4',
            'content-type': 'application/json',
            accept: 'application/json',
            'x-client-id': '95b4b010fde64b1aace9d46f3c1880d5',
            'sec-ch-ua-platform': '"Windows"',
            origin: 'https://tr-accounts.most.gov.bd',
            'sec-fetch-site': 'same-site',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.options(
        'https://tr-gateway.most.gov.bd/license/user-panel/summary/application-tracking',
        null,
        {
          headers: {
            accept: '*/*',
            'access-control-request-method': 'POST',
            'access-control-request-headers':
              'authorization,content-type,x-app-identifier,x-client-id,x-client-secret',
            origin: 'https://tr-accounts.most.gov.bd',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-site',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.get(
        'https://tr-gateway.most.gov.bd/core/service-mapping/dropdown?$select=id,name_en,name_bn,status,organization_id,component_id,service_assignment_id,service_id,description_en,description_bn,icon,image,key,slug&$orderby=name_en+asc',
        {
          headers: {
            'x-client-secret': '9a169F9B0F4f4350Ad1a430ce4F9d215',
            'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
            'x-app-identifier': 'UserPanelUI',
            'sec-ch-ua-mobile': '?0',
            authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjE2NjgsInV1aWQiOiJmMmEzZjlkMy0zMGE4LTQyZmItYWIxMi1iODY5MDMzYTJiMjEiLCJvcmdhbml6YXRpb25faWQiOm51bGwsIm9yZ2Fub2dyYW1faWQiOm51bGwsIm9yZ2FuaXphdGlvbl9zaG9ydF9uYW1lIjoiIiwib3JnYW5pemF0aW9uX25hbWVfZW4iOiIiLCJvcmdhbml6YXRpb25fbmFtZV9ibiI6IiIsInJvbGVfaWQiOm51bGwsInJvbGVfY29kZSI6bnVsbCwicHJvZmlsZV90eXBlIjpudWxsLCJwcm9maWxlX2lkIjpudWxsLCJuYW1lIjoiTXIuQWJkdWxsYWgiLCJ1c2VyX3R5cGUiOiJTRVJWSUNFX1JFQ0lQSUVOVCIsImNvbXBhbnlfbmFtZSI6bnVsbCwibW9iaWxlIjpudWxsLCJlbWFpbCI6InBlcm1pdDFAeW9wbWFpbC5jb20iLCJyZW1lbWJlcl90b2tlbiI6bnVsbCwic3RhdHVzIjoxfSwiaWF0IjoxNzA1OTMxODA0LCJleHAiOjE3MDYwMzk4MDQsImp0aSI6InVRYVQ0bUxQdWMifQ.kU47P3PzBBqW9Rgd3U9DK_cyA2YPFR-Y7X50dYF_uv4',
            accept: 'application/json',
            'x-client-id': '95b4b010fde64b1aace9d46f3c1880d5',
            'sec-ch-ua-platform': '"Windows"',
            origin: 'https://tr-accounts.most.gov.bd',
            'sec-fetch-site': 'same-site',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.options(
        'https://tr-gateway.most.gov.bd/core/service-mapping/dropdown?$select=id,name_en,name_bn,status,organization_id,component_id,service_assignment_id,service_id,description_en,description_bn,icon,image,key,slug&$orderby=name_en+asc',
        null,
        {
          headers: {
            accept: '*/*',
            'access-control-request-method': 'GET',
            'access-control-request-headers':
              'authorization,x-app-identifier,x-client-id,x-client-secret',
            origin: 'https://tr-accounts.most.gov.bd',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-site',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.get(
        'https://tr-gateway.most.gov.bd/license/user-panel/application?$select=&$search=&$filter=&$queryParams=%7B%7D&$expand=&$orderby=id+desc&$top=10&$skip=0',
        {
          headers: {
            'x-client-secret': '9a169F9B0F4f4350Ad1a430ce4F9d215',
            'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
            'x-app-identifier': 'UserPanelUI',
            'sec-ch-ua-mobile': '?0',
            authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjE2NjgsInV1aWQiOiJmMmEzZjlkMy0zMGE4LTQyZmItYWIxMi1iODY5MDMzYTJiMjEiLCJvcmdhbml6YXRpb25faWQiOm51bGwsIm9yZ2Fub2dyYW1faWQiOm51bGwsIm9yZ2FuaXphdGlvbl9zaG9ydF9uYW1lIjoiIiwib3JnYW5pemF0aW9uX25hbWVfZW4iOiIiLCJvcmdhbml6YXRpb25fbmFtZV9ibiI6IiIsInJvbGVfaWQiOm51bGwsInJvbGVfY29kZSI6bnVsbCwicHJvZmlsZV90eXBlIjpudWxsLCJwcm9maWxlX2lkIjpudWxsLCJuYW1lIjoiTXIuQWJkdWxsYWgiLCJ1c2VyX3R5cGUiOiJTRVJWSUNFX1JFQ0lQSUVOVCIsImNvbXBhbnlfbmFtZSI6bnVsbCwibW9iaWxlIjpudWxsLCJlbWFpbCI6InBlcm1pdDFAeW9wbWFpbC5jb20iLCJyZW1lbWJlcl90b2tlbiI6bnVsbCwic3RhdHVzIjoxfSwiaWF0IjoxNzA1OTMxODA0LCJleHAiOjE3MDYwMzk4MDQsImp0aSI6InVRYVQ0bUxQdWMifQ.kU47P3PzBBqW9Rgd3U9DK_cyA2YPFR-Y7X50dYF_uv4',
            accept: 'application/json',
            'x-client-id': '95b4b010fde64b1aace9d46f3c1880d5',
            'sec-ch-ua-platform': '"Windows"',
            origin: 'https://tr-accounts.most.gov.bd',
            'sec-fetch-site': 'same-site',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.options(
        'https://tr-gateway.most.gov.bd/license/user-panel/application?$select=&$search=&$filter=&$queryParams=%7B%7D&$expand=&$orderby=id+desc&$top=10&$skip=0',
        null,
        {
          headers: {
            accept: '*/*',
            'access-control-request-method': 'GET',
            'access-control-request-headers':
              'authorization,x-app-identifier,x-client-id,x-client-secret',
            origin: 'https://tr-accounts.most.gov.bd',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-site',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.post(
        'https://tr-gateway.most.gov.bd/auth/oauth/load-user-scopes',
        '{"user_id":1668}',
        {
          headers: {
            'x-client-secret': '9a169F9B0F4f4350Ad1a430ce4F9d215',
            'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
            'x-app-identifier': 'UserPanelUI',
            'sec-ch-ua-mobile': '?0',
            authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjE2NjgsInV1aWQiOiJmMmEzZjlkMy0zMGE4LTQyZmItYWIxMi1iODY5MDMzYTJiMjEiLCJvcmdhbml6YXRpb25faWQiOm51bGwsIm9yZ2Fub2dyYW1faWQiOm51bGwsIm9yZ2FuaXphdGlvbl9zaG9ydF9uYW1lIjoiIiwib3JnYW5pemF0aW9uX25hbWVfZW4iOiIiLCJvcmdhbml6YXRpb25fbmFtZV9ibiI6IiIsInJvbGVfaWQiOm51bGwsInJvbGVfY29kZSI6bnVsbCwicHJvZmlsZV90eXBlIjpudWxsLCJwcm9maWxlX2lkIjpudWxsLCJuYW1lIjoiTXIuQWJkdWxsYWgiLCJ1c2VyX3R5cGUiOiJTRVJWSUNFX1JFQ0lQSUVOVCIsImNvbXBhbnlfbmFtZSI6bnVsbCwibW9iaWxlIjpudWxsLCJlbWFpbCI6InBlcm1pdDFAeW9wbWFpbC5jb20iLCJyZW1lbWJlcl90b2tlbiI6bnVsbCwic3RhdHVzIjoxfSwiaWF0IjoxNzA1OTMxODA0LCJleHAiOjE3MDYwMzk4MDQsImp0aSI6InVRYVQ0bUxQdWMifQ.kU47P3PzBBqW9Rgd3U9DK_cyA2YPFR-Y7X50dYF_uv4',
            'content-type': 'application/json',
            accept: 'application/json',
            'x-client-id': '95b4b010fde64b1aace9d46f3c1880d5',
            'sec-ch-ua-platform': '"Windows"',
            origin: 'https://tr-accounts.most.gov.bd',
            'sec-fetch-site': 'same-site',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.get('https://tr-gateway.most.gov.bd/grant/committee/committeeMember/1668', {
        headers: {
          'x-client-secret': '9a169F9B0F4f4350Ad1a430ce4F9d215',
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'x-app-identifier': 'UserPanelUI',
          'sec-ch-ua-mobile': '?0',
          authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjE2NjgsInV1aWQiOiJmMmEzZjlkMy0zMGE4LTQyZmItYWIxMi1iODY5MDMzYTJiMjEiLCJvcmdhbml6YXRpb25faWQiOm51bGwsIm9yZ2Fub2dyYW1faWQiOm51bGwsIm9yZ2FuaXphdGlvbl9zaG9ydF9uYW1lIjoiIiwib3JnYW5pemF0aW9uX25hbWVfZW4iOiIiLCJvcmdhbml6YXRpb25fbmFtZV9ibiI6IiIsInJvbGVfaWQiOm51bGwsInJvbGVfY29kZSI6bnVsbCwicHJvZmlsZV90eXBlIjpudWxsLCJwcm9maWxlX2lkIjpudWxsLCJuYW1lIjoiTXIuQWJkdWxsYWgiLCJ1c2VyX3R5cGUiOiJTRVJWSUNFX1JFQ0lQSUVOVCIsImNvbXBhbnlfbmFtZSI6bnVsbCwibW9iaWxlIjpudWxsLCJlbWFpbCI6InBlcm1pdDFAeW9wbWFpbC5jb20iLCJyZW1lbWJlcl90b2tlbiI6bnVsbCwic3RhdHVzIjoxfSwiaWF0IjoxNzA1OTMxODA0LCJleHAiOjE3MDYwMzk4MDQsImp0aSI6InVRYVQ0bUxQdWMifQ.kU47P3PzBBqW9Rgd3U9DK_cyA2YPFR-Y7X50dYF_uv4',
          accept: 'application/json',
          'x-client-id': '95b4b010fde64b1aace9d46f3c1880d5',
          'sec-ch-ua-platform': '"Windows"',
          origin: 'https://tr-accounts.most.gov.bd',
          'sec-fetch-site': 'same-site',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        },
      })

      response = http.options('https://tr-gateway.most.gov.bd/auth/oauth/load-user-scopes', null, {
        headers: {
          accept: '*/*',
          'access-control-request-method': 'POST',
          'access-control-request-headers':
            'authorization,content-type,x-app-identifier,x-client-id,x-client-secret',
          origin: 'https://tr-accounts.most.gov.bd',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-site',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        },
      })

      response = http.get('https://tr-gateway.most.gov.bd/auth/institute-head/user/1668', {
        headers: {
          'x-client-secret': '9a169F9B0F4f4350Ad1a430ce4F9d215',
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'x-app-identifier': 'UserPanelUI',
          'sec-ch-ua-mobile': '?0',
          authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjE2NjgsInV1aWQiOiJmMmEzZjlkMy0zMGE4LTQyZmItYWIxMi1iODY5MDMzYTJiMjEiLCJvcmdhbml6YXRpb25faWQiOm51bGwsIm9yZ2Fub2dyYW1faWQiOm51bGwsIm9yZ2FuaXphdGlvbl9zaG9ydF9uYW1lIjoiIiwib3JnYW5pemF0aW9uX25hbWVfZW4iOiIiLCJvcmdhbml6YXRpb25fbmFtZV9ibiI6IiIsInJvbGVfaWQiOm51bGwsInJvbGVfY29kZSI6bnVsbCwicHJvZmlsZV90eXBlIjpudWxsLCJwcm9maWxlX2lkIjpudWxsLCJuYW1lIjoiTXIuQWJkdWxsYWgiLCJ1c2VyX3R5cGUiOiJTRVJWSUNFX1JFQ0lQSUVOVCIsImNvbXBhbnlfbmFtZSI6bnVsbCwibW9iaWxlIjpudWxsLCJlbWFpbCI6InBlcm1pdDFAeW9wbWFpbC5jb20iLCJyZW1lbWJlcl90b2tlbiI6bnVsbCwic3RhdHVzIjoxfSwiaWF0IjoxNzA1OTMxODA0LCJleHAiOjE3MDYwMzk4MDQsImp0aSI6InVRYVQ0bUxQdWMifQ.kU47P3PzBBqW9Rgd3U9DK_cyA2YPFR-Y7X50dYF_uv4',
          accept: 'application/json',
          'x-client-id': '95b4b010fde64b1aace9d46f3c1880d5',
          'sec-ch-ua-platform': '"Windows"',
          origin: 'https://tr-accounts.most.gov.bd',
          'sec-fetch-site': 'same-site',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        },
      })

      response = http.get(
        'https://tr-gateway.most.gov.bd/library/library-setup/getLibraryInfoByMemberUserId?$memberUserId=1668',
        {
          headers: {
            'x-client-secret': '9a169F9B0F4f4350Ad1a430ce4F9d215',
            'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
            'x-app-identifier': 'UserPanelUI',
            'sec-ch-ua-mobile': '?0',
            authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjE2NjgsInV1aWQiOiJmMmEzZjlkMy0zMGE4LTQyZmItYWIxMi1iODY5MDMzYTJiMjEiLCJvcmdhbml6YXRpb25faWQiOm51bGwsIm9yZ2Fub2dyYW1faWQiOm51bGwsIm9yZ2FuaXphdGlvbl9zaG9ydF9uYW1lIjoiIiwib3JnYW5pemF0aW9uX25hbWVfZW4iOiIiLCJvcmdhbml6YXRpb25fbmFtZV9ibiI6IiIsInJvbGVfaWQiOm51bGwsInJvbGVfY29kZSI6bnVsbCwicHJvZmlsZV90eXBlIjpudWxsLCJwcm9maWxlX2lkIjpudWxsLCJuYW1lIjoiTXIuQWJkdWxsYWgiLCJ1c2VyX3R5cGUiOiJTRVJWSUNFX1JFQ0lQSUVOVCIsImNvbXBhbnlfbmFtZSI6bnVsbCwibW9iaWxlIjpudWxsLCJlbWFpbCI6InBlcm1pdDFAeW9wbWFpbC5jb20iLCJyZW1lbWJlcl90b2tlbiI6bnVsbCwic3RhdHVzIjoxfSwiaWF0IjoxNzA1OTMxODA0LCJleHAiOjE3MDYwMzk4MDQsImp0aSI6InVRYVQ0bUxQdWMifQ.kU47P3PzBBqW9Rgd3U9DK_cyA2YPFR-Y7X50dYF_uv4',
            accept: 'application/json',
            'x-client-id': '95b4b010fde64b1aace9d46f3c1880d5',
            'sec-ch-ua-platform': '"Windows"',
            origin: 'https://tr-accounts.most.gov.bd',
            'sec-fetch-site': 'same-site',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.options(
        'https://tr-gateway.most.gov.bd/grant/committee/committeeMember/1668',
        null,
        {
          headers: {
            accept: '*/*',
            'access-control-request-method': 'GET',
            'access-control-request-headers':
              'authorization,x-app-identifier,x-client-id,x-client-secret',
            origin: 'https://tr-accounts.most.gov.bd',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-site',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.options(
        'https://tr-gateway.most.gov.bd/auth/institute-head/user/1668',
        null,
        {
          headers: {
            accept: '*/*',
            'access-control-request-method': 'GET',
            'access-control-request-headers':
              'authorization,x-app-identifier,x-client-id,x-client-secret',
            origin: 'https://tr-accounts.most.gov.bd',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-site',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.options(
        'https://tr-gateway.most.gov.bd/library/library-setup/getLibraryInfoByMemberUserId?$memberUserId=1668',
        null,
        {
          headers: {
            accept: '*/*',
            'access-control-request-method': 'GET',
            'access-control-request-headers':
              'authorization,x-app-identifier,x-client-id,x-client-secret',
            origin: 'https://tr-accounts.most.gov.bd',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-site',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )
      sleep(2.8)
    }
  )

  group('page_4 - https://tr-services.most.gov.bd/', function () {
    response = http.get('https://tr-services.most.gov.bd/', {
      headers: {
        'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'upgrade-insecure-requests': '1',
        accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
        'sec-fetch-site': 'same-site',
        'sec-fetch-mode': 'navigate',
        'sec-fetch-user': '?1',
        'sec-fetch-dest': 'document',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
      },
    })
    sleep(1.1)

    response = http.get(
      'https://tr-socket.most.gov.bd/socket.io/?EIO=4&transport=polling&t=OqnU52A',
      {
        headers: {
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          accept: '*/*',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          origin: 'https://tr-services.most.gov.bd',
          'sec-fetch-site': 'same-site',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        },
      }
    )

    response = http.get('https://tr-gateway.most.gov.bd/core/option/load', {
      headers: {
        'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
        accept: 'application/json',
        'sec-ch-ua-mobile': '?0',
        authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjE2NjgsInV1aWQiOiJmMmEzZjlkMy0zMGE4LTQyZmItYWIxMi1iODY5MDMzYTJiMjEiLCJvcmdhbml6YXRpb25faWQiOm51bGwsIm9yZ2Fub2dyYW1faWQiOm51bGwsIm9yZ2FuaXphdGlvbl9zaG9ydF9uYW1lIjoiIiwib3JnYW5pemF0aW9uX25hbWVfZW4iOiIiLCJvcmdhbml6YXRpb25fbmFtZV9ibiI6IiIsInJvbGVfaWQiOm51bGwsInJvbGVfY29kZSI6bnVsbCwicHJvZmlsZV90eXBlIjpudWxsLCJwcm9maWxlX2lkIjpudWxsLCJuYW1lIjoiTXIuQWJkdWxsYWgiLCJ1c2VyX3R5cGUiOiJTRVJWSUNFX1JFQ0lQSUVOVCIsImNvbXBhbnlfbmFtZSI6bnVsbCwibW9iaWxlIjpudWxsLCJlbWFpbCI6InBlcm1pdDFAeW9wbWFpbC5jb20iLCJyZW1lbWJlcl90b2tlbiI6bnVsbCwic3RhdHVzIjoxfSwiaWF0IjoxNzA1OTMxODA0LCJleHAiOjE3MDYwMzk4MDQsImp0aSI6InVRYVQ0bUxQdWMifQ.kU47P3PzBBqW9Rgd3U9DK_cyA2YPFR-Y7X50dYF_uv4',
        'sec-ch-ua-platform': '"Windows"',
        origin: 'https://tr-services.most.gov.bd',
        'sec-fetch-site': 'same-site',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
      },
    })

    response = http.options('https://tr-gateway.most.gov.bd/core/option/load', null, {
      headers: {
        accept: '*/*',
        'access-control-request-method': 'GET',
        'access-control-request-headers': 'authorization',
        origin: 'https://tr-services.most.gov.bd',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-site',
        'sec-fetch-dest': 'empty',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
      },
    })

    response = http.post('https://tr-gateway.most.gov.bd/auth/oauth/load-auth-state', '{}', {
      headers: {
        'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
        accept: 'application/json',
        'content-type': 'application/json',
        'sec-ch-ua-mobile': '?0',
        authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjE2NjgsInV1aWQiOiJmMmEzZjlkMy0zMGE4LTQyZmItYWIxMi1iODY5MDMzYTJiMjEiLCJvcmdhbml6YXRpb25faWQiOm51bGwsIm9yZ2Fub2dyYW1faWQiOm51bGwsIm9yZ2FuaXphdGlvbl9zaG9ydF9uYW1lIjoiIiwib3JnYW5pemF0aW9uX25hbWVfZW4iOiIiLCJvcmdhbml6YXRpb25fbmFtZV9ibiI6IiIsInJvbGVfaWQiOm51bGwsInJvbGVfY29kZSI6bnVsbCwicHJvZmlsZV90eXBlIjpudWxsLCJwcm9maWxlX2lkIjpudWxsLCJuYW1lIjoiTXIuQWJkdWxsYWgiLCJ1c2VyX3R5cGUiOiJTRVJWSUNFX1JFQ0lQSUVOVCIsImNvbXBhbnlfbmFtZSI6bnVsbCwibW9iaWxlIjpudWxsLCJlbWFpbCI6InBlcm1pdDFAeW9wbWFpbC5jb20iLCJyZW1lbWJlcl90b2tlbiI6bnVsbCwic3RhdHVzIjoxfSwiaWF0IjoxNzA1OTMxODA0LCJleHAiOjE3MDYwMzk4MDQsImp0aSI6InVRYVQ0bUxQdWMifQ.kU47P3PzBBqW9Rgd3U9DK_cyA2YPFR-Y7X50dYF_uv4',
        'sec-ch-ua-platform': '"Windows"',
        origin: 'https://tr-services.most.gov.bd',
        'sec-fetch-site': 'same-site',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
      },
    })

    response = http.options('https://tr-gateway.most.gov.bd/auth/oauth/load-auth-state', null, {
      headers: {
        accept: '*/*',
        'access-control-request-method': 'POST',
        'access-control-request-headers': 'authorization,content-type',
        origin: 'https://tr-services.most.gov.bd',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-site',
        'sec-fetch-dest': 'empty',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
      },
    })

    response = http.post(
      'https://tr-socket.most.gov.bd/socket.io/?EIO=4&transport=polling&t=OqnU52h&sid=Ha2KlKsM43b_sZXtALXj',
      '40',
      {
        headers: {
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          accept: '*/*',
          'content-type': 'text/plain; charset=UTF-8',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          origin: 'https://tr-services.most.gov.bd',
          'sec-fetch-site': 'same-site',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        },
      }
    )

    response = http.get(
      'https://tr-socket.most.gov.bd/socket.io/?EIO=4&transport=polling&t=OqnU52l&sid=Ha2KlKsM43b_sZXtALXj',
      {
        headers: {
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          accept: '*/*',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          origin: 'https://tr-services.most.gov.bd',
          'sec-fetch-site': 'same-site',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        },
      }
    )

    response = http.post(
      'https://tr-gateway.most.gov.bd/auth/oauth/load-user-scopes',
      '{"user_id":1668}',
      {
        headers: {
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          accept: 'application/json',
          'content-type': 'application/json',
          'sec-ch-ua-mobile': '?0',
          authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjE2NjgsInV1aWQiOiJmMmEzZjlkMy0zMGE4LTQyZmItYWIxMi1iODY5MDMzYTJiMjEiLCJvcmdhbml6YXRpb25faWQiOm51bGwsIm9yZ2Fub2dyYW1faWQiOm51bGwsIm9yZ2FuaXphdGlvbl9zaG9ydF9uYW1lIjoiIiwib3JnYW5pemF0aW9uX25hbWVfZW4iOiIiLCJvcmdhbml6YXRpb25fbmFtZV9ibiI6IiIsInJvbGVfaWQiOm51bGwsInJvbGVfY29kZSI6bnVsbCwicHJvZmlsZV90eXBlIjpudWxsLCJwcm9maWxlX2lkIjpudWxsLCJuYW1lIjoiTXIuQWJkdWxsYWgiLCJ1c2VyX3R5cGUiOiJTRVJWSUNFX1JFQ0lQSUVOVCIsImNvbXBhbnlfbmFtZSI6bnVsbCwibW9iaWxlIjpudWxsLCJlbWFpbCI6InBlcm1pdDFAeW9wbWFpbC5jb20iLCJyZW1lbWJlcl90b2tlbiI6bnVsbCwic3RhdHVzIjoxfSwiaWF0IjoxNzA1OTMxODA0LCJleHAiOjE3MDYwMzk4MDQsImp0aSI6InVRYVQ0bUxQdWMifQ.kU47P3PzBBqW9Rgd3U9DK_cyA2YPFR-Y7X50dYF_uv4',
          'sec-ch-ua-platform': '"Windows"',
          origin: 'https://tr-services.most.gov.bd',
          'sec-fetch-site': 'same-site',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        },
      }
    )

    response = http.options('https://tr-gateway.most.gov.bd/auth/oauth/load-user-scopes', null, {
      headers: {
        accept: '*/*',
        'access-control-request-method': 'POST',
        'access-control-request-headers': 'authorization,content-type',
        origin: 'https://tr-services.most.gov.bd',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-site',
        'sec-fetch-dest': 'empty',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
      },
    })

    response = http.get(
      'https://tr-socket.most.gov.bd/socket.io/?EIO=4&transport=polling&t=OqnU53Z&sid=Ha2KlKsM43b_sZXtALXj',
      {
        headers: {
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          accept: '*/*',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          origin: 'https://tr-services.most.gov.bd',
          'sec-fetch-site': 'same-site',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        },
      }
    )
    sleep(1.3)

    response = http.get(
      'https://tr-gateway.most.gov.bd/core/menu?$select=id,title_en,title_bn,url,slug,sort_order,status&$filter=parent_id%3D%271%27+AND+status%3D1&$orderby=sort_order+asc',
      {
        headers: {
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          accept: 'application/json',
          'sec-ch-ua-mobile': '?0',
          authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjE2NjgsInV1aWQiOiJmMmEzZjlkMy0zMGE4LTQyZmItYWIxMi1iODY5MDMzYTJiMjEiLCJvcmdhbml6YXRpb25faWQiOm51bGwsIm9yZ2Fub2dyYW1faWQiOm51bGwsIm9yZ2FuaXphdGlvbl9zaG9ydF9uYW1lIjoiIiwib3JnYW5pemF0aW9uX25hbWVfZW4iOiIiLCJvcmdhbml6YXRpb25fbmFtZV9ibiI6IiIsInJvbGVfaWQiOm51bGwsInJvbGVfY29kZSI6bnVsbCwicHJvZmlsZV90eXBlIjpudWxsLCJwcm9maWxlX2lkIjpudWxsLCJuYW1lIjoiTXIuQWJkdWxsYWgiLCJ1c2VyX3R5cGUiOiJTRVJWSUNFX1JFQ0lQSUVOVCIsImNvbXBhbnlfbmFtZSI6bnVsbCwibW9iaWxlIjpudWxsLCJlbWFpbCI6InBlcm1pdDFAeW9wbWFpbC5jb20iLCJyZW1lbWJlcl90b2tlbiI6bnVsbCwic3RhdHVzIjoxfSwiaWF0IjoxNzA1OTMxODA0LCJleHAiOjE3MDYwMzk4MDQsImp0aSI6InVRYVQ0bUxQdWMifQ.kU47P3PzBBqW9Rgd3U9DK_cyA2YPFR-Y7X50dYF_uv4',
          'sec-ch-ua-platform': '"Windows"',
          origin: 'https://tr-services.most.gov.bd',
          'sec-fetch-site': 'same-site',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        },
      }
    )

    response = http.options(
      'https://tr-gateway.most.gov.bd/core/menu?$select=id,title_en,title_bn,url,slug,sort_order,status&$filter=parent_id%3D%271%27+AND+status%3D1&$orderby=sort_order+asc',
      null,
      {
        headers: {
          accept: '*/*',
          'access-control-request-method': 'GET',
          'access-control-request-headers': 'authorization',
          origin: 'https://tr-services.most.gov.bd',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-site',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        },
      }
    )

    response = http.get(
      'https://tr-gateway.most.gov.bd/core/service-assignment/all?$select=&$orderby=sort_order+asc',
      {
        headers: {
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          accept: 'application/json',
          'sec-ch-ua-mobile': '?0',
          authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjE2NjgsInV1aWQiOiJmMmEzZjlkMy0zMGE4LTQyZmItYWIxMi1iODY5MDMzYTJiMjEiLCJvcmdhbml6YXRpb25faWQiOm51bGwsIm9yZ2Fub2dyYW1faWQiOm51bGwsIm9yZ2FuaXphdGlvbl9zaG9ydF9uYW1lIjoiIiwib3JnYW5pemF0aW9uX25hbWVfZW4iOiIiLCJvcmdhbml6YXRpb25fbmFtZV9ibiI6IiIsInJvbGVfaWQiOm51bGwsInJvbGVfY29kZSI6bnVsbCwicHJvZmlsZV90eXBlIjpudWxsLCJwcm9maWxlX2lkIjpudWxsLCJuYW1lIjoiTXIuQWJkdWxsYWgiLCJ1c2VyX3R5cGUiOiJTRVJWSUNFX1JFQ0lQSUVOVCIsImNvbXBhbnlfbmFtZSI6bnVsbCwibW9iaWxlIjpudWxsLCJlbWFpbCI6InBlcm1pdDFAeW9wbWFpbC5jb20iLCJyZW1lbWJlcl90b2tlbiI6bnVsbCwic3RhdHVzIjoxfSwiaWF0IjoxNzA1OTMxODA0LCJleHAiOjE3MDYwMzk4MDQsImp0aSI6InVRYVQ0bUxQdWMifQ.kU47P3PzBBqW9Rgd3U9DK_cyA2YPFR-Y7X50dYF_uv4',
          'sec-ch-ua-platform': '"Windows"',
          origin: 'https://tr-services.most.gov.bd',
          'sec-fetch-site': 'same-site',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        },
      }
    )

    response = http.options(
      'https://tr-gateway.most.gov.bd/core/service-assignment/all?$select=&$orderby=sort_order+asc',
      null,
      {
        headers: {
          accept: '*/*',
          'access-control-request-method': 'GET',
          'access-control-request-headers': 'authorization',
          origin: 'https://tr-services.most.gov.bd',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-site',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        },
      }
    )

    response = http.get(
      'https://tr-gateway.most.gov.bd/core/menu?$select=id,title_en,title_bn,url,slug,sort_order,status&$filter=parent_id%3D%276%27+AND+status%3D1&$orderby=sort_order+asc',
      {
        headers: {
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          accept: 'application/json',
          'sec-ch-ua-mobile': '?0',
          authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjE2NjgsInV1aWQiOiJmMmEzZjlkMy0zMGE4LTQyZmItYWIxMi1iODY5MDMzYTJiMjEiLCJvcmdhbml6YXRpb25faWQiOm51bGwsIm9yZ2Fub2dyYW1faWQiOm51bGwsIm9yZ2FuaXphdGlvbl9zaG9ydF9uYW1lIjoiIiwib3JnYW5pemF0aW9uX25hbWVfZW4iOiIiLCJvcmdhbml6YXRpb25fbmFtZV9ibiI6IiIsInJvbGVfaWQiOm51bGwsInJvbGVfY29kZSI6bnVsbCwicHJvZmlsZV90eXBlIjpudWxsLCJwcm9maWxlX2lkIjpudWxsLCJuYW1lIjoiTXIuQWJkdWxsYWgiLCJ1c2VyX3R5cGUiOiJTRVJWSUNFX1JFQ0lQSUVOVCIsImNvbXBhbnlfbmFtZSI6bnVsbCwibW9iaWxlIjpudWxsLCJlbWFpbCI6InBlcm1pdDFAeW9wbWFpbC5jb20iLCJyZW1lbWJlcl90b2tlbiI6bnVsbCwic3RhdHVzIjoxfSwiaWF0IjoxNzA1OTMxODA0LCJleHAiOjE3MDYwMzk4MDQsImp0aSI6InVRYVQ0bUxQdWMifQ.kU47P3PzBBqW9Rgd3U9DK_cyA2YPFR-Y7X50dYF_uv4',
          'sec-ch-ua-platform': '"Windows"',
          origin: 'https://tr-services.most.gov.bd',
          'sec-fetch-site': 'same-site',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        },
      }
    )

    response = http.options(
      'https://tr-gateway.most.gov.bd/core/menu?$select=id,title_en,title_bn,url,slug,sort_order,status&$filter=parent_id%3D%276%27+AND+status%3D1&$orderby=sort_order+asc',
      null,
      {
        headers: {
          accept: '*/*',
          'access-control-request-method': 'GET',
          'access-control-request-headers': 'authorization',
          origin: 'https://tr-services.most.gov.bd',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-site',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        },
      }
    )

    response = http.get(
      'https://tr-gateway.most.gov.bd/core/location/dropdown?$select=id,name_en,name_bn,parent_location_id,location_type_id,country_id,division_id,district_id,status&$filter=location_type_id+IN(%27COUNTRY%27,+%27DIVISION%27,+%27DISTRICT%27,+%27THANA%27)&$orderby=name_en+asc',
      {
        headers: {
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          accept: 'application/json',
          'sec-ch-ua-mobile': '?0',
          authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjE2NjgsInV1aWQiOiJmMmEzZjlkMy0zMGE4LTQyZmItYWIxMi1iODY5MDMzYTJiMjEiLCJvcmdhbml6YXRpb25faWQiOm51bGwsIm9yZ2Fub2dyYW1faWQiOm51bGwsIm9yZ2FuaXphdGlvbl9zaG9ydF9uYW1lIjoiIiwib3JnYW5pemF0aW9uX25hbWVfZW4iOiIiLCJvcmdhbml6YXRpb25fbmFtZV9ibiI6IiIsInJvbGVfaWQiOm51bGwsInJvbGVfY29kZSI6bnVsbCwicHJvZmlsZV90eXBlIjpudWxsLCJwcm9maWxlX2lkIjpudWxsLCJuYW1lIjoiTXIuQWJkdWxsYWgiLCJ1c2VyX3R5cGUiOiJTRVJWSUNFX1JFQ0lQSUVOVCIsImNvbXBhbnlfbmFtZSI6bnVsbCwibW9iaWxlIjpudWxsLCJlbWFpbCI6InBlcm1pdDFAeW9wbWFpbC5jb20iLCJyZW1lbWJlcl90b2tlbiI6bnVsbCwic3RhdHVzIjoxfSwiaWF0IjoxNzA1OTMxODA0LCJleHAiOjE3MDYwMzk4MDQsImp0aSI6InVRYVQ0bUxQdWMifQ.kU47P3PzBBqW9Rgd3U9DK_cyA2YPFR-Y7X50dYF_uv4',
          'sec-ch-ua-platform': '"Windows"',
          origin: 'https://tr-services.most.gov.bd',
          'sec-fetch-site': 'same-site',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        },
      }
    )

    response = http.options(
      'https://tr-gateway.most.gov.bd/core/location/dropdown?$select=id,name_en,name_bn,parent_location_id,location_type_id,country_id,division_id,district_id,status&$filter=location_type_id+IN(%27COUNTRY%27,+%27DIVISION%27,+%27DISTRICT%27,+%27THANA%27)&$orderby=name_en+asc',
      null,
      {
        headers: {
          accept: '*/*',
          'access-control-request-method': 'GET',
          'access-control-request-headers': 'authorization',
          origin: 'https://tr-services.most.gov.bd',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-site',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        },
      }
    )
    sleep(6.2)

    response = http.get(
      'https://tr-gateway.most.gov.bd/core/menu?$select=id,title_en,title_bn,url,slug,sort_order,status&$filter=parent_id%3D%271%27+AND+status%3D1&$orderby=sort_order+asc',
      {
        headers: {
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          accept: 'application/json',
          'sec-ch-ua-mobile': '?0',
          authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjE2NjgsInV1aWQiOiJmMmEzZjlkMy0zMGE4LTQyZmItYWIxMi1iODY5MDMzYTJiMjEiLCJvcmdhbml6YXRpb25faWQiOm51bGwsIm9yZ2Fub2dyYW1faWQiOm51bGwsIm9yZ2FuaXphdGlvbl9zaG9ydF9uYW1lIjoiIiwib3JnYW5pemF0aW9uX25hbWVfZW4iOiIiLCJvcmdhbml6YXRpb25fbmFtZV9ibiI6IiIsInJvbGVfaWQiOm51bGwsInJvbGVfY29kZSI6bnVsbCwicHJvZmlsZV90eXBlIjpudWxsLCJwcm9maWxlX2lkIjpudWxsLCJuYW1lIjoiTXIuQWJkdWxsYWgiLCJ1c2VyX3R5cGUiOiJTRVJWSUNFX1JFQ0lQSUVOVCIsImNvbXBhbnlfbmFtZSI6bnVsbCwibW9iaWxlIjpudWxsLCJlbWFpbCI6InBlcm1pdDFAeW9wbWFpbC5jb20iLCJyZW1lbWJlcl90b2tlbiI6bnVsbCwic3RhdHVzIjoxfSwiaWF0IjoxNzA1OTMxODA0LCJleHAiOjE3MDYwMzk4MDQsImp0aSI6InVRYVQ0bUxQdWMifQ.kU47P3PzBBqW9Rgd3U9DK_cyA2YPFR-Y7X50dYF_uv4',
          'sec-ch-ua-platform': '"Windows"',
          origin: 'https://tr-services.most.gov.bd',
          'sec-fetch-site': 'same-site',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        },
      }
    )

    response = http.options(
      'https://tr-gateway.most.gov.bd/core/menu?$select=id,title_en,title_bn,url,slug,sort_order,status&$filter=parent_id%3D%271%27+AND+status%3D1&$orderby=sort_order+asc',
      null,
      {
        headers: {
          accept: '*/*',
          'access-control-request-method': 'GET',
          'access-control-request-headers': 'authorization',
          origin: 'https://tr-services.most.gov.bd',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-site',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        },
      }
    )

    response = http.get(
      'https://tr-gateway.most.gov.bd/auth/organization/dropdown?$select=id,name_en,name_bn,institute_type,description_en,description_bn,status,component_ids,short_name,logo_image,banner_image&$orderby=sort_order+asc,name_en+asc',
      {
        headers: {
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          accept: 'application/json',
          'sec-ch-ua-mobile': '?0',
          authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjE2NjgsInV1aWQiOiJmMmEzZjlkMy0zMGE4LTQyZmItYWIxMi1iODY5MDMzYTJiMjEiLCJvcmdhbml6YXRpb25faWQiOm51bGwsIm9yZ2Fub2dyYW1faWQiOm51bGwsIm9yZ2FuaXphdGlvbl9zaG9ydF9uYW1lIjoiIiwib3JnYW5pemF0aW9uX25hbWVfZW4iOiIiLCJvcmdhbml6YXRpb25fbmFtZV9ibiI6IiIsInJvbGVfaWQiOm51bGwsInJvbGVfY29kZSI6bnVsbCwicHJvZmlsZV90eXBlIjpudWxsLCJwcm9maWxlX2lkIjpudWxsLCJuYW1lIjoiTXIuQWJkdWxsYWgiLCJ1c2VyX3R5cGUiOiJTRVJWSUNFX1JFQ0lQSUVOVCIsImNvbXBhbnlfbmFtZSI6bnVsbCwibW9iaWxlIjpudWxsLCJlbWFpbCI6InBlcm1pdDFAeW9wbWFpbC5jb20iLCJyZW1lbWJlcl90b2tlbiI6bnVsbCwic3RhdHVzIjoxfSwiaWF0IjoxNzA1OTMxODA0LCJleHAiOjE3MDYwMzk4MDQsImp0aSI6InVRYVQ0bUxQdWMifQ.kU47P3PzBBqW9Rgd3U9DK_cyA2YPFR-Y7X50dYF_uv4',
          'sec-ch-ua-platform': '"Windows"',
          origin: 'https://tr-services.most.gov.bd',
          'sec-fetch-site': 'same-site',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        },
      }
    )

    response = http.options(
      'https://tr-gateway.most.gov.bd/auth/organization/dropdown?$select=id,name_en,name_bn,institute_type,description_en,description_bn,status,component_ids,short_name,logo_image,banner_image&$orderby=sort_order+asc,name_en+asc',
      null,
      {
        headers: {
          accept: '*/*',
          'access-control-request-method': 'GET',
          'access-control-request-headers': 'authorization',
          origin: 'https://tr-services.most.gov.bd',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-site',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        },
      }
    )

    response = http.get(
      'https://tr-gateway.most.gov.bd/core/component/dropdown?$select=id,name_en,name_bn,key,status&$orderby=sort_order+asc',
      {
        headers: {
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          accept: 'application/json',
          'sec-ch-ua-mobile': '?0',
          authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjE2NjgsInV1aWQiOiJmMmEzZjlkMy0zMGE4LTQyZmItYWIxMi1iODY5MDMzYTJiMjEiLCJvcmdhbml6YXRpb25faWQiOm51bGwsIm9yZ2Fub2dyYW1faWQiOm51bGwsIm9yZ2FuaXphdGlvbl9zaG9ydF9uYW1lIjoiIiwib3JnYW5pemF0aW9uX25hbWVfZW4iOiIiLCJvcmdhbml6YXRpb25fbmFtZV9ibiI6IiIsInJvbGVfaWQiOm51bGwsInJvbGVfY29kZSI6bnVsbCwicHJvZmlsZV90eXBlIjpudWxsLCJwcm9maWxlX2lkIjpudWxsLCJuYW1lIjoiTXIuQWJkdWxsYWgiLCJ1c2VyX3R5cGUiOiJTRVJWSUNFX1JFQ0lQSUVOVCIsImNvbXBhbnlfbmFtZSI6bnVsbCwibW9iaWxlIjpudWxsLCJlbWFpbCI6InBlcm1pdDFAeW9wbWFpbC5jb20iLCJyZW1lbWJlcl90b2tlbiI6bnVsbCwic3RhdHVzIjoxfSwiaWF0IjoxNzA1OTMxODA0LCJleHAiOjE3MDYwMzk4MDQsImp0aSI6InVRYVQ0bUxQdWMifQ.kU47P3PzBBqW9Rgd3U9DK_cyA2YPFR-Y7X50dYF_uv4',
          'sec-ch-ua-platform': '"Windows"',
          origin: 'https://tr-services.most.gov.bd',
          'sec-fetch-site': 'same-site',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        },
      }
    )

    response = http.options(
      'https://tr-gateway.most.gov.bd/core/component/dropdown?$select=id,name_en,name_bn,key,status&$orderby=sort_order+asc',
      null,
      {
        headers: {
          accept: '*/*',
          'access-control-request-method': 'GET',
          'access-control-request-headers': 'authorization',
          origin: 'https://tr-services.most.gov.bd',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-site',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        },
      }
    )

    response = http.get(
      'https://tr-gateway.most.gov.bd/core/lookup/dropdown?$select=id,type,key,value_en,value_bn,is_default,organization_ids,sort_order,status&$orderby=sort_order+asc',
      {
        headers: {
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          accept: 'application/json',
          'sec-ch-ua-mobile': '?0',
          authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjE2NjgsInV1aWQiOiJmMmEzZjlkMy0zMGE4LTQyZmItYWIxMi1iODY5MDMzYTJiMjEiLCJvcmdhbml6YXRpb25faWQiOm51bGwsIm9yZ2Fub2dyYW1faWQiOm51bGwsIm9yZ2FuaXphdGlvbl9zaG9ydF9uYW1lIjoiIiwib3JnYW5pemF0aW9uX25hbWVfZW4iOiIiLCJvcmdhbml6YXRpb25fbmFtZV9ibiI6IiIsInJvbGVfaWQiOm51bGwsInJvbGVfY29kZSI6bnVsbCwicHJvZmlsZV90eXBlIjpudWxsLCJwcm9maWxlX2lkIjpudWxsLCJuYW1lIjoiTXIuQWJkdWxsYWgiLCJ1c2VyX3R5cGUiOiJTRVJWSUNFX1JFQ0lQSUVOVCIsImNvbXBhbnlfbmFtZSI6bnVsbCwibW9iaWxlIjpudWxsLCJlbWFpbCI6InBlcm1pdDFAeW9wbWFpbC5jb20iLCJyZW1lbWJlcl90b2tlbiI6bnVsbCwic3RhdHVzIjoxfSwiaWF0IjoxNzA1OTMxODA0LCJleHAiOjE3MDYwMzk4MDQsImp0aSI6InVRYVQ0bUxQdWMifQ.kU47P3PzBBqW9Rgd3U9DK_cyA2YPFR-Y7X50dYF_uv4',
          'sec-ch-ua-platform': '"Windows"',
          origin: 'https://tr-services.most.gov.bd',
          'sec-fetch-site': 'same-site',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        },
      }
    )

    response = http.options(
      'https://tr-gateway.most.gov.bd/core/lookup/dropdown?$select=id,type,key,value_en,value_bn,is_default,organization_ids,sort_order,status&$orderby=sort_order+asc',
      null,
      {
        headers: {
          accept: '*/*',
          'access-control-request-method': 'GET',
          'access-control-request-headers': 'authorization',
          origin: 'https://tr-services.most.gov.bd',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-site',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        },
      }
    )

    response = http.get(
      'https://tr-gateway.most.gov.bd/core/menu?$select=id,title_en,title_bn,url,slug,sort_order,status&$filter=parent_id%3D%276%27+AND+status%3D1&$orderby=sort_order+asc',
      {
        headers: {
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          accept: 'application/json',
          'sec-ch-ua-mobile': '?0',
          authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjE2NjgsInV1aWQiOiJmMmEzZjlkMy0zMGE4LTQyZmItYWIxMi1iODY5MDMzYTJiMjEiLCJvcmdhbml6YXRpb25faWQiOm51bGwsIm9yZ2Fub2dyYW1faWQiOm51bGwsIm9yZ2FuaXphdGlvbl9zaG9ydF9uYW1lIjoiIiwib3JnYW5pemF0aW9uX25hbWVfZW4iOiIiLCJvcmdhbml6YXRpb25fbmFtZV9ibiI6IiIsInJvbGVfaWQiOm51bGwsInJvbGVfY29kZSI6bnVsbCwicHJvZmlsZV90eXBlIjpudWxsLCJwcm9maWxlX2lkIjpudWxsLCJuYW1lIjoiTXIuQWJkdWxsYWgiLCJ1c2VyX3R5cGUiOiJTRVJWSUNFX1JFQ0lQSUVOVCIsImNvbXBhbnlfbmFtZSI6bnVsbCwibW9iaWxlIjpudWxsLCJlbWFpbCI6InBlcm1pdDFAeW9wbWFpbC5jb20iLCJyZW1lbWJlcl90b2tlbiI6bnVsbCwic3RhdHVzIjoxfSwiaWF0IjoxNzA1OTMxODA0LCJleHAiOjE3MDYwMzk4MDQsImp0aSI6InVRYVQ0bUxQdWMifQ.kU47P3PzBBqW9Rgd3U9DK_cyA2YPFR-Y7X50dYF_uv4',
          'sec-ch-ua-platform': '"Windows"',
          origin: 'https://tr-services.most.gov.bd',
          'sec-fetch-site': 'same-site',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        },
      }
    )

    response = http.options(
      'https://tr-gateway.most.gov.bd/core/menu?$select=id,title_en,title_bn,url,slug,sort_order,status&$filter=parent_id%3D%276%27+AND+status%3D1&$orderby=sort_order+asc',
      null,
      {
        headers: {
          accept: '*/*',
          'access-control-request-method': 'GET',
          'access-control-request-headers': 'authorization',
          origin: 'https://tr-services.most.gov.bd',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-site',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        },
      }
    )

    response = http.get(
      'https://tr-gateway.most.gov.bd/core/service-mapping/all?$select=&$search=&$filter=1%3D1&$queryParams=%7B%22service_id%22:%2252%22%7D&$expand=&$orderby=id+desc&$top=10&$skip=0',
      {
        headers: {
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          accept: 'application/json',
          'sec-ch-ua-mobile': '?0',
          authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjE2NjgsInV1aWQiOiJmMmEzZjlkMy0zMGE4LTQyZmItYWIxMi1iODY5MDMzYTJiMjEiLCJvcmdhbml6YXRpb25faWQiOm51bGwsIm9yZ2Fub2dyYW1faWQiOm51bGwsIm9yZ2FuaXphdGlvbl9zaG9ydF9uYW1lIjoiIiwib3JnYW5pemF0aW9uX25hbWVfZW4iOiIiLCJvcmdhbml6YXRpb25fbmFtZV9ibiI6IiIsInJvbGVfaWQiOm51bGwsInJvbGVfY29kZSI6bnVsbCwicHJvZmlsZV90eXBlIjpudWxsLCJwcm9maWxlX2lkIjpudWxsLCJuYW1lIjoiTXIuQWJkdWxsYWgiLCJ1c2VyX3R5cGUiOiJTRVJWSUNFX1JFQ0lQSUVOVCIsImNvbXBhbnlfbmFtZSI6bnVsbCwibW9iaWxlIjpudWxsLCJlbWFpbCI6InBlcm1pdDFAeW9wbWFpbC5jb20iLCJyZW1lbWJlcl90b2tlbiI6bnVsbCwic3RhdHVzIjoxfSwiaWF0IjoxNzA1OTMxODA0LCJleHAiOjE3MDYwMzk4MDQsImp0aSI6InVRYVQ0bUxQdWMifQ.kU47P3PzBBqW9Rgd3U9DK_cyA2YPFR-Y7X50dYF_uv4',
          'sec-ch-ua-platform': '"Windows"',
          origin: 'https://tr-services.most.gov.bd',
          'sec-fetch-site': 'same-site',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        },
      }
    )

    response = http.options(
      'https://tr-gateway.most.gov.bd/core/service-mapping/all?$select=&$search=&$filter=1%3D1&$queryParams=%7B%22service_id%22:%2252%22%7D&$expand=&$orderby=id+desc&$top=10&$skip=0',
      null,
      {
        headers: {
          accept: '*/*',
          'access-control-request-method': 'GET',
          'access-control-request-headers': 'authorization',
          origin: 'https://tr-services.most.gov.bd',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-site',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        },
      }
    )
    sleep(2.1)
  })

  group(
    'page_5 - https://tr-license.most.gov.bd/en/services/baera/previous-data-enlistment',
    function () {
      response = http.get(
        'https://tr-license.most.gov.bd/en/services/baera/previous-data-enlistment',
        {
          headers: {
            'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'upgrade-insecure-requests': '1',
            accept:
              'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
            'sec-fetch-site': 'same-site',
            'sec-fetch-mode': 'navigate',
            'sec-fetch-user': '?1',
            'sec-fetch-dest': 'document',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )
      sleep(1.1)

      response = http.get(
        'https://tr-socket.most.gov.bd/socket.io/?EIO=4&transport=polling&t=OqnU7f-',
        {
          headers: {
            'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
            accept: '*/*',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            origin: 'https://tr-license.most.gov.bd',
            'sec-fetch-site': 'same-site',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.get('https://tr-gateway.most.gov.bd/core/option/load', {
        headers: {
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          accept: 'application/json',
          'sec-ch-ua-mobile': '?0',
          authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjE2NjgsInV1aWQiOiJmMmEzZjlkMy0zMGE4LTQyZmItYWIxMi1iODY5MDMzYTJiMjEiLCJvcmdhbml6YXRpb25faWQiOm51bGwsIm9yZ2Fub2dyYW1faWQiOm51bGwsIm9yZ2FuaXphdGlvbl9zaG9ydF9uYW1lIjoiIiwib3JnYW5pemF0aW9uX25hbWVfZW4iOiIiLCJvcmdhbml6YXRpb25fbmFtZV9ibiI6IiIsInJvbGVfaWQiOm51bGwsInJvbGVfY29kZSI6bnVsbCwicHJvZmlsZV90eXBlIjpudWxsLCJwcm9maWxlX2lkIjpudWxsLCJuYW1lIjoiTXIuQWJkdWxsYWgiLCJ1c2VyX3R5cGUiOiJTRVJWSUNFX1JFQ0lQSUVOVCIsImNvbXBhbnlfbmFtZSI6bnVsbCwibW9iaWxlIjpudWxsLCJlbWFpbCI6InBlcm1pdDFAeW9wbWFpbC5jb20iLCJyZW1lbWJlcl90b2tlbiI6bnVsbCwic3RhdHVzIjoxfSwiaWF0IjoxNzA1OTMxODA0LCJleHAiOjE3MDYwMzk4MDQsImp0aSI6InVRYVQ0bUxQdWMifQ.kU47P3PzBBqW9Rgd3U9DK_cyA2YPFR-Y7X50dYF_uv4',
          'sec-ch-ua-platform': '"Windows"',
          origin: 'https://tr-license.most.gov.bd',
          'sec-fetch-site': 'same-site',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        },
      })

      response = http.options('https://tr-gateway.most.gov.bd/core/option/load', null, {
        headers: {
          accept: '*/*',
          'access-control-request-method': 'GET',
          'access-control-request-headers': 'authorization',
          origin: 'https://tr-license.most.gov.bd',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-site',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        },
      })

      response = http.get(
        'https://tr-gateway.most.gov.bd/core/menu?$select=id,title_en,title_bn,url,slug,sort_order,status&$filter=parent_id%3D%271%27+AND+status%3D1&$orderby=sort_order+asc',
        {
          headers: {
            'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
            accept: 'application/json',
            'sec-ch-ua-mobile': '?0',
            authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjE2NjgsInV1aWQiOiJmMmEzZjlkMy0zMGE4LTQyZmItYWIxMi1iODY5MDMzYTJiMjEiLCJvcmdhbml6YXRpb25faWQiOm51bGwsIm9yZ2Fub2dyYW1faWQiOm51bGwsIm9yZ2FuaXphdGlvbl9zaG9ydF9uYW1lIjoiIiwib3JnYW5pemF0aW9uX25hbWVfZW4iOiIiLCJvcmdhbml6YXRpb25fbmFtZV9ibiI6IiIsInJvbGVfaWQiOm51bGwsInJvbGVfY29kZSI6bnVsbCwicHJvZmlsZV90eXBlIjpudWxsLCJwcm9maWxlX2lkIjpudWxsLCJuYW1lIjoiTXIuQWJkdWxsYWgiLCJ1c2VyX3R5cGUiOiJTRVJWSUNFX1JFQ0lQSUVOVCIsImNvbXBhbnlfbmFtZSI6bnVsbCwibW9iaWxlIjpudWxsLCJlbWFpbCI6InBlcm1pdDFAeW9wbWFpbC5jb20iLCJyZW1lbWJlcl90b2tlbiI6bnVsbCwic3RhdHVzIjoxfSwiaWF0IjoxNzA1OTMxODA0LCJleHAiOjE3MDYwMzk4MDQsImp0aSI6InVRYVQ0bUxQdWMifQ.kU47P3PzBBqW9Rgd3U9DK_cyA2YPFR-Y7X50dYF_uv4',
            'sec-ch-ua-platform': '"Windows"',
            origin: 'https://tr-license.most.gov.bd',
            'sec-fetch-site': 'same-site',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.options(
        'https://tr-gateway.most.gov.bd/core/menu?$select=id,title_en,title_bn,url,slug,sort_order,status&$filter=parent_id%3D%271%27+AND+status%3D1&$orderby=sort_order+asc',
        null,
        {
          headers: {
            accept: '*/*',
            'access-control-request-method': 'GET',
            'access-control-request-headers': 'authorization',
            origin: 'https://tr-license.most.gov.bd',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-site',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.get(
        'https://tr-gateway.most.gov.bd/core/service-mapping/dropdown?$select=id,name_en,name_bn,status,organization_id,component_id,service_assignment_id,service_id,description_en,description_bn,icon,image,key,slug&$orderby=name_en+asc',
        {
          headers: {
            'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
            accept: 'application/json',
            'sec-ch-ua-mobile': '?0',
            authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjE2NjgsInV1aWQiOiJmMmEzZjlkMy0zMGE4LTQyZmItYWIxMi1iODY5MDMzYTJiMjEiLCJvcmdhbml6YXRpb25faWQiOm51bGwsIm9yZ2Fub2dyYW1faWQiOm51bGwsIm9yZ2FuaXphdGlvbl9zaG9ydF9uYW1lIjoiIiwib3JnYW5pemF0aW9uX25hbWVfZW4iOiIiLCJvcmdhbml6YXRpb25fbmFtZV9ibiI6IiIsInJvbGVfaWQiOm51bGwsInJvbGVfY29kZSI6bnVsbCwicHJvZmlsZV90eXBlIjpudWxsLCJwcm9maWxlX2lkIjpudWxsLCJuYW1lIjoiTXIuQWJkdWxsYWgiLCJ1c2VyX3R5cGUiOiJTRVJWSUNFX1JFQ0lQSUVOVCIsImNvbXBhbnlfbmFtZSI6bnVsbCwibW9iaWxlIjpudWxsLCJlbWFpbCI6InBlcm1pdDFAeW9wbWFpbC5jb20iLCJyZW1lbWJlcl90b2tlbiI6bnVsbCwic3RhdHVzIjoxfSwiaWF0IjoxNzA1OTMxODA0LCJleHAiOjE3MDYwMzk4MDQsImp0aSI6InVRYVQ0bUxQdWMifQ.kU47P3PzBBqW9Rgd3U9DK_cyA2YPFR-Y7X50dYF_uv4',
            'sec-ch-ua-platform': '"Windows"',
            origin: 'https://tr-license.most.gov.bd',
            'sec-fetch-site': 'same-site',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.options(
        'https://tr-gateway.most.gov.bd/core/service-mapping/dropdown?$select=id,name_en,name_bn,status,organization_id,component_id,service_assignment_id,service_id,description_en,description_bn,icon,image,key,slug&$orderby=name_en+asc',
        null,
        {
          headers: {
            accept: '*/*',
            'access-control-request-method': 'GET',
            'access-control-request-headers': 'authorization',
            origin: 'https://tr-license.most.gov.bd',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-site',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.get(
        'https://tr-gateway.most.gov.bd/auth/organization/dropdown?$select=id,name_en,name_bn,institute_type,description_en,description_bn,status,component_ids,short_name,logo_image,banner_image&$orderby=sort_order+asc,name_en+asc',
        {
          headers: {
            'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
            accept: 'application/json',
            'sec-ch-ua-mobile': '?0',
            authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjE2NjgsInV1aWQiOiJmMmEzZjlkMy0zMGE4LTQyZmItYWIxMi1iODY5MDMzYTJiMjEiLCJvcmdhbml6YXRpb25faWQiOm51bGwsIm9yZ2Fub2dyYW1faWQiOm51bGwsIm9yZ2FuaXphdGlvbl9zaG9ydF9uYW1lIjoiIiwib3JnYW5pemF0aW9uX25hbWVfZW4iOiIiLCJvcmdhbml6YXRpb25fbmFtZV9ibiI6IiIsInJvbGVfaWQiOm51bGwsInJvbGVfY29kZSI6bnVsbCwicHJvZmlsZV90eXBlIjpudWxsLCJwcm9maWxlX2lkIjpudWxsLCJuYW1lIjoiTXIuQWJkdWxsYWgiLCJ1c2VyX3R5cGUiOiJTRVJWSUNFX1JFQ0lQSUVOVCIsImNvbXBhbnlfbmFtZSI6bnVsbCwibW9iaWxlIjpudWxsLCJlbWFpbCI6InBlcm1pdDFAeW9wbWFpbC5jb20iLCJyZW1lbWJlcl90b2tlbiI6bnVsbCwic3RhdHVzIjoxfSwiaWF0IjoxNzA1OTMxODA0LCJleHAiOjE3MDYwMzk4MDQsImp0aSI6InVRYVQ0bUxQdWMifQ.kU47P3PzBBqW9Rgd3U9DK_cyA2YPFR-Y7X50dYF_uv4',
            'sec-ch-ua-platform': '"Windows"',
            origin: 'https://tr-license.most.gov.bd',
            'sec-fetch-site': 'same-site',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.get(
        'https://tr-gateway.most.gov.bd/auth/organization/dropdown?$select=id,name_en,name_bn,institute_type,description_en,description_bn,status,component_ids,short_name,logo_image,banner_image&$orderby=sort_order+asc,name_en+asc',
        {
          headers: {
            'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
            accept: 'application/json',
            'sec-ch-ua-mobile': '?0',
            authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjE2NjgsInV1aWQiOiJmMmEzZjlkMy0zMGE4LTQyZmItYWIxMi1iODY5MDMzYTJiMjEiLCJvcmdhbml6YXRpb25faWQiOm51bGwsIm9yZ2Fub2dyYW1faWQiOm51bGwsIm9yZ2FuaXphdGlvbl9zaG9ydF9uYW1lIjoiIiwib3JnYW5pemF0aW9uX25hbWVfZW4iOiIiLCJvcmdhbml6YXRpb25fbmFtZV9ibiI6IiIsInJvbGVfaWQiOm51bGwsInJvbGVfY29kZSI6bnVsbCwicHJvZmlsZV90eXBlIjpudWxsLCJwcm9maWxlX2lkIjpudWxsLCJuYW1lIjoiTXIuQWJkdWxsYWgiLCJ1c2VyX3R5cGUiOiJTRVJWSUNFX1JFQ0lQSUVOVCIsImNvbXBhbnlfbmFtZSI6bnVsbCwibW9iaWxlIjpudWxsLCJlbWFpbCI6InBlcm1pdDFAeW9wbWFpbC5jb20iLCJyZW1lbWJlcl90b2tlbiI6bnVsbCwic3RhdHVzIjoxfSwiaWF0IjoxNzA1OTMxODA0LCJleHAiOjE3MDYwMzk4MDQsImp0aSI6InVRYVQ0bUxQdWMifQ.kU47P3PzBBqW9Rgd3U9DK_cyA2YPFR-Y7X50dYF_uv4',
            'sec-ch-ua-platform': '"Windows"',
            origin: 'https://tr-license.most.gov.bd',
            'sec-fetch-site': 'same-site',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.options(
        'https://tr-gateway.most.gov.bd/auth/organization/dropdown?$select=id,name_en,name_bn,institute_type,description_en,description_bn,status,component_ids,short_name,logo_image,banner_image&$orderby=sort_order+asc,name_en+asc',
        null,
        {
          headers: {
            accept: '*/*',
            'access-control-request-method': 'GET',
            'access-control-request-headers': 'authorization',
            origin: 'https://tr-license.most.gov.bd',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-site',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.options(
        'https://tr-gateway.most.gov.bd/auth/organization/dropdown?$select=id,name_en,name_bn,institute_type,description_en,description_bn,status,component_ids,short_name,logo_image,banner_image&$orderby=sort_order+asc,name_en+asc',
        null,
        {
          headers: {
            accept: '*/*',
            'access-control-request-method': 'GET',
            'access-control-request-headers': 'authorization',
            origin: 'https://tr-license.most.gov.bd',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-site',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.get(
        'https://tr-gateway.most.gov.bd/core/menu?$select=id,title_en,title_bn,url,slug,sort_order,status&$filter=parent_id%3D%276%27+AND+status%3D1&$orderby=sort_order+asc',
        {
          headers: {
            'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
            accept: 'application/json',
            'sec-ch-ua-mobile': '?0',
            authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjE2NjgsInV1aWQiOiJmMmEzZjlkMy0zMGE4LTQyZmItYWIxMi1iODY5MDMzYTJiMjEiLCJvcmdhbml6YXRpb25faWQiOm51bGwsIm9yZ2Fub2dyYW1faWQiOm51bGwsIm9yZ2FuaXphdGlvbl9zaG9ydF9uYW1lIjoiIiwib3JnYW5pemF0aW9uX25hbWVfZW4iOiIiLCJvcmdhbml6YXRpb25fbmFtZV9ibiI6IiIsInJvbGVfaWQiOm51bGwsInJvbGVfY29kZSI6bnVsbCwicHJvZmlsZV90eXBlIjpudWxsLCJwcm9maWxlX2lkIjpudWxsLCJuYW1lIjoiTXIuQWJkdWxsYWgiLCJ1c2VyX3R5cGUiOiJTRVJWSUNFX1JFQ0lQSUVOVCIsImNvbXBhbnlfbmFtZSI6bnVsbCwibW9iaWxlIjpudWxsLCJlbWFpbCI6InBlcm1pdDFAeW9wbWFpbC5jb20iLCJyZW1lbWJlcl90b2tlbiI6bnVsbCwic3RhdHVzIjoxfSwiaWF0IjoxNzA1OTMxODA0LCJleHAiOjE3MDYwMzk4MDQsImp0aSI6InVRYVQ0bUxQdWMifQ.kU47P3PzBBqW9Rgd3U9DK_cyA2YPFR-Y7X50dYF_uv4',
            'sec-ch-ua-platform': '"Windows"',
            origin: 'https://tr-license.most.gov.bd',
            'sec-fetch-site': 'same-site',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.options(
        'https://tr-gateway.most.gov.bd/core/menu?$select=id,title_en,title_bn,url,slug,sort_order,status&$filter=parent_id%3D%276%27+AND+status%3D1&$orderby=sort_order+asc',
        null,
        {
          headers: {
            accept: '*/*',
            'access-control-request-method': 'GET',
            'access-control-request-headers': 'authorization',
            origin: 'https://tr-license.most.gov.bd',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-site',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.get('https://tr-services.most.gov.bd/post_message_to_frame_owner.html', {
        headers: {
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          'upgrade-insecure-requests': '1',
          accept:
            'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
          'sec-fetch-site': 'same-site',
          'sec-fetch-mode': 'navigate',
          'sec-fetch-dest': 'iframe',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        },
      })

      response = http.get(
        'https://tr-gateway.most.gov.bd/core/location/dropdown?$filter=location_type_id+IN(%27COUNTRY%27,+%27DIVISION%27,+%27DISTRICT%27,+%27THANA%27)&$orderby=name_en+asc',
        {
          headers: {
            'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
            accept: 'application/json',
            'sec-ch-ua-mobile': '?0',
            authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjE2NjgsInV1aWQiOiJmMmEzZjlkMy0zMGE4LTQyZmItYWIxMi1iODY5MDMzYTJiMjEiLCJvcmdhbml6YXRpb25faWQiOm51bGwsIm9yZ2Fub2dyYW1faWQiOm51bGwsIm9yZ2FuaXphdGlvbl9zaG9ydF9uYW1lIjoiIiwib3JnYW5pemF0aW9uX25hbWVfZW4iOiIiLCJvcmdhbml6YXRpb25fbmFtZV9ibiI6IiIsInJvbGVfaWQiOm51bGwsInJvbGVfY29kZSI6bnVsbCwicHJvZmlsZV90eXBlIjpudWxsLCJwcm9maWxlX2lkIjpudWxsLCJuYW1lIjoiTXIuQWJkdWxsYWgiLCJ1c2VyX3R5cGUiOiJTRVJWSUNFX1JFQ0lQSUVOVCIsImNvbXBhbnlfbmFtZSI6bnVsbCwibW9iaWxlIjpudWxsLCJlbWFpbCI6InBlcm1pdDFAeW9wbWFpbC5jb20iLCJyZW1lbWJlcl90b2tlbiI6bnVsbCwic3RhdHVzIjoxfSwiaWF0IjoxNzA1OTMxODA0LCJleHAiOjE3MDYwMzk4MDQsImp0aSI6InVRYVQ0bUxQdWMifQ.kU47P3PzBBqW9Rgd3U9DK_cyA2YPFR-Y7X50dYF_uv4',
            'sec-ch-ua-platform': '"Windows"',
            origin: 'https://tr-license.most.gov.bd',
            'sec-fetch-site': 'same-site',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.options(
        'https://tr-gateway.most.gov.bd/core/location/dropdown?$filter=location_type_id+IN(%27COUNTRY%27,+%27DIVISION%27,+%27DISTRICT%27,+%27THANA%27)&$orderby=name_en+asc',
        null,
        {
          headers: {
            accept: '*/*',
            'access-control-request-method': 'GET',
            'access-control-request-headers': 'authorization',
            origin: 'https://tr-license.most.gov.bd',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-site',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.post(
        'https://tr-socket.most.gov.bd/socket.io/?EIO=4&transport=polling&t=OqnU7mQ&sid=BwaXeMWSgQBDAYDrALXl',
        '40',
        {
          headers: {
            'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
            accept: '*/*',
            'content-type': 'text/plain; charset=UTF-8',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            origin: 'https://tr-license.most.gov.bd',
            'sec-fetch-site': 'same-site',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.get(
        'https://tr-socket.most.gov.bd/socket.io/?EIO=4&transport=polling&t=OqnU7mU&sid=BwaXeMWSgQBDAYDrALXl',
        {
          headers: {
            'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
            accept: '*/*',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            origin: 'https://tr-license.most.gov.bd',
            'sec-fetch-site': 'same-site',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.get(
        'https://tr-socket.most.gov.bd/socket.io/?EIO=4&transport=polling&t=OqnU7p1&sid=BwaXeMWSgQBDAYDrALXl',
        {
          headers: {
            'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
            accept: '*/*',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            origin: 'https://tr-license.most.gov.bd',
            'sec-fetch-site': 'same-site',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.post('https://tr-gateway.most.gov.bd/auth/oauth/load-auth-state', '{}', {
        headers: {
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          accept: 'application/json',
          'content-type': 'application/json',
          'sec-ch-ua-mobile': '?0',
          authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjE2NjgsInV1aWQiOiJmMmEzZjlkMy0zMGE4LTQyZmItYWIxMi1iODY5MDMzYTJiMjEiLCJvcmdhbml6YXRpb25faWQiOm51bGwsIm9yZ2Fub2dyYW1faWQiOm51bGwsIm9yZ2FuaXphdGlvbl9zaG9ydF9uYW1lIjoiIiwib3JnYW5pemF0aW9uX25hbWVfZW4iOiIiLCJvcmdhbml6YXRpb25fbmFtZV9ibiI6IiIsInJvbGVfaWQiOm51bGwsInJvbGVfY29kZSI6bnVsbCwicHJvZmlsZV90eXBlIjpudWxsLCJwcm9maWxlX2lkIjpudWxsLCJuYW1lIjoiTXIuQWJkdWxsYWgiLCJ1c2VyX3R5cGUiOiJTRVJWSUNFX1JFQ0lQSUVOVCIsImNvbXBhbnlfbmFtZSI6bnVsbCwibW9iaWxlIjpudWxsLCJlbWFpbCI6InBlcm1pdDFAeW9wbWFpbC5jb20iLCJyZW1lbWJlcl90b2tlbiI6bnVsbCwic3RhdHVzIjoxfSwiaWF0IjoxNzA1OTMxODA0LCJleHAiOjE3MDYwMzk4MDQsImp0aSI6InVRYVQ0bUxQdWMifQ.kU47P3PzBBqW9Rgd3U9DK_cyA2YPFR-Y7X50dYF_uv4',
          'sec-ch-ua-platform': '"Windows"',
          origin: 'https://tr-license.most.gov.bd',
          'sec-fetch-site': 'same-site',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        },
      })

      response = http.options('https://tr-gateway.most.gov.bd/auth/oauth/load-auth-state', null, {
        headers: {
          accept: '*/*',
          'access-control-request-method': 'POST',
          'access-control-request-headers': 'authorization,content-type',
          origin: 'https://tr-license.most.gov.bd',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-site',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        },
      })

      response = http.post(
        'https://tr-gateway.most.gov.bd/auth/oauth/load-user-scopes',
        '{"user_id":1668}',
        {
          headers: {
            'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
            accept: 'application/json',
            'content-type': 'application/json',
            'sec-ch-ua-mobile': '?0',
            authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjE2NjgsInV1aWQiOiJmMmEzZjlkMy0zMGE4LTQyZmItYWIxMi1iODY5MDMzYTJiMjEiLCJvcmdhbml6YXRpb25faWQiOm51bGwsIm9yZ2Fub2dyYW1faWQiOm51bGwsIm9yZ2FuaXphdGlvbl9zaG9ydF9uYW1lIjoiIiwib3JnYW5pemF0aW9uX25hbWVfZW4iOiIiLCJvcmdhbml6YXRpb25fbmFtZV9ibiI6IiIsInJvbGVfaWQiOm51bGwsInJvbGVfY29kZSI6bnVsbCwicHJvZmlsZV90eXBlIjpudWxsLCJwcm9maWxlX2lkIjpudWxsLCJuYW1lIjoiTXIuQWJkdWxsYWgiLCJ1c2VyX3R5cGUiOiJTRVJWSUNFX1JFQ0lQSUVOVCIsImNvbXBhbnlfbmFtZSI6bnVsbCwibW9iaWxlIjpudWxsLCJlbWFpbCI6InBlcm1pdDFAeW9wbWFpbC5jb20iLCJyZW1lbWJlcl90b2tlbiI6bnVsbCwic3RhdHVzIjoxfSwiaWF0IjoxNzA1OTMxODA0LCJleHAiOjE3MDYwMzk4MDQsImp0aSI6InVRYVQ0bUxQdWMifQ.kU47P3PzBBqW9Rgd3U9DK_cyA2YPFR-Y7X50dYF_uv4',
            'sec-ch-ua-platform': '"Windows"',
            origin: 'https://tr-license.most.gov.bd',
            'sec-fetch-site': 'same-site',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.options('https://tr-gateway.most.gov.bd/auth/oauth/load-user-scopes', null, {
        headers: {
          accept: '*/*',
          'access-control-request-method': 'POST',
          'access-control-request-headers': 'authorization,content-type',
          origin: 'https://tr-license.most.gov.bd',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-site',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        },
      })

      response = http.get(
        'https://tr-gateway.most.gov.bd/auth/applicant-profile/applicant/details/1668',
        {
          headers: {
            'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
            accept: 'application/json',
            'sec-ch-ua-mobile': '?0',
            authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjE2NjgsInV1aWQiOiJmMmEzZjlkMy0zMGE4LTQyZmItYWIxMi1iODY5MDMzYTJiMjEiLCJvcmdhbml6YXRpb25faWQiOm51bGwsIm9yZ2Fub2dyYW1faWQiOm51bGwsIm9yZ2FuaXphdGlvbl9zaG9ydF9uYW1lIjoiIiwib3JnYW5pemF0aW9uX25hbWVfZW4iOiIiLCJvcmdhbml6YXRpb25fbmFtZV9ibiI6IiIsInJvbGVfaWQiOm51bGwsInJvbGVfY29kZSI6bnVsbCwicHJvZmlsZV90eXBlIjpudWxsLCJwcm9maWxlX2lkIjpudWxsLCJuYW1lIjoiTXIuQWJkdWxsYWgiLCJ1c2VyX3R5cGUiOiJTRVJWSUNFX1JFQ0lQSUVOVCIsImNvbXBhbnlfbmFtZSI6bnVsbCwibW9iaWxlIjpudWxsLCJlbWFpbCI6InBlcm1pdDFAeW9wbWFpbC5jb20iLCJyZW1lbWJlcl90b2tlbiI6bnVsbCwic3RhdHVzIjoxfSwiaWF0IjoxNzA1OTMxODA0LCJleHAiOjE3MDYwMzk4MDQsImp0aSI6InVRYVQ0bUxQdWMifQ.kU47P3PzBBqW9Rgd3U9DK_cyA2YPFR-Y7X50dYF_uv4',
            'sec-ch-ua-platform': '"Windows"',
            origin: 'https://tr-license.most.gov.bd',
            'sec-fetch-site': 'same-site',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.options(
        'https://tr-gateway.most.gov.bd/auth/applicant-profile/applicant/details/1668',
        null,
        {
          headers: {
            accept: '*/*',
            'access-control-request-method': 'GET',
            'access-control-request-headers': 'authorization',
            origin: 'https://tr-license.most.gov.bd',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-site',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )
      sleep(3.1)

      response = http.get(
        'https://tr-gateway.most.gov.bd/core/enum/dropdown?$select=id,type,key,value_en,value_bn,is_default,organization_ids,sort_order,status&$orderby=sort_order+asc+value_en+asc',
        {
          headers: {
            'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
            accept: 'application/json',
            'sec-ch-ua-mobile': '?0',
            authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjE2NjgsInV1aWQiOiJmMmEzZjlkMy0zMGE4LTQyZmItYWIxMi1iODY5MDMzYTJiMjEiLCJvcmdhbml6YXRpb25faWQiOm51bGwsIm9yZ2Fub2dyYW1faWQiOm51bGwsIm9yZ2FuaXphdGlvbl9zaG9ydF9uYW1lIjoiIiwib3JnYW5pemF0aW9uX25hbWVfZW4iOiIiLCJvcmdhbml6YXRpb25fbmFtZV9ibiI6IiIsInJvbGVfaWQiOm51bGwsInJvbGVfY29kZSI6bnVsbCwicHJvZmlsZV90eXBlIjpudWxsLCJwcm9maWxlX2lkIjpudWxsLCJuYW1lIjoiTXIuQWJkdWxsYWgiLCJ1c2VyX3R5cGUiOiJTRVJWSUNFX1JFQ0lQSUVOVCIsImNvbXBhbnlfbmFtZSI6bnVsbCwibW9iaWxlIjpudWxsLCJlbWFpbCI6InBlcm1pdDFAeW9wbWFpbC5jb20iLCJyZW1lbWJlcl90b2tlbiI6bnVsbCwic3RhdHVzIjoxfSwiaWF0IjoxNzA1OTMxODA0LCJleHAiOjE3MDYwMzk4MDQsImp0aSI6InVRYVQ0bUxQdWMifQ.kU47P3PzBBqW9Rgd3U9DK_cyA2YPFR-Y7X50dYF_uv4',
            'sec-ch-ua-platform': '"Windows"',
            origin: 'https://tr-license.most.gov.bd',
            'sec-fetch-site': 'same-site',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.options(
        'https://tr-gateway.most.gov.bd/core/enum/dropdown?$select=id,type,key,value_en,value_bn,is_default,organization_ids,sort_order,status&$orderby=sort_order+asc+value_en+asc',
        null,
        {
          headers: {
            accept: '*/*',
            'access-control-request-method': 'GET',
            'access-control-request-headers': 'authorization',
            origin: 'https://tr-license.most.gov.bd',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-site',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.get(
        'https://tr-gateway.most.gov.bd/core/service-mapping/dropdown?$select=id,name_en,name_bn,status,organization_id,component_id,service_assignment_id,service_id,description_en,description_bn,icon,image,key,slug&$orderby=name_en+asc',
        {
          headers: {
            'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
            accept: 'application/json',
            'sec-ch-ua-mobile': '?0',
            authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjE2NjgsInV1aWQiOiJmMmEzZjlkMy0zMGE4LTQyZmItYWIxMi1iODY5MDMzYTJiMjEiLCJvcmdhbml6YXRpb25faWQiOm51bGwsIm9yZ2Fub2dyYW1faWQiOm51bGwsIm9yZ2FuaXphdGlvbl9zaG9ydF9uYW1lIjoiIiwib3JnYW5pemF0aW9uX25hbWVfZW4iOiIiLCJvcmdhbml6YXRpb25fbmFtZV9ibiI6IiIsInJvbGVfaWQiOm51bGwsInJvbGVfY29kZSI6bnVsbCwicHJvZmlsZV90eXBlIjpudWxsLCJwcm9maWxlX2lkIjpudWxsLCJuYW1lIjoiTXIuQWJkdWxsYWgiLCJ1c2VyX3R5cGUiOiJTRVJWSUNFX1JFQ0lQSUVOVCIsImNvbXBhbnlfbmFtZSI6bnVsbCwibW9iaWxlIjpudWxsLCJlbWFpbCI6InBlcm1pdDFAeW9wbWFpbC5jb20iLCJyZW1lbWJlcl90b2tlbiI6bnVsbCwic3RhdHVzIjoxfSwiaWF0IjoxNzA1OTMxODA0LCJleHAiOjE3MDYwMzk4MDQsImp0aSI6InVRYVQ0bUxQdWMifQ.kU47P3PzBBqW9Rgd3U9DK_cyA2YPFR-Y7X50dYF_uv4',
            'sec-ch-ua-platform': '"Windows"',
            origin: 'https://tr-license.most.gov.bd',
            'sec-fetch-site': 'same-site',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.options(
        'https://tr-gateway.most.gov.bd/core/service-mapping/dropdown?$select=id,name_en,name_bn,status,organization_id,component_id,service_assignment_id,service_id,description_en,description_bn,icon,image,key,slug&$orderby=name_en+asc',
        null,
        {
          headers: {
            accept: '*/*',
            'access-control-request-method': 'GET',
            'access-control-request-headers': 'authorization',
            origin: 'https://tr-license.most.gov.bd',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-site',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.get(
        'https://tr-gateway.most.gov.bd/license/fee-information/get-license-fee/7/null',
        {
          headers: {
            'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
            accept: 'application/json',
            'sec-ch-ua-mobile': '?0',
            authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjE2NjgsInV1aWQiOiJmMmEzZjlkMy0zMGE4LTQyZmItYWIxMi1iODY5MDMzYTJiMjEiLCJvcmdhbml6YXRpb25faWQiOm51bGwsIm9yZ2Fub2dyYW1faWQiOm51bGwsIm9yZ2FuaXphdGlvbl9zaG9ydF9uYW1lIjoiIiwib3JnYW5pemF0aW9uX25hbWVfZW4iOiIiLCJvcmdhbml6YXRpb25fbmFtZV9ibiI6IiIsInJvbGVfaWQiOm51bGwsInJvbGVfY29kZSI6bnVsbCwicHJvZmlsZV90eXBlIjpudWxsLCJwcm9maWxlX2lkIjpudWxsLCJuYW1lIjoiTXIuQWJkdWxsYWgiLCJ1c2VyX3R5cGUiOiJTRVJWSUNFX1JFQ0lQSUVOVCIsImNvbXBhbnlfbmFtZSI6bnVsbCwibW9iaWxlIjpudWxsLCJlbWFpbCI6InBlcm1pdDFAeW9wbWFpbC5jb20iLCJyZW1lbWJlcl90b2tlbiI6bnVsbCwic3RhdHVzIjoxfSwiaWF0IjoxNzA1OTMxODA0LCJleHAiOjE3MDYwMzk4MDQsImp0aSI6InVRYVQ0bUxQdWMifQ.kU47P3PzBBqW9Rgd3U9DK_cyA2YPFR-Y7X50dYF_uv4',
            'sec-ch-ua-platform': '"Windows"',
            origin: 'https://tr-license.most.gov.bd',
            'sec-fetch-site': 'same-site',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.options(
        'https://tr-gateway.most.gov.bd/license/fee-information/get-license-fee/7/null',
        null,
        {
          headers: {
            accept: '*/*',
            'access-control-request-method': 'GET',
            'access-control-request-headers': 'authorization',
            origin: 'https://tr-license.most.gov.bd',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-site',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )
      sleep(1.4)

      response = http.get(
        'https://tr-gateway.most.gov.bd/license/fee-information/get-license-fee/7/38',
        {
          headers: {
            'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
            accept: 'application/json',
            'sec-ch-ua-mobile': '?0',
            authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjE2NjgsInV1aWQiOiJmMmEzZjlkMy0zMGE4LTQyZmItYWIxMi1iODY5MDMzYTJiMjEiLCJvcmdhbml6YXRpb25faWQiOm51bGwsIm9yZ2Fub2dyYW1faWQiOm51bGwsIm9yZ2FuaXphdGlvbl9zaG9ydF9uYW1lIjoiIiwib3JnYW5pemF0aW9uX25hbWVfZW4iOiIiLCJvcmdhbml6YXRpb25fbmFtZV9ibiI6IiIsInJvbGVfaWQiOm51bGwsInJvbGVfY29kZSI6bnVsbCwicHJvZmlsZV90eXBlIjpudWxsLCJwcm9maWxlX2lkIjpudWxsLCJuYW1lIjoiTXIuQWJkdWxsYWgiLCJ1c2VyX3R5cGUiOiJTRVJWSUNFX1JFQ0lQSUVOVCIsImNvbXBhbnlfbmFtZSI6bnVsbCwibW9iaWxlIjpudWxsLCJlbWFpbCI6InBlcm1pdDFAeW9wbWFpbC5jb20iLCJyZW1lbWJlcl90b2tlbiI6bnVsbCwic3RhdHVzIjoxfSwiaWF0IjoxNzA1OTMxODA0LCJleHAiOjE3MDYwMzk4MDQsImp0aSI6InVRYVQ0bUxQdWMifQ.kU47P3PzBBqW9Rgd3U9DK_cyA2YPFR-Y7X50dYF_uv4',
            'sec-ch-ua-platform': '"Windows"',
            origin: 'https://tr-license.most.gov.bd',
            'sec-fetch-site': 'same-site',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.options(
        'https://tr-gateway.most.gov.bd/license/fee-information/get-license-fee/7/38',
        null,
        {
          headers: {
            accept: '*/*',
            'access-control-request-method': 'GET',
            'access-control-request-headers': 'authorization',
            origin: 'https://tr-license.most.gov.bd',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-site',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )
      sleep(7.6)

      formData = new FormData()
      formData.boundary = '----WebKitFormBoundaryx2BygCV06Up55reE'
      formData.append('componentName', 'License')
      formData.append('file', '1678165347882.pdf')
      formData.append('recordFieldName', 'original_license_attachment')
      formData.append('recordId', 'null')
      formData.append('recordType', 'ClassCManual')

      response = http.post('https://tr-cdn.most.gov.bd/file/upload', formData.body(), {
        headers: {
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          accept: 'application/json',
          'content-type': 'multipart/form-data; boundary=----WebKitFormBoundaryx2BygCV06Up55reE',
          'sec-ch-ua-mobile': '?0',
          authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjE2NjgsInV1aWQiOiJmMmEzZjlkMy0zMGE4LTQyZmItYWIxMi1iODY5MDMzYTJiMjEiLCJvcmdhbml6YXRpb25faWQiOm51bGwsIm9yZ2Fub2dyYW1faWQiOm51bGwsIm9yZ2FuaXphdGlvbl9zaG9ydF9uYW1lIjoiIiwib3JnYW5pemF0aW9uX25hbWVfZW4iOiIiLCJvcmdhbml6YXRpb25fbmFtZV9ibiI6IiIsInJvbGVfaWQiOm51bGwsInJvbGVfY29kZSI6bnVsbCwicHJvZmlsZV90eXBlIjpudWxsLCJwcm9maWxlX2lkIjpudWxsLCJuYW1lIjoiTXIuQWJkdWxsYWgiLCJ1c2VyX3R5cGUiOiJTRVJWSUNFX1JFQ0lQSUVOVCIsImNvbXBhbnlfbmFtZSI6bnVsbCwibW9iaWxlIjpudWxsLCJlbWFpbCI6InBlcm1pdDFAeW9wbWFpbC5jb20iLCJyZW1lbWJlcl90b2tlbiI6bnVsbCwic3RhdHVzIjoxfSwiaWF0IjoxNzA1OTMxODA0LCJleHAiOjE3MDYwMzk4MDQsImp0aSI6InVRYVQ0bUxQdWMifQ.kU47P3PzBBqW9Rgd3U9DK_cyA2YPFR-Y7X50dYF_uv4',
          'sec-ch-ua-platform': '"Windows"',
          origin: 'https://tr-license.most.gov.bd',
          'sec-fetch-site': 'same-site',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        },
      })

      response = http.options('https://tr-cdn.most.gov.bd/file/upload', null, {
        headers: {
          accept: '*/*',
          'access-control-request-method': 'POST',
          'access-control-request-headers': 'authorization',
          origin: 'https://tr-license.most.gov.bd',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-site',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        },
      })
      sleep(76.5)

      response = http.get(
        'https://tr-gateway.most.gov.bd/license/rco-application/get-rco-application-license-for-enlistment/1668',
        {
          headers: {
            'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
            accept: 'application/json',
            'sec-ch-ua-mobile': '?0',
            authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjE2NjgsInV1aWQiOiJmMmEzZjlkMy0zMGE4LTQyZmItYWIxMi1iODY5MDMzYTJiMjEiLCJvcmdhbml6YXRpb25faWQiOm51bGwsIm9yZ2Fub2dyYW1faWQiOm51bGwsIm9yZ2FuaXphdGlvbl9zaG9ydF9uYW1lIjoiIiwib3JnYW5pemF0aW9uX25hbWVfZW4iOiIiLCJvcmdhbml6YXRpb25fbmFtZV9ibiI6IiIsInJvbGVfaWQiOm51bGwsInJvbGVfY29kZSI6bnVsbCwicHJvZmlsZV90eXBlIjpudWxsLCJwcm9maWxlX2lkIjpudWxsLCJuYW1lIjoiTXIuQWJkdWxsYWgiLCJ1c2VyX3R5cGUiOiJTRVJWSUNFX1JFQ0lQSUVOVCIsImNvbXBhbnlfbmFtZSI6bnVsbCwibW9iaWxlIjpudWxsLCJlbWFpbCI6InBlcm1pdDFAeW9wbWFpbC5jb20iLCJyZW1lbWJlcl90b2tlbiI6bnVsbCwic3RhdHVzIjoxfSwiaWF0IjoxNzA1OTMxODA0LCJleHAiOjE3MDYwMzk4MDQsImp0aSI6InVRYVQ0bUxQdWMifQ.kU47P3PzBBqW9Rgd3U9DK_cyA2YPFR-Y7X50dYF_uv4',
            'sec-ch-ua-platform': '"Windows"',
            origin: 'https://tr-license.most.gov.bd',
            'sec-fetch-site': 'same-site',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.options(
        'https://tr-gateway.most.gov.bd/license/rco-application/get-rco-application-license-for-enlistment/1668',
        null,
        {
          headers: {
            accept: '*/*',
            'access-control-request-method': 'GET',
            'access-control-request-headers': 'authorization',
            origin: 'https://tr-license.most.gov.bd',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-site',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )
      sleep(13.9)

      response = http.get(
        'https://tr-gateway.most.gov.bd/license/rco-application/get-rco-application-license-for-enlistment/1668',
        {
          headers: {
            'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
            accept: 'application/json',
            'sec-ch-ua-mobile': '?0',
            authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjE2NjgsInV1aWQiOiJmMmEzZjlkMy0zMGE4LTQyZmItYWIxMi1iODY5MDMzYTJiMjEiLCJvcmdhbml6YXRpb25faWQiOm51bGwsIm9yZ2Fub2dyYW1faWQiOm51bGwsIm9yZ2FuaXphdGlvbl9zaG9ydF9uYW1lIjoiIiwib3JnYW5pemF0aW9uX25hbWVfZW4iOiIiLCJvcmdhbml6YXRpb25fbmFtZV9ibiI6IiIsInJvbGVfaWQiOm51bGwsInJvbGVfY29kZSI6bnVsbCwicHJvZmlsZV90eXBlIjpudWxsLCJwcm9maWxlX2lkIjpudWxsLCJuYW1lIjoiTXIuQWJkdWxsYWgiLCJ1c2VyX3R5cGUiOiJTRVJWSUNFX1JFQ0lQSUVOVCIsImNvbXBhbnlfbmFtZSI6bnVsbCwibW9iaWxlIjpudWxsLCJlbWFpbCI6InBlcm1pdDFAeW9wbWFpbC5jb20iLCJyZW1lbWJlcl90b2tlbiI6bnVsbCwic3RhdHVzIjoxfSwiaWF0IjoxNzA1OTMxODA0LCJleHAiOjE3MDYwMzk4MDQsImp0aSI6InVRYVQ0bUxQdWMifQ.kU47P3PzBBqW9Rgd3U9DK_cyA2YPFR-Y7X50dYF_uv4',
            'sec-ch-ua-platform': '"Windows"',
            origin: 'https://tr-license.most.gov.bd',
            'sec-fetch-site': 'same-site',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.options(
        'https://tr-gateway.most.gov.bd/license/rco-application/get-rco-application-license-for-enlistment/1668',
        null,
        {
          headers: {
            accept: '*/*',
            'access-control-request-method': 'GET',
            'access-control-request-headers': 'authorization',
            origin: 'https://tr-license.most.gov.bd',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-site',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )
      sleep(32.3)

      formData = new FormData()
      formData.boundary = '----WebKitFormBoundaryZmFE07Rt4MvQS4XP'
      formData.append('componentName', 'License')
      formData.append('file', '1678165347882.pdf')
      formData.append('recordFieldName', 'original_certificate_attachment')
      formData.append('recordId', 'null')
      formData.append('recordType', 'RCOManual')

      response = http.post('https://tr-cdn.most.gov.bd/file/upload', formData.body(), {
        headers: {
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          accept: 'application/json',
          'content-type': 'multipart/form-data; boundary=----WebKitFormBoundaryZmFE07Rt4MvQS4XP',
          'sec-ch-ua-mobile': '?0',
          authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjE2NjgsInV1aWQiOiJmMmEzZjlkMy0zMGE4LTQyZmItYWIxMi1iODY5MDMzYTJiMjEiLCJvcmdhbml6YXRpb25faWQiOm51bGwsIm9yZ2Fub2dyYW1faWQiOm51bGwsIm9yZ2FuaXphdGlvbl9zaG9ydF9uYW1lIjoiIiwib3JnYW5pemF0aW9uX25hbWVfZW4iOiIiLCJvcmdhbml6YXRpb25fbmFtZV9ibiI6IiIsInJvbGVfaWQiOm51bGwsInJvbGVfY29kZSI6bnVsbCwicHJvZmlsZV90eXBlIjpudWxsLCJwcm9maWxlX2lkIjpudWxsLCJuYW1lIjoiTXIuQWJkdWxsYWgiLCJ1c2VyX3R5cGUiOiJTRVJWSUNFX1JFQ0lQSUVOVCIsImNvbXBhbnlfbmFtZSI6bnVsbCwibW9iaWxlIjpudWxsLCJlbWFpbCI6InBlcm1pdDFAeW9wbWFpbC5jb20iLCJyZW1lbWJlcl90b2tlbiI6bnVsbCwic3RhdHVzIjoxfSwiaWF0IjoxNzA1OTMxODA0LCJleHAiOjE3MDYwMzk4MDQsImp0aSI6InVRYVQ0bUxQdWMifQ.kU47P3PzBBqW9Rgd3U9DK_cyA2YPFR-Y7X50dYF_uv4',
          'sec-ch-ua-platform': '"Windows"',
          origin: 'https://tr-license.most.gov.bd',
          'sec-fetch-site': 'same-site',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        },
      })

      response = http.options('https://tr-cdn.most.gov.bd/file/upload', null, {
        headers: {
          accept: '*/*',
          'access-control-request-method': 'POST',
          'access-control-request-headers': 'authorization',
          origin: 'https://tr-license.most.gov.bd',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-site',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        },
      })
      sleep(58.8)

      formData = new FormData()
      formData.boundary = '----WebKitFormBoundary5EpnAjykGAfennBN'
      formData.append('componentName', 'License')
      formData.append('file', 'th (1).jpg')
      formData.append('recordFieldName', 'null')
      formData.append('recordId', 'null')
      formData.append('recordType', 'null')

      response = http.post('https://tr-cdn.most.gov.bd/file/upload', formData.body(), {
        headers: {
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          accept: 'application/json',
          'content-type': 'multipart/form-data; boundary=----WebKitFormBoundary5EpnAjykGAfennBN',
          'sec-ch-ua-mobile': '?0',
          authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjE2NjgsInV1aWQiOiJmMmEzZjlkMy0zMGE4LTQyZmItYWIxMi1iODY5MDMzYTJiMjEiLCJvcmdhbml6YXRpb25faWQiOm51bGwsIm9yZ2Fub2dyYW1faWQiOm51bGwsIm9yZ2FuaXphdGlvbl9zaG9ydF9uYW1lIjoiIiwib3JnYW5pemF0aW9uX25hbWVfZW4iOiIiLCJvcmdhbml6YXRpb25fbmFtZV9ibiI6IiIsInJvbGVfaWQiOm51bGwsInJvbGVfY29kZSI6bnVsbCwicHJvZmlsZV90eXBlIjpudWxsLCJwcm9maWxlX2lkIjpudWxsLCJuYW1lIjoiTXIuQWJkdWxsYWgiLCJ1c2VyX3R5cGUiOiJTRVJWSUNFX1JFQ0lQSUVOVCIsImNvbXBhbnlfbmFtZSI6bnVsbCwibW9iaWxlIjpudWxsLCJlbWFpbCI6InBlcm1pdDFAeW9wbWFpbC5jb20iLCJyZW1lbWJlcl90b2tlbiI6bnVsbCwic3RhdHVzIjoxfSwiaWF0IjoxNzA1OTMxODA0LCJleHAiOjE3MDYwMzk4MDQsImp0aSI6InVRYVQ0bUxQdWMifQ.kU47P3PzBBqW9Rgd3U9DK_cyA2YPFR-Y7X50dYF_uv4',
          'sec-ch-ua-platform': '"Windows"',
          origin: 'https://tr-license.most.gov.bd',
          'sec-fetch-site': 'same-site',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        },
      })

      response = http.options('https://tr-cdn.most.gov.bd/file/upload', null, {
        headers: {
          accept: '*/*',
          'access-control-request-method': 'POST',
          'access-control-request-headers': 'authorization',
          origin: 'https://tr-license.most.gov.bd',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-site',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        },
      })
      sleep(19.4)

      response = http.post(
        'https://tr-gateway.most.gov.bd/license/class-c-license-application',
        '{"legacy_license_permit_number":"82389/2025","original_license_attachment":"65ae74e440805","original_submission_date":"2017-01-04T14:00:09.749Z","legacy_issue_renew_date":"2021-01-07T14:00:19.753Z","legacy_expiry_date":"2025-01-18T14:00:25.185Z","installation_code":"09932","activities_purpose":"Use","applicant_name_en":"Kuddus ","applicant_name_bn":"কুদ্দস","applicant_org_name":"Medico ","applicant_org_name_bn":"মেদিকো","applicant_org_address":"Mirpur","applicant_org_address_bn":"Mirpur-12","applicant_org_division_id":3,"applicant_org_district_id":23,"applicant_org_upazila_id":205,"rco_type":"NEW","license_renewal_fee_id":16,"applicant_signature":"65ae759ac2642","is_agreed":true,"certificate_type":"PROVISIONAL","original_certificate_number":"71/2023","legacy_issue_date":"2020-12-31T18:00:00.000Z","original_certificate_expiry_date":"2025-01-10T14:02:16.827Z","rco_name":"enlistedRCO2022","rco_designation":"s","rco_date_of_birth":"2015-01-15T04:23:55.583Z","rco_gender":"FEMALE","application_type":"NEW","application_medium":"MANUAL","current_active_step":2,"provisional_certificate_attachment":"65ae755fac0f1","apllicant_declaration":"PERSONALLY","organization_id":7,"service_mapping_id":38,"status":"SUBMITTED","repeaterData":{"radiatingEquipmentDetailsListData":{"0":{"equipment_type":"Munching MRI ","equipment_model":"rew32432","max_voltage_level":"3211","max_carent_level":"2133","max_power":"5677","control_panel_no":null,"tube_head_no":null,"supplier_name":"Mr.FErdouse","supplier_address":"Mirpur ","intended_use":"X_RAY_ANALYSIS","other_intended_use":""}}}}',
        {
          headers: {
            'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
            accept: 'application/json',
            'content-type': 'application/json',
            'sec-ch-ua-mobile': '?0',
            authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjE2NjgsInV1aWQiOiJmMmEzZjlkMy0zMGE4LTQyZmItYWIxMi1iODY5MDMzYTJiMjEiLCJvcmdhbml6YXRpb25faWQiOm51bGwsIm9yZ2Fub2dyYW1faWQiOm51bGwsIm9yZ2FuaXphdGlvbl9zaG9ydF9uYW1lIjoiIiwib3JnYW5pemF0aW9uX25hbWVfZW4iOiIiLCJvcmdhbml6YXRpb25fbmFtZV9ibiI6IiIsInJvbGVfaWQiOm51bGwsInJvbGVfY29kZSI6bnVsbCwicHJvZmlsZV90eXBlIjpudWxsLCJwcm9maWxlX2lkIjpudWxsLCJuYW1lIjoiTXIuQWJkdWxsYWgiLCJ1c2VyX3R5cGUiOiJTRVJWSUNFX1JFQ0lQSUVOVCIsImNvbXBhbnlfbmFtZSI6bnVsbCwibW9iaWxlIjpudWxsLCJlbWFpbCI6InBlcm1pdDFAeW9wbWFpbC5jb20iLCJyZW1lbWJlcl90b2tlbiI6bnVsbCwic3RhdHVzIjoxfSwiaWF0IjoxNzA1OTMxODA0LCJleHAiOjE3MDYwMzk4MDQsImp0aSI6InVRYVQ0bUxQdWMifQ.kU47P3PzBBqW9Rgd3U9DK_cyA2YPFR-Y7X50dYF_uv4',
            'sec-ch-ua-platform': '"Windows"',
            origin: 'https://tr-license.most.gov.bd',
            'sec-fetch-site': 'same-site',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.options(
        'https://tr-gateway.most.gov.bd/license/class-c-license-application',
        null,
        {
          headers: {
            accept: '*/*',
            'access-control-request-method': 'POST',
            'access-control-request-headers': 'authorization,content-type',
            origin: 'https://tr-license.most.gov.bd',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-site',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )
      sleep(1.4)

      response = http.get(
        'https://tr-gateway.most.gov.bd/license/fee-information/get-license-fee/7/38',
        {
          headers: {
            'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
            accept: 'application/json',
            'sec-ch-ua-mobile': '?0',
            authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjE2NjgsInV1aWQiOiJmMmEzZjlkMy0zMGE4LTQyZmItYWIxMi1iODY5MDMzYTJiMjEiLCJvcmdhbml6YXRpb25faWQiOm51bGwsIm9yZ2Fub2dyYW1faWQiOm51bGwsIm9yZ2FuaXphdGlvbl9zaG9ydF9uYW1lIjoiIiwib3JnYW5pemF0aW9uX25hbWVfZW4iOiIiLCJvcmdhbml6YXRpb25fbmFtZV9ibiI6IiIsInJvbGVfaWQiOm51bGwsInJvbGVfY29kZSI6bnVsbCwicHJvZmlsZV90eXBlIjpudWxsLCJwcm9maWxlX2lkIjpudWxsLCJuYW1lIjoiTXIuQWJkdWxsYWgiLCJ1c2VyX3R5cGUiOiJTRVJWSUNFX1JFQ0lQSUVOVCIsImNvbXBhbnlfbmFtZSI6bnVsbCwibW9iaWxlIjpudWxsLCJlbWFpbCI6InBlcm1pdDFAeW9wbWFpbC5jb20iLCJyZW1lbWJlcl90b2tlbiI6bnVsbCwic3RhdHVzIjoxfSwiaWF0IjoxNzA1OTMxODA0LCJleHAiOjE3MDYwMzk4MDQsImp0aSI6InVRYVQ0bUxQdWMifQ.kU47P3PzBBqW9Rgd3U9DK_cyA2YPFR-Y7X50dYF_uv4',
            'sec-ch-ua-platform': '"Windows"',
            origin: 'https://tr-license.most.gov.bd',
            'sec-fetch-site': 'same-site',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.options(
        'https://tr-gateway.most.gov.bd/license/fee-information/get-license-fee/7/38',
        null,
        {
          headers: {
            accept: '*/*',
            'access-control-request-method': 'GET',
            'access-control-request-headers': 'authorization',
            origin: 'https://tr-license.most.gov.bd',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-site',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.get('https://tr-gateway.most.gov.bd/license/class-c-license-application/77', {
        headers: {
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          accept: 'application/json',
          'sec-ch-ua-mobile': '?0',
          authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjE2NjgsInV1aWQiOiJmMmEzZjlkMy0zMGE4LTQyZmItYWIxMi1iODY5MDMzYTJiMjEiLCJvcmdhbml6YXRpb25faWQiOm51bGwsIm9yZ2Fub2dyYW1faWQiOm51bGwsIm9yZ2FuaXphdGlvbl9zaG9ydF9uYW1lIjoiIiwib3JnYW5pemF0aW9uX25hbWVfZW4iOiIiLCJvcmdhbml6YXRpb25fbmFtZV9ibiI6IiIsInJvbGVfaWQiOm51bGwsInJvbGVfY29kZSI6bnVsbCwicHJvZmlsZV90eXBlIjpudWxsLCJwcm9maWxlX2lkIjpudWxsLCJuYW1lIjoiTXIuQWJkdWxsYWgiLCJ1c2VyX3R5cGUiOiJTRVJWSUNFX1JFQ0lQSUVOVCIsImNvbXBhbnlfbmFtZSI6bnVsbCwibW9iaWxlIjpudWxsLCJlbWFpbCI6InBlcm1pdDFAeW9wbWFpbC5jb20iLCJyZW1lbWJlcl90b2tlbiI6bnVsbCwic3RhdHVzIjoxfSwiaWF0IjoxNzA1OTMxODA0LCJleHAiOjE3MDYwMzk4MDQsImp0aSI6InVRYVQ0bUxQdWMifQ.kU47P3PzBBqW9Rgd3U9DK_cyA2YPFR-Y7X50dYF_uv4',
          'sec-ch-ua-platform': '"Windows"',
          origin: 'https://tr-license.most.gov.bd',
          'sec-fetch-site': 'same-site',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        },
      })

      response = http.options(
        'https://tr-gateway.most.gov.bd/license/class-c-license-application/77',
        null,
        {
          headers: {
            accept: '*/*',
            'access-control-request-method': 'GET',
            'access-control-request-headers': 'authorization',
            origin: 'https://tr-license.most.gov.bd',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-site',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.get(
        'https://tr-gateway.most.gov.bd/license/fee-information/get-license-fee/7/57',
        {
          headers: {
            'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
            accept: 'application/json',
            'sec-ch-ua-mobile': '?0',
            authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjE2NjgsInV1aWQiOiJmMmEzZjlkMy0zMGE4LTQyZmItYWIxMi1iODY5MDMzYTJiMjEiLCJvcmdhbml6YXRpb25faWQiOm51bGwsIm9yZ2Fub2dyYW1faWQiOm51bGwsIm9yZ2FuaXphdGlvbl9zaG9ydF9uYW1lIjoiIiwib3JnYW5pemF0aW9uX25hbWVfZW4iOiIiLCJvcmdhbml6YXRpb25fbmFtZV9ibiI6IiIsInJvbGVfaWQiOm51bGwsInJvbGVfY29kZSI6bnVsbCwicHJvZmlsZV90eXBlIjpudWxsLCJwcm9maWxlX2lkIjpudWxsLCJuYW1lIjoiTXIuQWJkdWxsYWgiLCJ1c2VyX3R5cGUiOiJTRVJWSUNFX1JFQ0lQSUVOVCIsImNvbXBhbnlfbmFtZSI6bnVsbCwibW9iaWxlIjpudWxsLCJlbWFpbCI6InBlcm1pdDFAeW9wbWFpbC5jb20iLCJyZW1lbWJlcl90b2tlbiI6bnVsbCwic3RhdHVzIjoxfSwiaWF0IjoxNzA1OTMxODA0LCJleHAiOjE3MDYwMzk4MDQsImp0aSI6InVRYVQ0bUxQdWMifQ.kU47P3PzBBqW9Rgd3U9DK_cyA2YPFR-Y7X50dYF_uv4',
            'sec-ch-ua-platform': '"Windows"',
            origin: 'https://tr-license.most.gov.bd',
            'sec-fetch-site': 'same-site',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.options(
        'https://tr-gateway.most.gov.bd/license/fee-information/get-license-fee/7/57',
        null,
        {
          headers: {
            accept: '*/*',
            'access-control-request-method': 'GET',
            'access-control-request-headers': 'authorization',
            origin: 'https://tr-license.most.gov.bd',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-site',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.get('https://tr-gateway.most.gov.bd/license/class-c-license-application/77', {
        headers: {
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          accept: 'application/json',
          'sec-ch-ua-mobile': '?0',
          authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjE2NjgsInV1aWQiOiJmMmEzZjlkMy0zMGE4LTQyZmItYWIxMi1iODY5MDMzYTJiMjEiLCJvcmdhbml6YXRpb25faWQiOm51bGwsIm9yZ2Fub2dyYW1faWQiOm51bGwsIm9yZ2FuaXphdGlvbl9zaG9ydF9uYW1lIjoiIiwib3JnYW5pemF0aW9uX25hbWVfZW4iOiIiLCJvcmdhbml6YXRpb25fbmFtZV9ibiI6IiIsInJvbGVfaWQiOm51bGwsInJvbGVfY29kZSI6bnVsbCwicHJvZmlsZV90eXBlIjpudWxsLCJwcm9maWxlX2lkIjpudWxsLCJuYW1lIjoiTXIuQWJkdWxsYWgiLCJ1c2VyX3R5cGUiOiJTRVJWSUNFX1JFQ0lQSUVOVCIsImNvbXBhbnlfbmFtZSI6bnVsbCwibW9iaWxlIjpudWxsLCJlbWFpbCI6InBlcm1pdDFAeW9wbWFpbC5jb20iLCJyZW1lbWJlcl90b2tlbiI6bnVsbCwic3RhdHVzIjoxfSwiaWF0IjoxNzA1OTMxODA0LCJleHAiOjE3MDYwMzk4MDQsImp0aSI6InVRYVQ0bUxQdWMifQ.kU47P3PzBBqW9Rgd3U9DK_cyA2YPFR-Y7X50dYF_uv4',
          'sec-ch-ua-platform': '"Windows"',
          origin: 'https://tr-license.most.gov.bd',
          'sec-fetch-site': 'same-site',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        },
      })

      response = http.options(
        'https://tr-gateway.most.gov.bd/license/class-c-license-application/77',
        null,
        {
          headers: {
            accept: '*/*',
            'access-control-request-method': 'GET',
            'access-control-request-headers': 'authorization',
            origin: 'https://tr-license.most.gov.bd',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-site',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )
      sleep(2.1)
    }
  )

  group(
    'page_6 - https://tr-accounts.most.gov.bd/my-account/en/license/application-list',
    function () {
      response = http.get(
        'https://tr-accounts.most.gov.bd/my-account/en/license/application-list',
        {
          headers: {
            'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'upgrade-insecure-requests': '1',
            accept:
              'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
            'sec-fetch-site': 'same-site',
            'sec-fetch-mode': 'navigate',
            'sec-fetch-user': '?1',
            'sec-fetch-dest': 'document',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.get(
        'https://tr-socket.most.gov.bd/socket.io/?EIO=4&transport=polling&t=OqnUy-N',
        {
          headers: {
            'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
            accept: '*/*',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            origin: 'https://tr-accounts.most.gov.bd',
            'sec-fetch-site': 'same-site',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.get('https://tr-gateway.most.gov.bd/core/option/load', {
        headers: {
          'x-client-secret': '9a169F9B0F4f4350Ad1a430ce4F9d215',
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'x-app-identifier': 'UserPanelUI',
          'sec-ch-ua-mobile': '?0',
          authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjE2NjgsInV1aWQiOiJmMmEzZjlkMy0zMGE4LTQyZmItYWIxMi1iODY5MDMzYTJiMjEiLCJvcmdhbml6YXRpb25faWQiOm51bGwsIm9yZ2Fub2dyYW1faWQiOm51bGwsIm9yZ2FuaXphdGlvbl9zaG9ydF9uYW1lIjoiIiwib3JnYW5pemF0aW9uX25hbWVfZW4iOiIiLCJvcmdhbml6YXRpb25fbmFtZV9ibiI6IiIsInJvbGVfaWQiOm51bGwsInJvbGVfY29kZSI6bnVsbCwicHJvZmlsZV90eXBlIjpudWxsLCJwcm9maWxlX2lkIjpudWxsLCJuYW1lIjoiTXIuQWJkdWxsYWgiLCJ1c2VyX3R5cGUiOiJTRVJWSUNFX1JFQ0lQSUVOVCIsImNvbXBhbnlfbmFtZSI6bnVsbCwibW9iaWxlIjpudWxsLCJlbWFpbCI6InBlcm1pdDFAeW9wbWFpbC5jb20iLCJyZW1lbWJlcl90b2tlbiI6bnVsbCwic3RhdHVzIjoxfSwiaWF0IjoxNzA1OTMxODA0LCJleHAiOjE3MDYwMzk4MDQsImp0aSI6InVRYVQ0bUxQdWMifQ.kU47P3PzBBqW9Rgd3U9DK_cyA2YPFR-Y7X50dYF_uv4',
          accept: 'application/json',
          'x-client-id': '95b4b010fde64b1aace9d46f3c1880d5',
          'sec-ch-ua-platform': '"Windows"',
          origin: 'https://tr-accounts.most.gov.bd',
          'sec-fetch-site': 'same-site',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        },
      })

      response = http.options('https://tr-gateway.most.gov.bd/core/option/load', null, {
        headers: {
          accept: '*/*',
          'access-control-request-method': 'GET',
          'access-control-request-headers':
            'authorization,x-app-identifier,x-client-id,x-client-secret',
          origin: 'https://tr-accounts.most.gov.bd',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-site',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        },
      })

      response = http.get('https://tr-services.most.gov.bd/post_message_to_frame_owner.html', {
        headers: {
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          'upgrade-insecure-requests': '1',
          accept:
            'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
          'sec-fetch-site': 'same-site',
          'sec-fetch-mode': 'navigate',
          'sec-fetch-dest': 'iframe',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        },
      })

      response = http.get(
        'https://tr-gateway.most.gov.bd/core/location/dropdown?$select=id,name_en,name_bn,parent_location_id,location_type_id,country_id,division_id,district_id,status&$filter=location_type_id+IN(%27COUNTRY%27,+%27DIVISION%27,+%27DISTRICT%27,+%27THANA%27)&$orderby=name_en+asc',
        {
          headers: {
            'x-client-secret': '9a169F9B0F4f4350Ad1a430ce4F9d215',
            'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
            'x-app-identifier': 'UserPanelUI',
            'sec-ch-ua-mobile': '?0',
            authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjE2NjgsInV1aWQiOiJmMmEzZjlkMy0zMGE4LTQyZmItYWIxMi1iODY5MDMzYTJiMjEiLCJvcmdhbml6YXRpb25faWQiOm51bGwsIm9yZ2Fub2dyYW1faWQiOm51bGwsIm9yZ2FuaXphdGlvbl9zaG9ydF9uYW1lIjoiIiwib3JnYW5pemF0aW9uX25hbWVfZW4iOiIiLCJvcmdhbml6YXRpb25fbmFtZV9ibiI6IiIsInJvbGVfaWQiOm51bGwsInJvbGVfY29kZSI6bnVsbCwicHJvZmlsZV90eXBlIjpudWxsLCJwcm9maWxlX2lkIjpudWxsLCJuYW1lIjoiTXIuQWJkdWxsYWgiLCJ1c2VyX3R5cGUiOiJTRVJWSUNFX1JFQ0lQSUVOVCIsImNvbXBhbnlfbmFtZSI6bnVsbCwibW9iaWxlIjpudWxsLCJlbWFpbCI6InBlcm1pdDFAeW9wbWFpbC5jb20iLCJyZW1lbWJlcl90b2tlbiI6bnVsbCwic3RhdHVzIjoxfSwiaWF0IjoxNzA1OTMxODA0LCJleHAiOjE3MDYwMzk4MDQsImp0aSI6InVRYVQ0bUxQdWMifQ.kU47P3PzBBqW9Rgd3U9DK_cyA2YPFR-Y7X50dYF_uv4',
            accept: 'application/json',
            'x-client-id': '95b4b010fde64b1aace9d46f3c1880d5',
            'sec-ch-ua-platform': '"Windows"',
            origin: 'https://tr-accounts.most.gov.bd',
            'sec-fetch-site': 'same-site',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.options(
        'https://tr-gateway.most.gov.bd/core/location/dropdown?$select=id,name_en,name_bn,parent_location_id,location_type_id,country_id,division_id,district_id,status&$filter=location_type_id+IN(%27COUNTRY%27,+%27DIVISION%27,+%27DISTRICT%27,+%27THANA%27)&$orderby=name_en+asc',
        null,
        {
          headers: {
            accept: '*/*',
            'access-control-request-method': 'GET',
            'access-control-request-headers':
              'authorization,x-app-identifier,x-client-id,x-client-secret',
            origin: 'https://tr-accounts.most.gov.bd',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-site',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.post('https://tr-gateway.most.gov.bd/auth/oauth/load-auth-state', '{}', {
        headers: {
          'x-client-secret': '9a169F9B0F4f4350Ad1a430ce4F9d215',
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'x-app-identifier': 'UserPanelUI',
          'sec-ch-ua-mobile': '?0',
          authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjE2NjgsInV1aWQiOiJmMmEzZjlkMy0zMGE4LTQyZmItYWIxMi1iODY5MDMzYTJiMjEiLCJvcmdhbml6YXRpb25faWQiOm51bGwsIm9yZ2Fub2dyYW1faWQiOm51bGwsIm9yZ2FuaXphdGlvbl9zaG9ydF9uYW1lIjoiIiwib3JnYW5pemF0aW9uX25hbWVfZW4iOiIiLCJvcmdhbml6YXRpb25fbmFtZV9ibiI6IiIsInJvbGVfaWQiOm51bGwsInJvbGVfY29kZSI6bnVsbCwicHJvZmlsZV90eXBlIjpudWxsLCJwcm9maWxlX2lkIjpudWxsLCJuYW1lIjoiTXIuQWJkdWxsYWgiLCJ1c2VyX3R5cGUiOiJTRVJWSUNFX1JFQ0lQSUVOVCIsImNvbXBhbnlfbmFtZSI6bnVsbCwibW9iaWxlIjpudWxsLCJlbWFpbCI6InBlcm1pdDFAeW9wbWFpbC5jb20iLCJyZW1lbWJlcl90b2tlbiI6bnVsbCwic3RhdHVzIjoxfSwiaWF0IjoxNzA1OTMxODA0LCJleHAiOjE3MDYwMzk4MDQsImp0aSI6InVRYVQ0bUxQdWMifQ.kU47P3PzBBqW9Rgd3U9DK_cyA2YPFR-Y7X50dYF_uv4',
          'content-type': 'application/json',
          accept: 'application/json',
          'x-client-id': '95b4b010fde64b1aace9d46f3c1880d5',
          'sec-ch-ua-platform': '"Windows"',
          origin: 'https://tr-accounts.most.gov.bd',
          'sec-fetch-site': 'same-site',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        },
      })

      response = http.options('https://tr-gateway.most.gov.bd/auth/oauth/load-auth-state', null, {
        headers: {
          accept: '*/*',
          'access-control-request-method': 'POST',
          'access-control-request-headers':
            'authorization,content-type,x-app-identifier,x-client-id,x-client-secret',
          origin: 'https://tr-accounts.most.gov.bd',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-site',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        },
      })

      response = http.post(
        'https://tr-socket.most.gov.bd/socket.io/?EIO=4&transport=polling&t=OqnUz2t&sid=IgY43-Q1hSk62YT2ALXn',
        '40',
        {
          headers: {
            'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
            accept: '*/*',
            'content-type': 'text/plain; charset=UTF-8',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            origin: 'https://tr-accounts.most.gov.bd',
            'sec-fetch-site': 'same-site',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.get(
        'https://tr-socket.most.gov.bd/socket.io/?EIO=4&transport=polling&t=OqnUz2v&sid=IgY43-Q1hSk62YT2ALXn',
        {
          headers: {
            'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
            accept: '*/*',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            origin: 'https://tr-accounts.most.gov.bd',
            'sec-fetch-site': 'same-site',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.get(
        'https://tr-socket.most.gov.bd/socket.io/?EIO=4&transport=polling&t=OqnUz3R&sid=IgY43-Q1hSk62YT2ALXn',
        {
          headers: {
            'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
            accept: '*/*',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            origin: 'https://tr-accounts.most.gov.bd',
            'sec-fetch-site': 'same-site',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.post(
        'https://tr-gateway.most.gov.bd/auth/oauth/load-user-scopes',
        '{"user_id":1668}',
        {
          headers: {
            'x-client-secret': '9a169F9B0F4f4350Ad1a430ce4F9d215',
            'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
            'x-app-identifier': 'UserPanelUI',
            'sec-ch-ua-mobile': '?0',
            authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjE2NjgsInV1aWQiOiJmMmEzZjlkMy0zMGE4LTQyZmItYWIxMi1iODY5MDMzYTJiMjEiLCJvcmdhbml6YXRpb25faWQiOm51bGwsIm9yZ2Fub2dyYW1faWQiOm51bGwsIm9yZ2FuaXphdGlvbl9zaG9ydF9uYW1lIjoiIiwib3JnYW5pemF0aW9uX25hbWVfZW4iOiIiLCJvcmdhbml6YXRpb25fbmFtZV9ibiI6IiIsInJvbGVfaWQiOm51bGwsInJvbGVfY29kZSI6bnVsbCwicHJvZmlsZV90eXBlIjpudWxsLCJwcm9maWxlX2lkIjpudWxsLCJuYW1lIjoiTXIuQWJkdWxsYWgiLCJ1c2VyX3R5cGUiOiJTRVJWSUNFX1JFQ0lQSUVOVCIsImNvbXBhbnlfbmFtZSI6bnVsbCwibW9iaWxlIjpudWxsLCJlbWFpbCI6InBlcm1pdDFAeW9wbWFpbC5jb20iLCJyZW1lbWJlcl90b2tlbiI6bnVsbCwic3RhdHVzIjoxfSwiaWF0IjoxNzA1OTMxODA0LCJleHAiOjE3MDYwMzk4MDQsImp0aSI6InVRYVQ0bUxQdWMifQ.kU47P3PzBBqW9Rgd3U9DK_cyA2YPFR-Y7X50dYF_uv4',
            'content-type': 'application/json',
            accept: 'application/json',
            'x-client-id': '95b4b010fde64b1aace9d46f3c1880d5',
            'sec-ch-ua-platform': '"Windows"',
            origin: 'https://tr-accounts.most.gov.bd',
            'sec-fetch-site': 'same-site',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.get('https://tr-gateway.most.gov.bd/grant/committee/committeeMember/1668', {
        headers: {
          'x-client-secret': '9a169F9B0F4f4350Ad1a430ce4F9d215',
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'x-app-identifier': 'UserPanelUI',
          'sec-ch-ua-mobile': '?0',
          authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjE2NjgsInV1aWQiOiJmMmEzZjlkMy0zMGE4LTQyZmItYWIxMi1iODY5MDMzYTJiMjEiLCJvcmdhbml6YXRpb25faWQiOm51bGwsIm9yZ2Fub2dyYW1faWQiOm51bGwsIm9yZ2FuaXphdGlvbl9zaG9ydF9uYW1lIjoiIiwib3JnYW5pemF0aW9uX25hbWVfZW4iOiIiLCJvcmdhbml6YXRpb25fbmFtZV9ibiI6IiIsInJvbGVfaWQiOm51bGwsInJvbGVfY29kZSI6bnVsbCwicHJvZmlsZV90eXBlIjpudWxsLCJwcm9maWxlX2lkIjpudWxsLCJuYW1lIjoiTXIuQWJkdWxsYWgiLCJ1c2VyX3R5cGUiOiJTRVJWSUNFX1JFQ0lQSUVOVCIsImNvbXBhbnlfbmFtZSI6bnVsbCwibW9iaWxlIjpudWxsLCJlbWFpbCI6InBlcm1pdDFAeW9wbWFpbC5jb20iLCJyZW1lbWJlcl90b2tlbiI6bnVsbCwic3RhdHVzIjoxfSwiaWF0IjoxNzA1OTMxODA0LCJleHAiOjE3MDYwMzk4MDQsImp0aSI6InVRYVQ0bUxQdWMifQ.kU47P3PzBBqW9Rgd3U9DK_cyA2YPFR-Y7X50dYF_uv4',
          accept: 'application/json',
          'x-client-id': '95b4b010fde64b1aace9d46f3c1880d5',
          'sec-ch-ua-platform': '"Windows"',
          origin: 'https://tr-accounts.most.gov.bd',
          'sec-fetch-site': 'same-site',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        },
      })

      response = http.options('https://tr-gateway.most.gov.bd/auth/oauth/load-user-scopes', null, {
        headers: {
          accept: '*/*',
          'access-control-request-method': 'POST',
          'access-control-request-headers':
            'authorization,content-type,x-app-identifier,x-client-id,x-client-secret',
          origin: 'https://tr-accounts.most.gov.bd',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-site',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        },
      })

      response = http.options(
        'https://tr-gateway.most.gov.bd/grant/committee/committeeMember/1668',
        null,
        {
          headers: {
            accept: '*/*',
            'access-control-request-method': 'GET',
            'access-control-request-headers':
              'authorization,x-app-identifier,x-client-id,x-client-secret',
            origin: 'https://tr-accounts.most.gov.bd',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-site',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.get('https://tr-gateway.most.gov.bd/auth/institute-head/user/1668', {
        headers: {
          'x-client-secret': '9a169F9B0F4f4350Ad1a430ce4F9d215',
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'x-app-identifier': 'UserPanelUI',
          'sec-ch-ua-mobile': '?0',
          authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjE2NjgsInV1aWQiOiJmMmEzZjlkMy0zMGE4LTQyZmItYWIxMi1iODY5MDMzYTJiMjEiLCJvcmdhbml6YXRpb25faWQiOm51bGwsIm9yZ2Fub2dyYW1faWQiOm51bGwsIm9yZ2FuaXphdGlvbl9zaG9ydF9uYW1lIjoiIiwib3JnYW5pemF0aW9uX25hbWVfZW4iOiIiLCJvcmdhbml6YXRpb25fbmFtZV9ibiI6IiIsInJvbGVfaWQiOm51bGwsInJvbGVfY29kZSI6bnVsbCwicHJvZmlsZV90eXBlIjpudWxsLCJwcm9maWxlX2lkIjpudWxsLCJuYW1lIjoiTXIuQWJkdWxsYWgiLCJ1c2VyX3R5cGUiOiJTRVJWSUNFX1JFQ0lQSUVOVCIsImNvbXBhbnlfbmFtZSI6bnVsbCwibW9iaWxlIjpudWxsLCJlbWFpbCI6InBlcm1pdDFAeW9wbWFpbC5jb20iLCJyZW1lbWJlcl90b2tlbiI6bnVsbCwic3RhdHVzIjoxfSwiaWF0IjoxNzA1OTMxODA0LCJleHAiOjE3MDYwMzk4MDQsImp0aSI6InVRYVQ0bUxQdWMifQ.kU47P3PzBBqW9Rgd3U9DK_cyA2YPFR-Y7X50dYF_uv4',
          accept: 'application/json',
          'x-client-id': '95b4b010fde64b1aace9d46f3c1880d5',
          'sec-ch-ua-platform': '"Windows"',
          origin: 'https://tr-accounts.most.gov.bd',
          'sec-fetch-site': 'same-site',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        },
      })

      response = http.get(
        'https://tr-gateway.most.gov.bd/library/library-setup/getLibraryInfoByMemberUserId?$memberUserId=1668',
        {
          headers: {
            'x-client-secret': '9a169F9B0F4f4350Ad1a430ce4F9d215',
            'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
            'x-app-identifier': 'UserPanelUI',
            'sec-ch-ua-mobile': '?0',
            authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjE2NjgsInV1aWQiOiJmMmEzZjlkMy0zMGE4LTQyZmItYWIxMi1iODY5MDMzYTJiMjEiLCJvcmdhbml6YXRpb25faWQiOm51bGwsIm9yZ2Fub2dyYW1faWQiOm51bGwsIm9yZ2FuaXphdGlvbl9zaG9ydF9uYW1lIjoiIiwib3JnYW5pemF0aW9uX25hbWVfZW4iOiIiLCJvcmdhbml6YXRpb25fbmFtZV9ibiI6IiIsInJvbGVfaWQiOm51bGwsInJvbGVfY29kZSI6bnVsbCwicHJvZmlsZV90eXBlIjpudWxsLCJwcm9maWxlX2lkIjpudWxsLCJuYW1lIjoiTXIuQWJkdWxsYWgiLCJ1c2VyX3R5cGUiOiJTRVJWSUNFX1JFQ0lQSUVOVCIsImNvbXBhbnlfbmFtZSI6bnVsbCwibW9iaWxlIjpudWxsLCJlbWFpbCI6InBlcm1pdDFAeW9wbWFpbC5jb20iLCJyZW1lbWJlcl90b2tlbiI6bnVsbCwic3RhdHVzIjoxfSwiaWF0IjoxNzA1OTMxODA0LCJleHAiOjE3MDYwMzk4MDQsImp0aSI6InVRYVQ0bUxQdWMifQ.kU47P3PzBBqW9Rgd3U9DK_cyA2YPFR-Y7X50dYF_uv4',
            accept: 'application/json',
            'x-client-id': '95b4b010fde64b1aace9d46f3c1880d5',
            'sec-ch-ua-platform': '"Windows"',
            origin: 'https://tr-accounts.most.gov.bd',
            'sec-fetch-site': 'same-site',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.options(
        'https://tr-gateway.most.gov.bd/auth/institute-head/user/1668',
        null,
        {
          headers: {
            accept: '*/*',
            'access-control-request-method': 'GET',
            'access-control-request-headers':
              'authorization,x-app-identifier,x-client-id,x-client-secret',
            origin: 'https://tr-accounts.most.gov.bd',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-site',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.options(
        'https://tr-gateway.most.gov.bd/library/library-setup/getLibraryInfoByMemberUserId?$memberUserId=1668',
        null,
        {
          headers: {
            accept: '*/*',
            'access-control-request-method': 'GET',
            'access-control-request-headers':
              'authorization,x-app-identifier,x-client-id,x-client-secret',
            origin: 'https://tr-accounts.most.gov.bd',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-site',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.get('https://tr-gateway.most.gov.bd/util/notification/count-badge/1668', {
        headers: {
          'x-client-secret': '9a169F9B0F4f4350Ad1a430ce4F9d215',
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'x-app-identifier': 'UserPanelUI',
          'sec-ch-ua-mobile': '?0',
          authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjE2NjgsInV1aWQiOiJmMmEzZjlkMy0zMGE4LTQyZmItYWIxMi1iODY5MDMzYTJiMjEiLCJvcmdhbml6YXRpb25faWQiOm51bGwsIm9yZ2Fub2dyYW1faWQiOm51bGwsIm9yZ2FuaXphdGlvbl9zaG9ydF9uYW1lIjoiIiwib3JnYW5pemF0aW9uX25hbWVfZW4iOiIiLCJvcmdhbml6YXRpb25fbmFtZV9ibiI6IiIsInJvbGVfaWQiOm51bGwsInJvbGVfY29kZSI6bnVsbCwicHJvZmlsZV90eXBlIjpudWxsLCJwcm9maWxlX2lkIjpudWxsLCJuYW1lIjoiTXIuQWJkdWxsYWgiLCJ1c2VyX3R5cGUiOiJTRVJWSUNFX1JFQ0lQSUVOVCIsImNvbXBhbnlfbmFtZSI6bnVsbCwibW9iaWxlIjpudWxsLCJlbWFpbCI6InBlcm1pdDFAeW9wbWFpbC5jb20iLCJyZW1lbWJlcl90b2tlbiI6bnVsbCwic3RhdHVzIjoxfSwiaWF0IjoxNzA1OTMxODA0LCJleHAiOjE3MDYwMzk4MDQsImp0aSI6InVRYVQ0bUxQdWMifQ.kU47P3PzBBqW9Rgd3U9DK_cyA2YPFR-Y7X50dYF_uv4',
          accept: 'application/json',
          'x-client-id': '95b4b010fde64b1aace9d46f3c1880d5',
          'sec-ch-ua-platform': '"Windows"',
          origin: 'https://tr-accounts.most.gov.bd',
          'sec-fetch-site': 'same-site',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        },
      })

      response = http.options(
        'https://tr-gateway.most.gov.bd/util/notification/count-badge/1668',
        null,
        {
          headers: {
            accept: '*/*',
            'access-control-request-method': 'GET',
            'access-control-request-headers':
              'authorization,x-app-identifier,x-client-id,x-client-secret',
            origin: 'https://tr-accounts.most.gov.bd',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-site',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.get(
        'https://tr-gateway.most.gov.bd/util/notification?$search=&$filter=receiver_id+eq+1668&$orderby=id+desc&$top=10',
        {
          headers: {
            'x-client-secret': '9a169F9B0F4f4350Ad1a430ce4F9d215',
            'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
            'x-app-identifier': 'UserPanelUI',
            'sec-ch-ua-mobile': '?0',
            authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjE2NjgsInV1aWQiOiJmMmEzZjlkMy0zMGE4LTQyZmItYWIxMi1iODY5MDMzYTJiMjEiLCJvcmdhbml6YXRpb25faWQiOm51bGwsIm9yZ2Fub2dyYW1faWQiOm51bGwsIm9yZ2FuaXphdGlvbl9zaG9ydF9uYW1lIjoiIiwib3JnYW5pemF0aW9uX25hbWVfZW4iOiIiLCJvcmdhbml6YXRpb25fbmFtZV9ibiI6IiIsInJvbGVfaWQiOm51bGwsInJvbGVfY29kZSI6bnVsbCwicHJvZmlsZV90eXBlIjpudWxsLCJwcm9maWxlX2lkIjpudWxsLCJuYW1lIjoiTXIuQWJkdWxsYWgiLCJ1c2VyX3R5cGUiOiJTRVJWSUNFX1JFQ0lQSUVOVCIsImNvbXBhbnlfbmFtZSI6bnVsbCwibW9iaWxlIjpudWxsLCJlbWFpbCI6InBlcm1pdDFAeW9wbWFpbC5jb20iLCJyZW1lbWJlcl90b2tlbiI6bnVsbCwic3RhdHVzIjoxfSwiaWF0IjoxNzA1OTMxODA0LCJleHAiOjE3MDYwMzk4MDQsImp0aSI6InVRYVQ0bUxQdWMifQ.kU47P3PzBBqW9Rgd3U9DK_cyA2YPFR-Y7X50dYF_uv4',
            accept: 'application/json',
            'x-client-id': '95b4b010fde64b1aace9d46f3c1880d5',
            'sec-ch-ua-platform': '"Windows"',
            origin: 'https://tr-accounts.most.gov.bd',
            'sec-fetch-site': 'same-site',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.options(
        'https://tr-gateway.most.gov.bd/util/notification?$search=&$filter=receiver_id+eq+1668&$orderby=id+desc&$top=10',
        null,
        {
          headers: {
            accept: '*/*',
            'access-control-request-method': 'GET',
            'access-control-request-headers':
              'authorization,x-app-identifier,x-client-id,x-client-secret',
            origin: 'https://tr-accounts.most.gov.bd',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-site',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.get(
        'https://tr-gateway.most.gov.bd/core/component/dropdown?$select=id,name_en,name_bn,key,status&$orderby=sort_order+asc',
        {
          headers: {
            'x-client-secret': '9a169F9B0F4f4350Ad1a430ce4F9d215',
            'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
            'x-app-identifier': 'UserPanelUI',
            'sec-ch-ua-mobile': '?0',
            authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjE2NjgsInV1aWQiOiJmMmEzZjlkMy0zMGE4LTQyZmItYWIxMi1iODY5MDMzYTJiMjEiLCJvcmdhbml6YXRpb25faWQiOm51bGwsIm9yZ2Fub2dyYW1faWQiOm51bGwsIm9yZ2FuaXphdGlvbl9zaG9ydF9uYW1lIjoiIiwib3JnYW5pemF0aW9uX25hbWVfZW4iOiIiLCJvcmdhbml6YXRpb25fbmFtZV9ibiI6IiIsInJvbGVfaWQiOm51bGwsInJvbGVfY29kZSI6bnVsbCwicHJvZmlsZV90eXBlIjpudWxsLCJwcm9maWxlX2lkIjpudWxsLCJuYW1lIjoiTXIuQWJkdWxsYWgiLCJ1c2VyX3R5cGUiOiJTRVJWSUNFX1JFQ0lQSUVOVCIsImNvbXBhbnlfbmFtZSI6bnVsbCwibW9iaWxlIjpudWxsLCJlbWFpbCI6InBlcm1pdDFAeW9wbWFpbC5jb20iLCJyZW1lbWJlcl90b2tlbiI6bnVsbCwic3RhdHVzIjoxfSwiaWF0IjoxNzA1OTMxODA0LCJleHAiOjE3MDYwMzk4MDQsImp0aSI6InVRYVQ0bUxQdWMifQ.kU47P3PzBBqW9Rgd3U9DK_cyA2YPFR-Y7X50dYF_uv4',
            accept: 'application/json',
            'x-client-id': '95b4b010fde64b1aace9d46f3c1880d5',
            'sec-ch-ua-platform': '"Windows"',
            origin: 'https://tr-accounts.most.gov.bd',
            'sec-fetch-site': 'same-site',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.options(
        'https://tr-gateway.most.gov.bd/core/component/dropdown?$select=id,name_en,name_bn,key,status&$orderby=sort_order+asc',
        null,
        {
          headers: {
            accept: '*/*',
            'access-control-request-method': 'GET',
            'access-control-request-headers':
              'authorization,x-app-identifier,x-client-id,x-client-secret',
            origin: 'https://tr-accounts.most.gov.bd',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-site',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.post(
        'https://tr-gateway.most.gov.bd/license/user-panel/summary/availed-services',
        '{}',
        {
          headers: {
            'x-client-secret': '9a169F9B0F4f4350Ad1a430ce4F9d215',
            'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
            'x-app-identifier': 'UserPanelUI',
            'sec-ch-ua-mobile': '?0',
            authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjE2NjgsInV1aWQiOiJmMmEzZjlkMy0zMGE4LTQyZmItYWIxMi1iODY5MDMzYTJiMjEiLCJvcmdhbml6YXRpb25faWQiOm51bGwsIm9yZ2Fub2dyYW1faWQiOm51bGwsIm9yZ2FuaXphdGlvbl9zaG9ydF9uYW1lIjoiIiwib3JnYW5pemF0aW9uX25hbWVfZW4iOiIiLCJvcmdhbml6YXRpb25fbmFtZV9ibiI6IiIsInJvbGVfaWQiOm51bGwsInJvbGVfY29kZSI6bnVsbCwicHJvZmlsZV90eXBlIjpudWxsLCJwcm9maWxlX2lkIjpudWxsLCJuYW1lIjoiTXIuQWJkdWxsYWgiLCJ1c2VyX3R5cGUiOiJTRVJWSUNFX1JFQ0lQSUVOVCIsImNvbXBhbnlfbmFtZSI6bnVsbCwibW9iaWxlIjpudWxsLCJlbWFpbCI6InBlcm1pdDFAeW9wbWFpbC5jb20iLCJyZW1lbWJlcl90b2tlbiI6bnVsbCwic3RhdHVzIjoxfSwiaWF0IjoxNzA1OTMxODA0LCJleHAiOjE3MDYwMzk4MDQsImp0aSI6InVRYVQ0bUxQdWMifQ.kU47P3PzBBqW9Rgd3U9DK_cyA2YPFR-Y7X50dYF_uv4',
            'content-type': 'application/json',
            accept: 'application/json',
            'x-client-id': '95b4b010fde64b1aace9d46f3c1880d5',
            'sec-ch-ua-platform': '"Windows"',
            origin: 'https://tr-accounts.most.gov.bd',
            'sec-fetch-site': 'same-site',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.options(
        'https://tr-gateway.most.gov.bd/license/user-panel/summary/availed-services',
        null,
        {
          headers: {
            accept: '*/*',
            'access-control-request-method': 'POST',
            'access-control-request-headers':
              'authorization,content-type,x-app-identifier,x-client-id,x-client-secret',
            origin: 'https://tr-accounts.most.gov.bd',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-site',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.get(
        'https://tr-gateway.most.gov.bd/license/user-panel/license-permit/expiring-soon/1668',
        {
          headers: {
            'x-client-secret': '9a169F9B0F4f4350Ad1a430ce4F9d215',
            'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
            'x-app-identifier': 'UserPanelUI',
            'sec-ch-ua-mobile': '?0',
            authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjE2NjgsInV1aWQiOiJmMmEzZjlkMy0zMGE4LTQyZmItYWIxMi1iODY5MDMzYTJiMjEiLCJvcmdhbml6YXRpb25faWQiOm51bGwsIm9yZ2Fub2dyYW1faWQiOm51bGwsIm9yZ2FuaXphdGlvbl9zaG9ydF9uYW1lIjoiIiwib3JnYW5pemF0aW9uX25hbWVfZW4iOiIiLCJvcmdhbml6YXRpb25fbmFtZV9ibiI6IiIsInJvbGVfaWQiOm51bGwsInJvbGVfY29kZSI6bnVsbCwicHJvZmlsZV90eXBlIjpudWxsLCJwcm9maWxlX2lkIjpudWxsLCJuYW1lIjoiTXIuQWJkdWxsYWgiLCJ1c2VyX3R5cGUiOiJTRVJWSUNFX1JFQ0lQSUVOVCIsImNvbXBhbnlfbmFtZSI6bnVsbCwibW9iaWxlIjpudWxsLCJlbWFpbCI6InBlcm1pdDFAeW9wbWFpbC5jb20iLCJyZW1lbWJlcl90b2tlbiI6bnVsbCwic3RhdHVzIjoxfSwiaWF0IjoxNzA1OTMxODA0LCJleHAiOjE3MDYwMzk4MDQsImp0aSI6InVRYVQ0bUxQdWMifQ.kU47P3PzBBqW9Rgd3U9DK_cyA2YPFR-Y7X50dYF_uv4',
            accept: 'application/json',
            'x-client-id': '95b4b010fde64b1aace9d46f3c1880d5',
            'sec-ch-ua-platform': '"Windows"',
            origin: 'https://tr-accounts.most.gov.bd',
            'sec-fetch-site': 'same-site',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.options(
        'https://tr-gateway.most.gov.bd/license/user-panel/license-permit/expiring-soon/1668',
        null,
        {
          headers: {
            accept: '*/*',
            'access-control-request-method': 'GET',
            'access-control-request-headers':
              'authorization,x-app-identifier,x-client-id,x-client-secret',
            origin: 'https://tr-accounts.most.gov.bd',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-site',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.post(
        'https://tr-gateway.most.gov.bd/license/user-panel/summary/application-tracking',
        '{}',
        {
          headers: {
            'x-client-secret': '9a169F9B0F4f4350Ad1a430ce4F9d215',
            'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
            'x-app-identifier': 'UserPanelUI',
            'sec-ch-ua-mobile': '?0',
            authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjE2NjgsInV1aWQiOiJmMmEzZjlkMy0zMGE4LTQyZmItYWIxMi1iODY5MDMzYTJiMjEiLCJvcmdhbml6YXRpb25faWQiOm51bGwsIm9yZ2Fub2dyYW1faWQiOm51bGwsIm9yZ2FuaXphdGlvbl9zaG9ydF9uYW1lIjoiIiwib3JnYW5pemF0aW9uX25hbWVfZW4iOiIiLCJvcmdhbml6YXRpb25fbmFtZV9ibiI6IiIsInJvbGVfaWQiOm51bGwsInJvbGVfY29kZSI6bnVsbCwicHJvZmlsZV90eXBlIjpudWxsLCJwcm9maWxlX2lkIjpudWxsLCJuYW1lIjoiTXIuQWJkdWxsYWgiLCJ1c2VyX3R5cGUiOiJTRVJWSUNFX1JFQ0lQSUVOVCIsImNvbXBhbnlfbmFtZSI6bnVsbCwibW9iaWxlIjpudWxsLCJlbWFpbCI6InBlcm1pdDFAeW9wbWFpbC5jb20iLCJyZW1lbWJlcl90b2tlbiI6bnVsbCwic3RhdHVzIjoxfSwiaWF0IjoxNzA1OTMxODA0LCJleHAiOjE3MDYwMzk4MDQsImp0aSI6InVRYVQ0bUxQdWMifQ.kU47P3PzBBqW9Rgd3U9DK_cyA2YPFR-Y7X50dYF_uv4',
            'content-type': 'application/json',
            accept: 'application/json',
            'x-client-id': '95b4b010fde64b1aace9d46f3c1880d5',
            'sec-ch-ua-platform': '"Windows"',
            origin: 'https://tr-accounts.most.gov.bd',
            'sec-fetch-site': 'same-site',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.options(
        'https://tr-gateway.most.gov.bd/license/user-panel/summary/application-tracking',
        null,
        {
          headers: {
            accept: '*/*',
            'access-control-request-method': 'POST',
            'access-control-request-headers':
              'authorization,content-type,x-app-identifier,x-client-id,x-client-secret',
            origin: 'https://tr-accounts.most.gov.bd',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-site',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.get(
        'https://tr-gateway.most.gov.bd/core/service-mapping/dropdown?$select=id,name_en,name_bn,status,organization_id,component_id,service_assignment_id,service_id,description_en,description_bn,icon,image,key,slug&$orderby=name_en+asc',
        {
          headers: {
            'x-client-secret': '9a169F9B0F4f4350Ad1a430ce4F9d215',
            'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
            'x-app-identifier': 'UserPanelUI',
            'sec-ch-ua-mobile': '?0',
            authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjE2NjgsInV1aWQiOiJmMmEzZjlkMy0zMGE4LTQyZmItYWIxMi1iODY5MDMzYTJiMjEiLCJvcmdhbml6YXRpb25faWQiOm51bGwsIm9yZ2Fub2dyYW1faWQiOm51bGwsIm9yZ2FuaXphdGlvbl9zaG9ydF9uYW1lIjoiIiwib3JnYW5pemF0aW9uX25hbWVfZW4iOiIiLCJvcmdhbml6YXRpb25fbmFtZV9ibiI6IiIsInJvbGVfaWQiOm51bGwsInJvbGVfY29kZSI6bnVsbCwicHJvZmlsZV90eXBlIjpudWxsLCJwcm9maWxlX2lkIjpudWxsLCJuYW1lIjoiTXIuQWJkdWxsYWgiLCJ1c2VyX3R5cGUiOiJTRVJWSUNFX1JFQ0lQSUVOVCIsImNvbXBhbnlfbmFtZSI6bnVsbCwibW9iaWxlIjpudWxsLCJlbWFpbCI6InBlcm1pdDFAeW9wbWFpbC5jb20iLCJyZW1lbWJlcl90b2tlbiI6bnVsbCwic3RhdHVzIjoxfSwiaWF0IjoxNzA1OTMxODA0LCJleHAiOjE3MDYwMzk4MDQsImp0aSI6InVRYVQ0bUxQdWMifQ.kU47P3PzBBqW9Rgd3U9DK_cyA2YPFR-Y7X50dYF_uv4',
            accept: 'application/json',
            'x-client-id': '95b4b010fde64b1aace9d46f3c1880d5',
            'sec-ch-ua-platform': '"Windows"',
            origin: 'https://tr-accounts.most.gov.bd',
            'sec-fetch-site': 'same-site',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.options(
        'https://tr-gateway.most.gov.bd/core/service-mapping/dropdown?$select=id,name_en,name_bn,status,organization_id,component_id,service_assignment_id,service_id,description_en,description_bn,icon,image,key,slug&$orderby=name_en+asc',
        null,
        {
          headers: {
            accept: '*/*',
            'access-control-request-method': 'GET',
            'access-control-request-headers':
              'authorization,x-app-identifier,x-client-id,x-client-secret',
            origin: 'https://tr-accounts.most.gov.bd',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-site',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.get(
        'https://tr-gateway.most.gov.bd/license/user-panel/application?$select=&$search=&$filter=&$queryParams=%7B%7D&$expand=&$orderby=id+desc&$top=10&$skip=0',
        {
          headers: {
            'x-client-secret': '9a169F9B0F4f4350Ad1a430ce4F9d215',
            'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
            'x-app-identifier': 'UserPanelUI',
            'sec-ch-ua-mobile': '?0',
            authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjE2NjgsInV1aWQiOiJmMmEzZjlkMy0zMGE4LTQyZmItYWIxMi1iODY5MDMzYTJiMjEiLCJvcmdhbml6YXRpb25faWQiOm51bGwsIm9yZ2Fub2dyYW1faWQiOm51bGwsIm9yZ2FuaXphdGlvbl9zaG9ydF9uYW1lIjoiIiwib3JnYW5pemF0aW9uX25hbWVfZW4iOiIiLCJvcmdhbml6YXRpb25fbmFtZV9ibiI6IiIsInJvbGVfaWQiOm51bGwsInJvbGVfY29kZSI6bnVsbCwicHJvZmlsZV90eXBlIjpudWxsLCJwcm9maWxlX2lkIjpudWxsLCJuYW1lIjoiTXIuQWJkdWxsYWgiLCJ1c2VyX3R5cGUiOiJTRVJWSUNFX1JFQ0lQSUVOVCIsImNvbXBhbnlfbmFtZSI6bnVsbCwibW9iaWxlIjpudWxsLCJlbWFpbCI6InBlcm1pdDFAeW9wbWFpbC5jb20iLCJyZW1lbWJlcl90b2tlbiI6bnVsbCwic3RhdHVzIjoxfSwiaWF0IjoxNzA1OTMxODA0LCJleHAiOjE3MDYwMzk4MDQsImp0aSI6InVRYVQ0bUxQdWMifQ.kU47P3PzBBqW9Rgd3U9DK_cyA2YPFR-Y7X50dYF_uv4',
            accept: 'application/json',
            'x-client-id': '95b4b010fde64b1aace9d46f3c1880d5',
            'sec-ch-ua-platform': '"Windows"',
            origin: 'https://tr-accounts.most.gov.bd',
            'sec-fetch-site': 'same-site',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.options(
        'https://tr-gateway.most.gov.bd/license/user-panel/application?$select=&$search=&$filter=&$queryParams=%7B%7D&$expand=&$orderby=id+desc&$top=10&$skip=0',
        null,
        {
          headers: {
            accept: '*/*',
            'access-control-request-method': 'GET',
            'access-control-request-headers':
              'authorization,x-app-identifier,x-client-id,x-client-secret',
            origin: 'https://tr-accounts.most.gov.bd',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-site',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.post(
        'https://tr-gateway.most.gov.bd/auth/oauth/load-user-scopes',
        '{"user_id":1668}',
        {
          headers: {
            'x-client-secret': '9a169F9B0F4f4350Ad1a430ce4F9d215',
            'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
            'x-app-identifier': 'UserPanelUI',
            'sec-ch-ua-mobile': '?0',
            authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjE2NjgsInV1aWQiOiJmMmEzZjlkMy0zMGE4LTQyZmItYWIxMi1iODY5MDMzYTJiMjEiLCJvcmdhbml6YXRpb25faWQiOm51bGwsIm9yZ2Fub2dyYW1faWQiOm51bGwsIm9yZ2FuaXphdGlvbl9zaG9ydF9uYW1lIjoiIiwib3JnYW5pemF0aW9uX25hbWVfZW4iOiIiLCJvcmdhbml6YXRpb25fbmFtZV9ibiI6IiIsInJvbGVfaWQiOm51bGwsInJvbGVfY29kZSI6bnVsbCwicHJvZmlsZV90eXBlIjpudWxsLCJwcm9maWxlX2lkIjpudWxsLCJuYW1lIjoiTXIuQWJkdWxsYWgiLCJ1c2VyX3R5cGUiOiJTRVJWSUNFX1JFQ0lQSUVOVCIsImNvbXBhbnlfbmFtZSI6bnVsbCwibW9iaWxlIjpudWxsLCJlbWFpbCI6InBlcm1pdDFAeW9wbWFpbC5jb20iLCJyZW1lbWJlcl90b2tlbiI6bnVsbCwic3RhdHVzIjoxfSwiaWF0IjoxNzA1OTMxODA0LCJleHAiOjE3MDYwMzk4MDQsImp0aSI6InVRYVQ0bUxQdWMifQ.kU47P3PzBBqW9Rgd3U9DK_cyA2YPFR-Y7X50dYF_uv4',
            'content-type': 'application/json',
            accept: 'application/json',
            'x-client-id': '95b4b010fde64b1aace9d46f3c1880d5',
            'sec-ch-ua-platform': '"Windows"',
            origin: 'https://tr-accounts.most.gov.bd',
            'sec-fetch-site': 'same-site',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.options('https://tr-gateway.most.gov.bd/auth/oauth/load-user-scopes', null, {
        headers: {
          accept: '*/*',
          'access-control-request-method': 'POST',
          'access-control-request-headers':
            'authorization,content-type,x-app-identifier,x-client-id,x-client-secret',
          origin: 'https://tr-accounts.most.gov.bd',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-site',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        },
      })

      response = http.get('https://tr-gateway.most.gov.bd/grant/committee/committeeMember/1668', {
        headers: {
          'x-client-secret': '9a169F9B0F4f4350Ad1a430ce4F9d215',
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'x-app-identifier': 'UserPanelUI',
          'sec-ch-ua-mobile': '?0',
          authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjE2NjgsInV1aWQiOiJmMmEzZjlkMy0zMGE4LTQyZmItYWIxMi1iODY5MDMzYTJiMjEiLCJvcmdhbml6YXRpb25faWQiOm51bGwsIm9yZ2Fub2dyYW1faWQiOm51bGwsIm9yZ2FuaXphdGlvbl9zaG9ydF9uYW1lIjoiIiwib3JnYW5pemF0aW9uX25hbWVfZW4iOiIiLCJvcmdhbml6YXRpb25fbmFtZV9ibiI6IiIsInJvbGVfaWQiOm51bGwsInJvbGVfY29kZSI6bnVsbCwicHJvZmlsZV90eXBlIjpudWxsLCJwcm9maWxlX2lkIjpudWxsLCJuYW1lIjoiTXIuQWJkdWxsYWgiLCJ1c2VyX3R5cGUiOiJTRVJWSUNFX1JFQ0lQSUVOVCIsImNvbXBhbnlfbmFtZSI6bnVsbCwibW9iaWxlIjpudWxsLCJlbWFpbCI6InBlcm1pdDFAeW9wbWFpbC5jb20iLCJyZW1lbWJlcl90b2tlbiI6bnVsbCwic3RhdHVzIjoxfSwiaWF0IjoxNzA1OTMxODA0LCJleHAiOjE3MDYwMzk4MDQsImp0aSI6InVRYVQ0bUxQdWMifQ.kU47P3PzBBqW9Rgd3U9DK_cyA2YPFR-Y7X50dYF_uv4',
          accept: 'application/json',
          'x-client-id': '95b4b010fde64b1aace9d46f3c1880d5',
          'sec-ch-ua-platform': '"Windows"',
          origin: 'https://tr-accounts.most.gov.bd',
          'sec-fetch-site': 'same-site',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        },
      })

      response = http.options(
        'https://tr-gateway.most.gov.bd/grant/committee/committeeMember/1668',
        null,
        {
          headers: {
            accept: '*/*',
            'access-control-request-method': 'GET',
            'access-control-request-headers':
              'authorization,x-app-identifier,x-client-id,x-client-secret',
            origin: 'https://tr-accounts.most.gov.bd',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-site',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.get('https://tr-gateway.most.gov.bd/auth/institute-head/user/1668', {
        headers: {
          'x-client-secret': '9a169F9B0F4f4350Ad1a430ce4F9d215',
          'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
          'x-app-identifier': 'UserPanelUI',
          'sec-ch-ua-mobile': '?0',
          authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjE2NjgsInV1aWQiOiJmMmEzZjlkMy0zMGE4LTQyZmItYWIxMi1iODY5MDMzYTJiMjEiLCJvcmdhbml6YXRpb25faWQiOm51bGwsIm9yZ2Fub2dyYW1faWQiOm51bGwsIm9yZ2FuaXphdGlvbl9zaG9ydF9uYW1lIjoiIiwib3JnYW5pemF0aW9uX25hbWVfZW4iOiIiLCJvcmdhbml6YXRpb25fbmFtZV9ibiI6IiIsInJvbGVfaWQiOm51bGwsInJvbGVfY29kZSI6bnVsbCwicHJvZmlsZV90eXBlIjpudWxsLCJwcm9maWxlX2lkIjpudWxsLCJuYW1lIjoiTXIuQWJkdWxsYWgiLCJ1c2VyX3R5cGUiOiJTRVJWSUNFX1JFQ0lQSUVOVCIsImNvbXBhbnlfbmFtZSI6bnVsbCwibW9iaWxlIjpudWxsLCJlbWFpbCI6InBlcm1pdDFAeW9wbWFpbC5jb20iLCJyZW1lbWJlcl90b2tlbiI6bnVsbCwic3RhdHVzIjoxfSwiaWF0IjoxNzA1OTMxODA0LCJleHAiOjE3MDYwMzk4MDQsImp0aSI6InVRYVQ0bUxQdWMifQ.kU47P3PzBBqW9Rgd3U9DK_cyA2YPFR-Y7X50dYF_uv4',
          accept: 'application/json',
          'x-client-id': '95b4b010fde64b1aace9d46f3c1880d5',
          'sec-ch-ua-platform': '"Windows"',
          origin: 'https://tr-accounts.most.gov.bd',
          'sec-fetch-site': 'same-site',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        },
      })

      response = http.options(
        'https://tr-gateway.most.gov.bd/auth/institute-head/user/1668',
        null,
        {
          headers: {
            accept: '*/*',
            'access-control-request-method': 'GET',
            'access-control-request-headers':
              'authorization,x-app-identifier,x-client-id,x-client-secret',
            origin: 'https://tr-accounts.most.gov.bd',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-site',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.get(
        'https://tr-gateway.most.gov.bd/library/library-setup/getLibraryInfoByMemberUserId?$memberUserId=1668',
        {
          headers: {
            'x-client-secret': '9a169F9B0F4f4350Ad1a430ce4F9d215',
            'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
            'x-app-identifier': 'UserPanelUI',
            'sec-ch-ua-mobile': '?0',
            authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOjE2NjgsInV1aWQiOiJmMmEzZjlkMy0zMGE4LTQyZmItYWIxMi1iODY5MDMzYTJiMjEiLCJvcmdhbml6YXRpb25faWQiOm51bGwsIm9yZ2Fub2dyYW1faWQiOm51bGwsIm9yZ2FuaXphdGlvbl9zaG9ydF9uYW1lIjoiIiwib3JnYW5pemF0aW9uX25hbWVfZW4iOiIiLCJvcmdhbml6YXRpb25fbmFtZV9ibiI6IiIsInJvbGVfaWQiOm51bGwsInJvbGVfY29kZSI6bnVsbCwicHJvZmlsZV90eXBlIjpudWxsLCJwcm9maWxlX2lkIjpudWxsLCJuYW1lIjoiTXIuQWJkdWxsYWgiLCJ1c2VyX3R5cGUiOiJTRVJWSUNFX1JFQ0lQSUVOVCIsImNvbXBhbnlfbmFtZSI6bnVsbCwibW9iaWxlIjpudWxsLCJlbWFpbCI6InBlcm1pdDFAeW9wbWFpbC5jb20iLCJyZW1lbWJlcl90b2tlbiI6bnVsbCwic3RhdHVzIjoxfSwiaWF0IjoxNzA1OTMxODA0LCJleHAiOjE3MDYwMzk4MDQsImp0aSI6InVRYVQ0bUxQdWMifQ.kU47P3PzBBqW9Rgd3U9DK_cyA2YPFR-Y7X50dYF_uv4',
            accept: 'application/json',
            'x-client-id': '95b4b010fde64b1aace9d46f3c1880d5',
            'sec-ch-ua-platform': '"Windows"',
            origin: 'https://tr-accounts.most.gov.bd',
            'sec-fetch-site': 'same-site',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )

      response = http.options(
        'https://tr-gateway.most.gov.bd/library/library-setup/getLibraryInfoByMemberUserId?$memberUserId=1668',
        null,
        {
          headers: {
            accept: '*/*',
            'access-control-request-method': 'GET',
            'access-control-request-headers':
              'authorization,x-app-identifier,x-client-id,x-client-secret',
            origin: 'https://tr-accounts.most.gov.bd',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-site',
            'sec-fetch-dest': 'empty',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          },
        }
      )
    }
  )
}