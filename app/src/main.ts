/* eslint-disable */
// @ts-nocheck
/**
 *
 * This file is generated using:
 * @fluencelabs/aqua-api version: 0.12.0
 * @fluencelabs/aqua-to-js version: 0.1.0
 * If you find any bugs in generated AIR, please write an issue on GitHub: https://github.com/fluencelabs/aqua/issues
 * If you find any bugs in generated JS/TS, please write an issue on GitHub: https://github.com/fluencelabs/js-client/issues
 *
 */
import type { IFluenceClient as IFluenceClient$$, CallParams as CallParams$$ } from '@fluencelabs/js-client';

import {
    v5_callFunction as callFunction$$,
    v5_registerService as registerService$$,
} from '@fluencelabs/js-client';


// Functions
export const writeMetadata_script = `
(xor
 (seq
  (seq
   (seq
    (seq
     (seq
      (seq
       (call %init_peer_id% ("getDataSrv" "-relay-") [] -relay-)
       (call %init_peer_id% ("getDataSrv" "uint8Array") [] -uint8Array-arg-)
      )
      (new $option-inline
       (seq
        (seq
         (seq
          (new $array-inline
           (seq
            (seq
             (new %SpellLocation_obj_map
              (seq
               (seq
                (seq
                 (ap ("hostId" "12D3KooWNFrMydPiNpL9FrTUV5Z36LrUHQzqdiLqkQhSHjZiFEep") %SpellLocation_obj_map)
                 (ap ("spellId" "619b0a20-3ef3-49ce-9902-97ec0f6b019d") %SpellLocation_obj_map)
                )
                (ap ("workerId" "12D3KooWPZG6B9rAQGxwEXq6BCfmdce5zqfuadccpKGLcswk7vxB") %SpellLocation_obj_map)
               )
               (canon %init_peer_id% %SpellLocation_obj_map  SpellLocation_obj)
              )
             )
             (ap SpellLocation_obj $array-inline)
            )
            (canon %init_peer_id% $array-inline  #array-inline-0)
           )
          )
          (new %Host_obj_map
           (seq
            (seq
             (seq
              (seq
               (seq
                (ap ("definition" "bafkreid3u255zyahfrlprmse6m7qhqzgz443puytrrhme7n5skgybswr4i") %Host_obj_map)
                (ap ("dummyDealId" "defaultWorker_12D3KooWKa3zzPDmbFnA7LAzrD68P3P9mgFjX4Xua7UeiiAbKudb_3790729181426655") %Host_obj_map)
               )
               (ap ("installationSpells" #array-inline-0) %Host_obj_map)
              )
              (ap ("relayId" "12D3KooWNFrMydPiNpL9FrTUV5Z36LrUHQzqdiLqkQhSHjZiFEep") %Host_obj_map)
             )
             (ap ("timestamp" "2024-02-13T12:16:48.172Z") %Host_obj_map)
            )
            (canon %init_peer_id% %Host_obj_map  Host_obj)
           )
          )
         )
         (xor
          (ap Host_obj $option-inline)
          (null)
         )
        )
        (canon %init_peer_id% $option-inline  #option-inline-0)
       )
      )
     )
     (new %Hosts_obj_map
      (seq
       (ap ("defaultWorker" #option-inline-0) %Hosts_obj_map)
       (canon %init_peer_id% %Hosts_obj_map  Hosts_obj)
      )
     )
    )
    (ap Hosts_obj.$.defaultWorker Hosts_obj_flat)
   )
   (ap Hosts_obj_flat.$.[0].installationSpells Hosts_obj_flat_flat)
  )
  (fold Hosts_obj_flat_flat w-0
   (seq
    (xor
     (seq
      (seq
       (seq
        (seq
         (new $-ephemeral-stream-
          (new #-ephemeral-canon-
           (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
          )
         )
         (new $-ephemeral-stream-
          (new #-ephemeral-canon-
           (canon w-0.$.hostId $-ephemeral-stream-  #-ephemeral-canon-)
          )
         )
        )
        (call w-0.$.workerId ("erc721" "writeMetadata") [-uint8Array-arg-])
       )
       (new $-ephemeral-stream-
        (new #-ephemeral-canon-
         (canon w-0.$.hostId $-ephemeral-stream-  #-ephemeral-canon-)
        )
       )
      )
      (new $-ephemeral-stream-
       (new #-ephemeral-canon-
        (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
       )
      )
     )
     (seq
      (seq
       (seq
        (new $-ephemeral-stream-
         (new #-ephemeral-canon-
          (canon w-0.$.hostId $-ephemeral-stream-  #-ephemeral-canon-)
         )
        )
        (new $-ephemeral-stream-
         (new #-ephemeral-canon-
          (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
         )
        )
       )
       (new $-ephemeral-stream-
        (new #-ephemeral-canon-
         (canon %init_peer_id% $-ephemeral-stream-  #-ephemeral-canon-)
        )
       )
      )
      (fail :error:)
     )
    )
    (next w-0)
   )
  )
 )
 (call %init_peer_id% ("errorHandlingSrv" "error") [:error: 0])
)
`;

export function writeMetadata(
    uint8Array: number[],
    config?: {ttl?: number}
): Promise<void>;

export function writeMetadata(
    peer: IFluenceClient$$,
    uint8Array: number[],
    config?: {ttl?: number}
): Promise<void>;

export function writeMetadata(...args: any[]) {
    return callFunction$$(
        args,
        {
    "functionName": "writeMetadata",
    "arrow": {
        "domain": {
            "fields": {
                "uint8Array": {
                    "type": {
                        "name": "i32",
                        "tag": "scalar"
                    },
                    "tag": "array"
                }
            },
            "tag": "labeledProduct"
        },
        "codomain": {
            "tag": "nil"
        },
        "tag": "arrow"
    },
    "names": {
        "relay": "-relay-",
        "getDataSrv": "getDataSrv",
        "callbackSrv": "callbackSrv",
        "responseSrv": "callbackSrv",
        "responseFnName": "response",
        "errorHandlingSrv": "errorHandlingSrv",
        "errorFnName": "error"
    }
},
        writeMetadata_script
    );
}

export const helloWorld_script = `
(xor
 (seq
  (seq
   (seq
    (call %init_peer_id% ("getDataSrv" "-relay-") [] -relay-)
    (call %init_peer_id% ("getDataSrv" "name") [] -name-arg-)
   )
   (call %init_peer_id% ("op" "concat_strings") ["Hello, " -name-arg-] ret)
  )
  (call %init_peer_id% ("callbackSrv" "response") [ret])
 )
 (call %init_peer_id% ("errorHandlingSrv" "error") [:error: 0])
)
`;

export function helloWorld(
    name: string,
    config?: {ttl?: number}
): Promise<string>;

export function helloWorld(
    peer: IFluenceClient$$,
    name: string,
    config?: {ttl?: number}
): Promise<string>;

export function helloWorld(...args: any[]) {
    return callFunction$$(
        args,
        {
    "functionName": "helloWorld",
    "arrow": {
        "domain": {
            "fields": {
                "name": {
                    "name": "string",
                    "tag": "scalar"
                }
            },
            "tag": "labeledProduct"
        },
        "codomain": {
            "items": [
                {
                    "name": "string",
                    "tag": "scalar"
                }
            ],
            "tag": "unlabeledProduct"
        },
        "tag": "arrow"
    },
    "names": {
        "relay": "-relay-",
        "getDataSrv": "getDataSrv",
        "callbackSrv": "callbackSrv",
        "responseSrv": "callbackSrv",
        "responseFnName": "response",
        "errorHandlingSrv": "errorHandlingSrv",
        "errorFnName": "error"
    }
},
        helloWorld_script
    );
}

export const readMetadata_script = `
(xor
 (seq
  (seq
   (seq
    (seq
     (seq
      (seq
       (seq
        (call %init_peer_id% ("getDataSrv" "-relay-") [] -relay-)
        (new $option-inline
         (seq
          (seq
           (seq
            (new $array-inline
             (seq
              (seq
               (new %SpellLocation_obj_map
                (seq
                 (seq
                  (seq
                   (ap ("hostId" "12D3KooWNFrMydPiNpL9FrTUV5Z36LrUHQzqdiLqkQhSHjZiFEep") %SpellLocation_obj_map)
                   (ap ("spellId" "619b0a20-3ef3-49ce-9902-97ec0f6b019d") %SpellLocation_obj_map)
                  )
                  (ap ("workerId" "12D3KooWPZG6B9rAQGxwEXq6BCfmdce5zqfuadccpKGLcswk7vxB") %SpellLocation_obj_map)
                 )
                 (canon %init_peer_id% %SpellLocation_obj_map  SpellLocation_obj)
                )
               )
               (ap SpellLocation_obj $array-inline)
              )
              (canon %init_peer_id% $array-inline  #array-inline-0)
             )
            )
            (new %Host_obj_map
             (seq
              (seq
               (seq
                (seq
                 (seq
                  (ap ("definition" "bafkreid3u255zyahfrlprmse6m7qhqzgz443puytrrhme7n5skgybswr4i") %Host_obj_map)
                  (ap ("dummyDealId" "defaultWorker_12D3KooWKa3zzPDmbFnA7LAzrD68P3P9mgFjX4Xua7UeiiAbKudb_3790729181426655") %Host_obj_map)
                 )
                 (ap ("installationSpells" #array-inline-0) %Host_obj_map)
                )
                (ap ("relayId" "12D3KooWNFrMydPiNpL9FrTUV5Z36LrUHQzqdiLqkQhSHjZiFEep") %Host_obj_map)
               )
               (ap ("timestamp" "2024-02-13T12:16:48.172Z") %Host_obj_map)
              )
              (canon %init_peer_id% %Host_obj_map  Host_obj)
             )
            )
           )
           (xor
            (ap Host_obj $option-inline)
            (null)
           )
          )
          (canon %init_peer_id% $option-inline  #option-inline-0)
         )
        )
       )
       (new %Hosts_obj_map
        (seq
         (ap ("defaultWorker" #option-inline-0) %Hosts_obj_map)
         (canon %init_peer_id% %Hosts_obj_map  Hosts_obj)
        )
       )
      )
      (ap Hosts_obj.$.defaultWorker Hosts_obj_flat)
     )
     (ap Hosts_obj_flat.$.[0].installationSpells Hosts_obj_flat_flat)
    )
    (fold Hosts_obj_flat_flat w-0
     (seq
      (xor
       (seq
        (seq
         (seq
          (seq
           (seq
            (new $-ephemeral-stream-
             (new #-ephemeral-canon-
              (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
             )
            )
            (new $-ephemeral-stream-
             (new #-ephemeral-canon-
              (canon w-0.$.hostId $-ephemeral-stream-  #-ephemeral-canon-)
             )
            )
           )
           (call w-0.$.workerId ("erc721" "readMetadata") [] ret)
          )
          (ap ret $receipt)
         )
         (new $-ephemeral-stream-
          (new #-ephemeral-canon-
           (canon w-0.$.hostId $-ephemeral-stream-  #-ephemeral-canon-)
          )
         )
        )
        (new $-ephemeral-stream-
         (new #-ephemeral-canon-
          (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
         )
        )
       )
       (seq
        (seq
         (seq
          (new $-ephemeral-stream-
           (new #-ephemeral-canon-
            (canon w-0.$.hostId $-ephemeral-stream-  #-ephemeral-canon-)
           )
          )
          (new $-ephemeral-stream-
           (new #-ephemeral-canon-
            (canon -relay- $-ephemeral-stream-  #-ephemeral-canon-)
           )
          )
         )
         (new $-ephemeral-stream-
          (new #-ephemeral-canon-
           (canon %init_peer_id% $-ephemeral-stream-  #-ephemeral-canon-)
          )
         )
        )
        (fail :error:)
       )
      )
      (next w-0)
     )
    )
   )
   (canon %init_peer_id% $receipt  #receipt_canon)
  )
  (call %init_peer_id% ("callbackSrv" "response") [#receipt_canon])
 )
 (call %init_peer_id% ("errorHandlingSrv" "error") [:error: 0])
)
`;

export function readMetadata(
    config?: {ttl?: number}
): Promise<number[][]>;

export function readMetadata(
    peer: IFluenceClient$$,
    config?: {ttl?: number}
): Promise<number[][]>;

export function readMetadata(...args: any[]) {
    return callFunction$$(
        args,
        {
    "functionName": "readMetadata",
    "arrow": {
        "domain": {
            "fields": {},
            "tag": "labeledProduct"
        },
        "codomain": {
            "items": [
                {
                    "type": {
                        "type": {
                            "name": "i32",
                            "tag": "scalar"
                        },
                        "tag": "array"
                    },
                    "tag": "array"
                }
            ],
            "tag": "unlabeledProduct"
        },
        "tag": "arrow"
    },
    "names": {
        "relay": "-relay-",
        "getDataSrv": "getDataSrv",
        "callbackSrv": "callbackSrv",
        "responseSrv": "callbackSrv",
        "responseFnName": "response",
        "errorHandlingSrv": "errorHandlingSrv",
        "errorFnName": "error"
    }
},
        readMetadata_script
    );
}
