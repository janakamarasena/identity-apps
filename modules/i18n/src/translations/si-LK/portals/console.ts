/**
 * Copyright (c) 2020, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 * WSO2 Inc. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import { ConsoleNS } from "../../../models";

export const console: ConsoleNS = {
    common: {
        advancedSearch: {
            form: {
                inputs: {
                    filterAttribute: {
                        label: "පෙරහන් ගුණාංගය",
                        placeholder: "උදා. නම, විස්තරය ආදිය.",
                        validations: {
                            empty: "පෙරහන් ගුණාංගය අවශ්‍ය ක්ෂේත්‍රයකි."
                        }
                    },
                    filterCondition: {
                        label: "පෙරහන් තත්වය",
                        placeholder: "උදා. ආදිය සමඟ ආරම්භ වේ.",
                        validations: {
                            empty: "පෙරහන් තත්ත්වය අත්‍යවශ්‍ය ක්ෂේත්‍රයකි."
                        }
                    },
                    filterValue: {
                        label: "පෙරහන් අගය",
                        placeholder: "උදා. පරිපාලක, wso2 ආදිය.",
                        validations: {
                            empty: "පෙරහන් අගය අත්‍යවශ්‍ය ක්ෂේත්‍රයකි."
                        }
                    }
                }
            },
            hints: {
                querySearch: {
                    actionKeys: "Shift + Enter",
                    label: "විමසුමක් ලෙස සෙවීමට"
                }
            },
            options: {
                header: "උසස් සෙවීම"
            },
            placeholder: "{{attribute}} මගින් සොයන්න",
            popups: {
                clear: "පැහැදිලි සෙවීම",
                dropdown: "විකල්ප පෙන්වන්න"
            },
            resultsIndicator: "විමසුම සඳහා ප්‍රතිපල පෙන්වයි \"{{query}}\""
        },
        modals: {
            editAvatarModal: {
                content: {
                    gravatar: {
                        errors: {
                            noAssociation: {
                                content: "තෝරාගත් විද්‍යුත් තැපෑල Gravatar හි ලියාපදිංචි වී නැති බවක් පෙනේ. " +
                                    "Gravatar නිල වෙබ් අඩවියට පිවිසීමෙන් Gravatar ගිණුමක් සඳහා ලියාපදිංචි වන්න හෝ " +
                                    "පහත සඳහන් එකක් භාවිතා කරන්න.",
                                header: "ගැලපෙන Gravatar රූපයක් හමු නොවීය!"
                            }
                        },
                        heading: "Gravatar රූපය මත පදනම්ව "
                    },
                    hostedAvatar: {
                        heading: "සත්කාරක රූපය",
                        input: {
                            errors: {
                                http: {
                                    content: "තෝරාගන්නා ලද URL ලින්කුව මගින් HTTP ඔස්සේ යොමු වන්නේ අනාරක්ශිත " +
                                        "රූපයකටයි. කරුණාකර අවධානයෙන් ඉදිරියට යන්න.",
                                    header: "අනාරක්ෂිත අන්තර්ගතය!"
                                },
                                invalid: {
                                    content: "කරුණාකර වලංගු රූපයක URL ලින්කුවක් ඇතුලත් කරන්න."
                                }
                            },
                            hint: "තෙවන පාර්ශවීය ස්ථානයක සත්කාරක වන වලංගු රූප URL එකක් ඇතුළත් කරන්න.",
                            placeholder: "රූපය සඳහා වන URL ලින්කුව ඇතුලත් කරන්න.",
                            warnings: {
                                dataURL: {
                                    content: "විශාල අක්ෂර සංඛ්‍යාවක් සහිත දත්ත URL භාවිතා කිරීම දත්ත සමුදායේ " +
                                        "ගැටළු වලට හේතු විය හැක. ප්‍රවේශමෙන් ඉදිරියට යන්න.",
                                    header: "ඇතුළත් කළ දත්ත URL එක දෙවරක් පරීක්ෂා කරන්න!"
                                }
                            }
                        }
                    },
                    systemGenAvatars: {
                        heading: "පද්ධතිය ජනනය කළ පරිශීලක රූපය",
                        types: {
                            initials: "මුලකුරු"
                        }
                    }
                },
                description: null,
                heading: "පරිශීලක පින්තූරය යාවත්කාලීන කරන්න",
                primaryButton: "සුරකින්න",
                secondaryButton: "අවලංගු කරන්න"
            },
            sessionTimeoutModal: {
                description: "අක්‍රියතාවය හේතුවෙන් ඔබ වත්මන් සැසියෙන් ඉවත් වනු ඇත. " +
                    "කරුණාකර ඔබ සැසිය දිගටම කරගෙන යාමට කැමති නම් ලොග් වී සිටින්න තෝරන්න.",
                heading: "ඔබ <1>{{ time }}</1> න් ඉවත් වනු ඇත.",
                primaryButton: "පුරනය වී සිටින්න",
                secondaryButton: "ඉවත් වන්න"
            }
        },
        placeholders: {
            brokenPage: {
                action: "පිටුව නැවුම් කරන්න",
                subtitles: {
                    0: "මෙම පිටුව ප්‍රදර්ශනය කිරීමේදී යම් දෝෂයක් ඇති වී ඇත.",
                    1: "තාක්ෂණික විස්තර සඳහා බ්‍රව්සර් කොන්සෝලය බලන්න."
                },
                title: "යම් දෝෂයක් ඇති වී ඇත"
            }
        },
        validations: {
            inSecureURL: {
                description: "ඇතුළත් කළ URL එක SSL නොවන URL එකකි. කරුණාකර ප්‍රවේශමෙන් ඉදිරියට යන්න.",
                heading: "අනාරක්ෂිත URL ලින්කුවකි"
            },
            unrecognizedURL: {
                description: "ඇතුළත් කළ URL එක HTTP හෝ HTTPS නොවේ. කරුණාකර ප්‍රවේශමෙන් ඉදිරියට යන්න.",
                heading: "හඳුනා නොගත් URL ලින්කුවකි"
            }
        }
    },
    develop: {
        componentExtensions: {
            component: {
                application: {
                    quickStart: {
                        title: "ඉක්මන් ආරම්භය"
                    }
                }
            }
        },
        features: {
            URLInput: {
                withLabel: {
                    negative: {
                        content: "යළි-යොමුවීමේ URL හි ආරම්භය {{url}} WSO2 හැඳුනුම් සේවාදායක " +
                            "API වෙත CORS ඉල්ලීම් කිරීමට අවසර නැත.",
                        detailedContent: {
                            0: "පෙරනිමියෙන් WSO2 හැඳුනුම් සේවාදායක API මඟින් CORS ඉල්ලීම් අවහිර කරයි. නමුත් මෙය " +
                                "නීත්‍යානුකූල ඉල්ලීම් දැන ගැනීමෙන් වළක්වා ගත හැකිය",
                            1: "එබැවින් මෙම සම්භවය සඳහා CORS සක්‍රීය කිරීමෙන් <1>{{ tenantName }}</1> කුලී නිවැසියන්ගේ " +
                                "ලියාපදිංචි යෙදුම් වලින් හැඳුනුම් සේවාදායක API වෙත ප්‍රවේශ වීමට ඔබට ඉඩ සලසයි."
                        },
                        header: "CORS අවසර නැත",
                        leftAction: "ඉඩ දෙන්න"
                    },
                    positive: {
                        content: "යළි-යොමුවීමේ URL හි ආරම්භය {{url}} WSO2 හැඳුනුම් සේවාදායක API " +
                            "වෙත CORS ඉල්ලීම් කිරීමට අවසර ඇත.",
                        detailedContent: {
                            0: "පෙරනිමියෙන් WSO2 හැඳුනුම් සේවාදායක API මඟින් CORS ඉල්ලීම් අවහිර කරයි." +
                                " නමුත් මෙය නීත්‍යානුකූල ඉල්ලීම් දැන ගැනීමෙන් වළක්වා ගත හැකිය",
                            1: "එබැවින් මෙම සම්භවය සඳහා CORS සක්‍රීය කිරීමෙන් <1>{{ tenantName }}</1> කුලී නිවැසියන්ගේ" +
                                " ලියාපදිංචි යෙදුම් වලින් හැඳුනුම් සේවාදායක API වෙත ප්‍රවේශ වීමට ඔබට ඉඩ සලසයි."
                        },
                        header: "CORS සඳහා අවසර ඇත"
                    }
                }
            },
            applications: {
                addWizard: {
                    steps: {
                        generalSettings: {
                            heading: "සාමාන්‍ය සැකසුම්"
                        },
                        protocolConfig: {
                            heading: "ප්රොටොකෝල් වින්යාසය"
                        },
                        protocolSelection: {
                            heading: "ප්රොටෝකෝලය තෝරා ගැනීම"
                        },
                        summary: {
                            heading: "සාරාංශය",
                            sections: {
                                accessURL: {
                                    heading: "URL වෙත ප්‍රවේශ වන්න"
                                },
                                applicationQualifier: {
                                    heading: "අයදුම්පත් සුදුසුකම්"
                                },
                                assertionURLs: {
                                    heading: "පාරිභෝගික URL (ය)"
                                },
                                audience: {
                                    heading: "ප්‍රේක්ෂකයෝ"
                                },
                                callbackURLs: {
                                    heading: "යූආර්එල් (ය) යළි හරවා යැවීම"
                                },
                                certificateAlias: {
                                    heading: "සහතික අන්වර්ථය"
                                },
                                discoverable: {
                                    heading: "සොයාගත හැකි"
                                },
                                grantType: {
                                    heading: "ප්‍රදාන වර්ගය (ය)"
                                },
                                issuer: {
                                    heading: "නිකුත් කරන්නා"
                                },
                                metaFile: {
                                    heading: "මෙටා ගොනුව (Base64Encoded)"
                                },
                                metadataURL: {
                                    heading: "පාර-දත්ත URL"
                                },
                                public: {
                                    heading: "පොදු"
                                },
                                realm: {
                                    heading: "රාජධානිය"
                                },
                                renewRefreshToken: {
                                    heading: "RefreshToken අලුත් කරන්න"
                                },
                                replyTo: {
                                    heading: "පිළිතුරු දෙන්න"
                                }
                            }
                        }
                    }
                },
                advancedSearch: {
                    form: {
                        inputs: {
                            filterAttribute: {
                                placeholder: "උදා. නම, විස්තරය ආදිය."
                            },
                            filterCondition: {
                                placeholder: "උදා. ආදිය සමඟ ආරම්භ වේ."
                            },
                            filterValue: {
                                placeholder: "උදා. විශාලනය, විකුණුම් බලකාය ආදිය."
                            }
                        }
                    },
                    placeholder: "යෙදුම් නාමයෙන් සොයන්න"
                },
                confirmations: {
                    clientSecretHashDisclaimer: {
                        forms: {
                            clientIdSecretForm: {
                                clientId: {
                                    hide: "හැඳුනුම්පත සඟවන්න",
                                    label: "සේවාලාභී හැඳුනුම්පත",
                                    placeholder: "සේවාලාභී හැඳුනුම්පත",
                                    show: "හැඳුනුම්පත පෙන්වන්න",
                                    validations: {
                                        empty: "මෙය අත්‍යවශ්‍ය ක්ෂේත්‍රයකි."
                                    }
                                },
                                clientSecret: {
                                    hide: "රහස සඟවන්න",
                                    label: "සේවාලාභී රහස",
                                    placeholder: "සේවාලාභී රහස",
                                    show: "රහස පෙන්වන්න",
                                    validations: {
                                        empty: "මෙය අත්‍යවශ්‍ය ක්ෂේත්‍රයකි."
                                    }
                                }
                            }
                        },
                        modal: {
                            assertionHint: "",
                            content: "",
                            header: "OAuth යෙදුම් අක්තපත්‍ර",
                            message: "පාරිභෝගික රහස් අගය සරල පෙළෙහි එක් වරක් පමණක් පෙන්වනු ඇත. " +
                                "කරුණාකර එය ආරක්ෂිත තැනක පිටපත් කර සුරැකීමට වග බලා ගන්න."
                        }
                    },
                    deleteApplication: {
                        assertionHint: "තහවුරු කිරීමට කරුණාකර <1>{{ name }}</1> ටයිප් කරන්න.",
                        content: "ඔබ මෙම යෙදුම මකා දැමුවහොත්, ඔබට එය නැවත ලබා ගත නොහැක. මෙය මත පදනම් " +
                            "වූ සියලුම යෙදුම් ද වැඩ කිරීම නවතා දැමිය හැකිය. කරුණාකර ප්‍රවේශමෙන් ඉදිරියට යන්න.",
                        header: "ඔබට විශ්වාසද?",
                        message: "මෙම ක්‍රියාව ආපසු හැරවිය නොහැකි අතර යෙදුම ස්ථිරවම මකා දමනු ඇත."
                    },
                    deleteOutboundProvisioningIDP: {
                        assertionHint: "තහවුරු කිරීමට කරුණාකර <1>{{ name }}</1> ටයිප් කරන්න.",
                        content: "ඔබ මෙම පිටතට යන ප්‍රතිපාදන IDP මකා දැමුවහොත්, ඔබට එය නැවත ලබා ගත නොහැක." +
                            "කරුණාකර ප්‍රවේශමෙන් ඉදිරියට යන්න.",
                        header: "ඔබට විශ්වාසද?",
                        message: "මෙම ක්‍රියාව ආපසු හැරවිය නොහැකි අතර අවතැන්වූවන් ඉවත් කරනු ඇත."
                    },
                    deleteProtocol: {
                        assertionHint: "තහවුරු කිරීමට කරුණාකර <1> {{name}} </1> ටයිප් කරන්න.",
                        content: "ඔබ මෙම ප්‍රොටෝකෝලය මකා දැමුවහොත් ඔබට එය නැවත ලබා ගත නොහැක. මෙය මත" +
                            " පදනම් වූ සියලුම යෙදුම් ද වැඩ කිරීම නවතා දැමිය හැකිය. කරුණාකර ප්‍රවේශමෙන් ඉදිරියට යන්න.",
                        header: "ඔබට විශ්වාසද?",
                        message: "මෙම ක්‍රියාව ආපසු හැරවිය නොහැකි අතර එය ප්‍රොටෝකෝලය ස්ථිරවම මකා දමනු ඇත."
                    },
                    regenerateSecret: {
                        assertionHint: "තහවුරු කිරීමට කරුණාකර <1> {{id}} </1> ටයිප් කරන්න.",
                        content: "ඔබ මෙම යෙදුම නැවත ප්‍රතිනිර්මාණය කරන්නේ නම්, මෙය මත පදනම් වූ සියලුම යෙදුම් ක්‍රියා" +
                            " කිරීම නවතා දැමිය හැකිය. කරුණාකර ප්‍රවේශමෙන් ඉදිරියට යන්න.",
                        header: "ඔබට විශ්වාසද?",
                        message: "මෙම ක්‍රියාව ආපසු හැරවිය නොහැකි අතර සේවාදායකයාගේ රහස ස්ථිරවම වෙනස් කරයි."
                    },
                    revokeApplication: {
                        assertionHint: "තහවුරු කිරීමට කරුණාකර <1> {{id}} </1> ටයිප් කරන්න.",
                        content: "ඔබ මෙම යෙදුම අවලංගු කරන්නේ නම්, මෙය මත පදනම් වූ සියලුම යෙදුම් ද ක්‍රියා " +
                            "විරහිත වේ. කරුණාකර ප්‍රවේශමෙන් ඉදිරියට යන්න.",
                        header: "ඔබට විශ්වාසද?",
                        message: "සේවාදායකයාගේ රහස නැවත ප්‍රතිනිර්මාණය කිරීමෙන් මෙම ක්‍රියාව ආපසු හැරවිය හැකිය."
                    }
                },
                dangerZoneGroup: {
                    deleteApplication: {
                        actionTitle: "මකන්න",
                        header: "යෙදුම මකන්න",
                        subheader: "ඔබ යෙදුමක් මකා දැමූ පසු, ආපසු යාමක් නොමැත. කරුණාකර ස්ථිර වන්න."
                    },
                    header: "අන්තරා කලාපය"
                },
                edit: {
                    sections: {
                        access: {
                            addProtocolWizard: {
                                heading: "ප්රොටෝකෝලය එක් කරන්න",
                                steps: {
                                    protocolSelection: {
                                        manualSetup: {
                                            emptyPlaceholder: {
                                                subtitles: "සියලුම ප්‍රොටෝකෝල වින්‍යාස කර ඇත",
                                                title: "සැකිලි නොමැත"
                                            },
                                            heading: "අතින් සැකසුම",
                                            subHeading: "අභිරුචි වින්‍යාසයන් සමඟ ප්‍රොටෝකෝලයක් එක් කරන්න"
                                        },
                                        quickSetup: {
                                            emptyPlaceholder: {
                                                subtitles: "සියලුම ප්‍රොටෝකෝල වින්‍යාස කර ඇත",
                                                title: "සැකිලි නොමැත"
                                            },
                                            heading: "ඉක්මන් පිහිටුවීම්",
                                            subHeading: "අච්චුවකින් ප්‍රොටොකෝල් වින්‍යාසය ලබා ගන්න"
                                        }
                                    }
                                },
                                subHeading: "Prot {{appName}} යෙදුමට නව ප්‍රොටෝකෝලයක් එක් කරන්න"
                            },
                            tabName: "ප්රවේශ"
                        },
                        advanced: {
                            tabName: "උසස්"
                        },
                        attributes: {
                            forms: {
                                fields: {
                                    dynamic: {
                                        applicationRole: {
                                            label: "අයදුම් කිරීමේ කාර්යභාරය",
                                            validations: {
                                                duplicate: "මෙම භූමිකාව දැනටමත් සිතියම් ගත කර ඇත. කරුණාකර වෙනත්"
                                                    + " භූමිකාවක් තෝරන්න",
                                                empty: "කරුණාකර සිතියම සඳහා ලක්ෂණයක් ඇතුළත් කරන්න"
                                            }
                                        },
                                        localRole: {
                                            label: "දේශීය කාර්යභාරය",
                                            validations: {
                                                empty: "කරුණාකර දේශීය භූමිකාව ඇතුළත් කරන්න"
                                            }
                                        }
                                    }
                                }
                            },
                            roleMapping: {
                                heading: "භූමිකාව සිතියම්ගත කිරීම"
                            },
                            selection: {
                                addWizard: {
                                    header: "ගුණාංග තේරීම යාවත්කාලීන කරන්න",
                                    steps: {
                                        select: {
                                            transfer: {
                                                headers: {
                                                    attribute: "ගුණාංගය"
                                                },
                                                searchPlaceholders: {
                                                    attribute: "සෙවුම් ගුණාංගය",
                                                    role: "සෙවුම් කාර්යභාරය"
                                                }
                                            }
                                        }
                                    },
                                    subHeading: "නව ගුණාංග එකතු කරන්න හෝ පවතින ගුණාංග ඉවත් කරන්න."
                                },
                                heading: "ගුණාංග තේරීම",
                                mappingTable: {
                                    actions: {
                                        enable: "සිතියම්කරණය සක්‍රීය කරන්න"
                                    },
                                    columns: {
                                        appAttribute: "යෙදුම් ගුණාංගය",
                                        attribute: "ගුණාංගය",
                                        mandatory: "අනිවාර්යයි",
                                        requested: "ඉල්ලා"
                                    },
                                    listItem: {
                                        actions: {
                                            makeMandatory: "අනිවාර්ය කරන්න",
                                            makeRequested: "ඉල්ලීමක් කරන්න",
                                            removeMandatory: "අනිවාර්ය ඉවත් කරන්න",
                                            removeRequested: "ඉල්ලූ දේ ඉවත් කරන්න"
                                        },
                                        fields: {
                                            claim: {
                                                label: "අගය ඇතුලත් කරන්න",
                                                placeholder: "උදා"
                                            }
                                        }
                                    },
                                    searchPlaceholder: "ගුණාංග සොයන්න"
                                }
                            },
                            tabName: "ගුණාංග"
                        },
                        general: {
                            tabName: "ජනරාල්"
                        },
                        provisioning: {
                            inbound: {
                                heading: "අභ්‍යන්තර ප්‍රතිපාදන",
                                subHeading: "මෙම යෙදුම හරහා WSO2 හැඳුනුම් සේවාදායක පරිශීලක ගබඩාවකට " +
                                    "පරිශීලකයින් හෝ කණ්ඩායම් සැපයීම."
                            },
                            outbound: {
                                actions: {
                                    addIdp: "නව හැඳුනුම්පත් සපයන්නා"
                                },
                                addIdpWizard: {
                                    errors: {
                                        noProvisioningConnector: "තෝරාගත් අනන්‍යතා සැපයුම්කරුට " +
                                            "ප්‍රතිපාදන සම්බන්ධක නොමැත."
                                    },
                                    heading: "පිටතට යන ප්‍රතිපාදන IDP එක් කරන්න",
                                    steps: {
                                        details: "IDP විස්තර"
                                    },
                                    subHeading: "ඔබගේ යෙදුමට ස්වයං-ලියාපදිංචි වන පරිශීලකයින්ට ප්‍රතිපාදන සැපයීම සඳහා"
                                        + " IDP තෝරන්න."
                                },
                                heading: "පිටතට යන ප්‍රතිපාදන",
                                subHeading: "මෙම යෙදුමේ පරිශීලකයින්ට පිටතට යාම සඳහා අනන්‍යතා " +
                                    "සැපයුම්කරුවෙකු වින්‍යාස කරන්න."
                            },
                            tabName: "ප්‍රතිපාදන"
                        },
                        signOnMethod: {
                            sections: {
                                authenticationFlow: {
                                    heading: "සත්‍යාපන ප්‍රවාහය",
                                    sections: {
                                        scriptBased: {
                                            editor: {
                                                templates: {
                                                    darkMode: "අඳුරු ප්‍රකාරය",
                                                    heading: "සැකිලි"
                                                }
                                            },
                                            heading: "ස්ක්‍රිප්ට් මත පදනම් වූ වින්‍යාසය",
                                            hint: "අනුවර්තන පිටපතක් හරහා සත්‍යාපන ප්‍රවාහය නිර්වචනය කරන්න. " +
                                                "ආරම්භ කිරීම සඳහා ඔබට පුවරුවේ සිට සැකිලි වලින් එකක් තෝරා ගත හැකිය."
                                        },
                                        stepBased: {
                                            actions: {
                                                addStep: "නව සත්‍යාපන පියවර",
                                                selectAuthenticator: "Authenticator එකක් තෝරන්න"
                                            },
                                            forms: {
                                                fields: {
                                                    attributesFrom: {
                                                        label: "වෙතින් ගුණාංග භාවිතා කරන්න",
                                                        placeholder: "පියවර තෝරන්න"
                                                    },
                                                    subjectIdentifierFrom: {
                                                        label: "සිට විෂය හඳුනාගැනුම භාවිතා කරන්න",
                                                        placeholder: "පියවර තෝරන්න"
                                                    }
                                                }
                                            },
                                            heading: "පියවර පදනම් කරගත් වින්‍යාසය",
                                            hint: "දේශීය / ෆෙඩරල් සත්‍යාපනය කරන්නන් අදාළ පියවර වෙත ඇදගෙන " +
                                                "යාමෙන් සත්‍යාපන පියවර සාදන්න."
                                        }
                                    }
                                },
                                requestPathAuthenticators: {
                                    notifications: {
                                        getRequestPathAuthenticators: {
                                            error: {
                                                description: "{{ description }}",
                                                message: "ලබා ගැනීමේ දෝෂයකි"
                                            },
                                            genericError: {
                                                description: "ඉල්ලීම් මාර්ග සත්‍යාපකයන් ලබා ගැනීමේදී දෝෂයක් ඇතිවිය." +
                                                    "authenticators.",
                                                message: "ලබා ගැනීමේ දෝෂයකි"
                                            },
                                            success: {
                                                description: "",
                                                message: ""
                                            }
                                        }
                                    },
                                    subTitle: "ඉල්ලීම් මාර්ග සත්‍යාපනය සඳහා දේශීය සත්‍යාපකය.",
                                    title: "මාර්ග සත්‍යාපනය ඉල්ලන්න"
                                },
                                templateDescription: {
                                    description: {
                                        code: "කේතය",
                                        defaultSteps: "පෙරනිමි පියවර",
                                        description: "විස්තර",
                                        helpReference: "උදව් යොමු කිරීම",
                                        parameters: "පරාමිතීන්",
                                        prerequisites: "පූර්වාවශ්යතාවයන්"
                                    },
                                    popupContent: "වැඩිපුර විස්තර"
                                }
                            },
                            tabName: "පුරනය වීමේ ක්‍රමය"
                        }
                    }
                },
                forms: {
                    advancedAttributeSettings: {
                        sections: {
                            role: {
                                fields: {
                                    role: {
                                        hint: "මෙම විකල්පය මඟින් පරිශීලකයා භූමිකාව සඳහා වාසය කරන " +
                                            "පරිශීලක ගබඩා වසම එකතු කරනු ඇත",
                                        label: "පරිශීලක වසම ඇතුළත් කරන්න",
                                        validations: {
                                            empty: "භූමිකාව තෝරන්න"
                                        }
                                    },
                                    roleAttribute: {
                                        hint: "ගුණාංගය තෝරන්න",
                                        label: "භූමිකාව",
                                        validations: {
                                            empty: "භූමිකාව තෝරන්න"
                                        }
                                    }
                                },
                                heading: "කාර්යභාරය"
                            },
                            subject: {
                                fields:{
                                    subjectAttribute: {
                                        hint: "ගුණාංගය තෝරන්න",
                                        label: "විෂය ගුණාංගය",
                                        validations: {
                                            empty: "විෂය ගුණාංගය තෝරන්න"
                                        }
                                    },
                                    subjectIncludeTenantDomain: {
                                        hint: "මෙම විකල්පය කුලී නිවැසියන්ගේ වසම දේශීය විෂය හඳුනාගැනුමට එකතු කරයි",
                                        label: "කුලී නිවැසියන්ගේ වසම ඇතුළත් කරන්න",
                                        validations: {
                                            empty: "මෙය අත්‍යවශ්‍ය ක්ෂේත්‍රයකි."
                                        }
                                    },
                                    subjectIncludeUserDomain: {
                                        hint: "මෙම විකල්පය මඟින් පරිශීලකයා දේශීය විෂය හඳුනාගැනීමේදී වාසය කරන " +
                                            "පරිශීලක ගබඩා වසම එකතු කරනු ඇත",
                                        label: "පරිශීලක වසම ඇතුළත් කරන්න",
                                        validations: {
                                            empty: "මෙය අත්‍යවශ්‍ය ක්ෂේත්‍රයකි."
                                        }
                                    },
                                    subjectUseMappedLocalSubject: {
                                        hint: "මෙම විකල්පය අනන්‍යතාවය තහවුරු කිරීමේදී දේශීය විෂය " +
                                            "හඳුනාගැනුම භාවිතා කරයි",
                                        label: "සිතියම් ගත කළ දේශීය විෂය භාවිතා කරන්න",
                                        validations: {
                                            empty: "මෙය අත්‍යවශ්‍ය ක්ෂේත්‍රයකි."
                                        }
                                    }
                                },
                                heading: "විෂය"
                            }
                        }
                    },
                    advancedConfig: {
                        fields: {
                            enableAuthorization: {
                                hint: "සත්‍යාපන ප්‍රවාහයන් අතරතුරදී බලය පැවරීමේ ප්‍රතිපත්ති ක්‍රියාත්මක කළ යුතුද " +
                                    "යන්න තීරණය කරයි.",
                                label: "අවසරය සබල කරන්න",
                                validations: {
                                    empty: "මෙය අත්‍යවශ්‍ය ක්ෂේත්‍රයකි."
                                }
                            },
                            returnAuthenticatedIdpList: {
                                hint: "සත්‍යාපන ප්‍රතිචාරයේදී සත්‍යාපිත හැඳුනුම්පත් සපයන්නන්ගේ " +
                                    "ලැයිස්තුව ආපසු ලබා දෙනු ඇත.",
                                label: "සත්‍යාපිත IDP ලැයිස්තුව ආපසු එවන්න",
                                validations: {
                                    empty: "මෙය අත්‍යවශ්‍ය ක්ෂේත්‍රයකි."
                                }
                            },
                            saas: {
                                hint: "සේවා සැපයුම්කරුගේ කුලී නිවැසියන්ගේ භාවිතය සඳහා යෙදුම් පෙරනිමියෙන් සීමා " +
                                    "කර ඇත. මෙම යෙදුම SaaS සක්‍රීය කර ඇත්නම් එය සියලු " +
                                    "කුලී නිවැසියන්ගේ සියලු පරිශීලකයින් සඳහා විවෘත වේ.",
                                label: "SaaS යෙදුම",
                                validations: {
                                    empty: "මෙය අත්‍යවශ්‍ය ක්ෂේත්‍රයකි."
                                }
                            },
                            skipConsentLogin: {
                                hint: "සක්‍රිය කිරීමෙන් පසු, පුරනය වීමේදී පරිශීලක කැමැත්ත ලබා ගැනීම සඳහා පිටු " +
                                    "විමසුම මෙම යෙදුම සඳහා මඟ හරිනු ඇත.",
                                label: "පුරනය වීමේ කැමැත්ත මඟ හරින්න",
                                validations: {
                                    empty: "මෙය අත්‍යවශ්‍ය ක්ෂේත්‍රයකි."
                                }
                            },
                            skipConsentLogout: {
                                hint: "සක්‍රිය කිරීමෙන් පසු, පිටවීමේදී පරිශීලක කැමැත්ත ලබා ගැනීම සඳහා පිටු " +
                                    "විමසුම මෙම යෙදුම සඳහා මඟ හරිනු ඇත.",
                                label: "ඉවත් වීමේ කැමැත්ත මඟ හරින්න",
                                validations: {
                                    empty: "මෙය අත්‍යවශ්‍ය ක්ෂේත්‍රයකි."
                                }
                            }
                        },
                        sections: {
                            certificate: {
                                fields: {
                                    jwksValue: {
                                        label: "වටිනාකම",
                                        placeholder: "යෙදුම JWKS අන්ත ලක්ෂ්‍ය URL.",
                                        validations: {
                                            empty: "මෙය අත්‍යවශ්‍ය ක්ෂේත්‍රයකි.",
                                            invalid: "මෙය වලංගු URL එකක් නොවේ"
                                        }
                                    },
                                    pemValue: {
                                        actions: {
                                            view: "සහතික තොරතුරු බලන්න"
                                        },
                                        hint: "යෙදුමේ සහතිකය (PEM ආකෘතියෙන්).",
                                        label: "වටිනාකම",
                                        placeholder: "PEM ආකෘතියෙන් සහතිකය.",
                                        validations: {
                                            empty: "මෙය අත්‍යවශ්‍ය ක්ෂේත්‍රයකි."
                                        }
                                    },
                                    type: {
                                        children: {
                                            jwks: {
                                                label: "JWKS අන්ත ලක්ෂ්‍යය භාවිතා කරන්න"
                                            },
                                            pem: {
                                                label: "සහතිකය ලබා දෙන්න"
                                            }
                                        },
                                        label: "වර්ගය"
                                    }
                                },
                                heading: "සහතිකය"
                            }
                        }
                    },
                    generalDetails: {
                        fields: {
                            accessUrl: {
                                hint: "සොයාගත හැකි ලෙස සලකුණු කර ඇති යෙදුම් අවසාන පරිශීලකයින් සඳහා දැකිය හැකිය.",
                                label: "URL වෙත ප්‍රවේශ වන්න",
                                placeholder: "යෙදුම් පිවිසුම් පිටුව සඳහා ප්‍රවේශ url ඇතුල් කරන්න",
                                validations: {
                                    empty: "යෙදුමක් සොයාගත හැකි යැයි සලකුණු කිරීම සඳහා වලංගු ප්‍රවේශ " +
                                        "URL එකක් අර්ථ දැක්විය යුතුය",
                                    invalid: "මෙය වලංගු URL එකක් නොවේ"
                                }
                            },
                            description: {
                                label: "විස්තර",
                                placeholder: "යෙදුම සඳහා විස්තරයක් ඇතුළත් කරන්න"
                            },
                            discoverable: {
                                label: "සොයාගත හැකි යෙදුම"
                            },
                            imageUrl: {
                                label: "යෙදුම් රූපය",
                                placeholder: "යෙදුම සඳහා අනුරූප url එකක් ඇතුළත් කරන්න",
                                validations: {
                                    invalid: "මෙය වලංගු රූප URL එකක් නොවේ"
                                }
                            },
                            name: {
                                label: "නම",
                                placeholder: "යෙදුම සඳහා නමක් ඇතුළත් කරන්න.",
                                validations: {
                                    duplicate: "මෙම නම සහිත යෙදුමක් දැනටමත් තිබේ." +
                                        " කරුණාකර වෙනත් නමක් ඇතුළත් කරන්න.",
                                    empty: "මෙය අත්‍යවශ්‍ය ක්ෂේත්‍රයකි."
                                }
                            }
                        }
                    },
                    inboundCustom: {
                        fields: {
                            checkbox: {
                                label: "{{label}}",
                                validations: {
                                    empty: "{{name} සපයන්න"
                                }
                            },
                            dropdown: {
                                label: "{{label}}",
                                placeholder: "{{name} ඇතුලත් කරන්න",
                                validations: {
                                    empty: "{{name} සපයන්න"
                                }
                            },
                            generic: {
                                label: "{{label}}",
                                validations: {
                                    empty: "{{name} Select තෝරන්න"
                                }
                            },
                            password: {
                                label: "{{label}}",
                                placeholder: "{{name} ඇතුලත් කරන්න",
                                validations: {
                                    empty: "{{name} සපයන්න"
                                }
                            }
                        }
                    },
                    inboundOIDC: {
                        messages: {
                            revokeDisclaimer: {
                                content: "යෙදුම අවලංගු කර ඇත. ඔබට යෙදුම නැවත සක්‍රිය කිරීමට අවශ්‍ය නම් " +
                                    "කරුණාකර රහස ජනනය කරන්න.",
                                heading: "යෙදුම අවලංගු කර ඇත"
                            }
                        },
                        fields: {
                            allowedOrigins: {
                                hint: "අවසර ලත් මූලාරම්භය යනු හරස් ප්‍රභවයේ සිට WSO2 හැඳුනුම් සේවාදායක API " +
                                    "වෙත ඉල්ලීම් කිරීමට ඉඩ දෙන URL ය",
                                label: "අවසර ලත් මූලයන්",
                                placeholder: "අවසර ලත් මූලයන් ඇතුළත් කරන්න",
                                validations: {
                                    empty: "කරුණාකර වලංගු ප්‍රභවයක් එක් කරන්න."
                                }
                            },
                            callBackUrls: {
                                hint: "සත්‍යාපනයෙන් පසුව, අපි ඉහත යළි-යොමුවීම් URL වෙත පමණක් හරවා " +
                                    "යවන අතර ඔබට බහු URL නියම කළ හැකිය",
                                label: "URL යලි හරවන්න",
                                placeholder: "යළි-යොමුවීම් URL ඇතුළත් කරන්න",
                                validations: {
                                    empty: "කරුණාකර වලංගු URL එකක් එක් කරන්න."
                                }
                            },
                            clientID: {
                                label: "සේවාලාභී හැඳුනුම්පත"
                            },
                            clientSecret: {
                                hashedDisclaimer: "සේවාලාභී රහස හෑෂ් කර ඇත. ඔබට එය ලබා " +
                                    "ගැනීමට අවශ්‍ය නම්, කරුණාකර රහස නැවත ප්‍රතිනිර්මාණය කරන්න.",
                                hideSecret: "රහස සඟවන්න",
                                label: "සේවාලාභී රහස",
                                placeholder: "සේවාලාභී රහස ඇතුළත් කරන්න",
                                showSecret: "රහස පෙන්වන්න",
                                validations: {
                                    empty: "මෙය අත්‍යවශ්‍ය ක්ෂේත්‍රයකි."
                                }
                            },
                            grant: {
                                hint: "යෙදුම ටෝකන් සේවාව සමඟ සන්නිවේදනය කරන්නේ කෙසේද යන්න මෙය තීරණය කරයි",
                                label: "අවසර ලත් වර්ගය",
                                validations: {
                                    empty: "අවම වශයෙන් ප්‍රදාන වර්ගයක් තෝරන්න"
                                }
                            },
                            public: {
                                hint: "සේවාදායක රහසක් නොමැතිව සත්‍යාපනය කිරීමට සේවාදායකයාට ඉඩ දෙන්න.",
                                label: "මහජන සේවාදායකයා",
                                validations: {
                                    empty: "මෙය අත්‍යවශ්‍ය ක්ෂේත්‍රයකි."
                                }
                            }
                        },
                        sections: {
                            accessToken: {
                                fields: {
                                    bindingType: {
                                        label: "ටෝකන් බන්ධන වර්ගය"
                                    },
                                    expiry: {
                                        hint: "පරිශීලක ප්‍රවේශ ටෝකන කල් ඉකුත් වීමේ කාලය (තත්පර වලින්)"
                                            + " වින්‍යාස කරන්න.",
                                        label: "පරිශීලක ප්‍රවේශ ටෝකන කල් ඉකුත් වීමේ කාලය",
                                        placeholder: "පරිශීලක ප්‍රවේශ ටෝකන කල් ඉකුත් වීමේ වේලාව ඇතුළත් කරන්න",
                                        validations: {
                                            empty: "කරුණාකර පරිශීලක ප්‍රවේශ ටෝකන කල් ඉකුත් වීමේ කාලය පුරවන්න"
                                        }
                                    },
                                    revokeToken: {
                                        hint: "පරිශීලක ලොග්අවුට් හරහා සීමිත අවතැන්වූවන්ගේ සැසිය අවසන් වූ විට " +
                                            "මෙම යෙදුමේ ටෝකන අවලංගු කිරීමට ඉඩ දෙන්න.",
                                        label: "පරිශීලක ලොග්අවුට් මත ටෝකන අවලංගු කරන්න"
                                    },
                                    type: {
                                        label: "ටෝකන් වර්ගය"
                                    },
                                    validateBinding: {
                                        hint: "API ආයාචනා අතරතුර ටෝකන බන්ධන වලංගු කිරීම සක්‍රීය කරන්න",
                                        label: "ටෝකන් බන්ධන වලංගු කරන්න"
                                    }
                                },
                                heading: "ටෝකනයට ප්‍රවේශ වන්න",
                                hint: "ප්‍රවේශ ටෝකන නිකුත් කරන්නා, පරිශීලක ප්‍රවේශ ටෝකන කල් ඉකුත් වීමේ කාලය, " +
                                    "යෙදුම් ප්‍රවේශ ටෝකන කල් ඉකුත් වීමේ කාලය ආදිය වින්‍යාස කරන්න."
                            },
                            idToken: {
                                fields: {
                                    algorithm: {
                                        hint: "සේවාදායකයා සඳහා ID ටෝකනයේ සංකේතාංකන ඇල්ගොරිතම තෝරන්න.",
                                        label: "ඇල්ගොරිතම",
                                        placeholder: "ඇල්ගොරිතම තෝරන්න",
                                        validations: {
                                            empty: "මෙය අත්‍යවශ්‍ය ක්ෂේත්‍රයකි."
                                        }
                                    },
                                    audience: {
                                        hint: "හැඳුනුම් ටෝකනය අදහස් කරන ලබන්නන්.",
                                        label: "ප්‍රේක්ෂකයෝ",
                                        placeholder: "ප්‍රේක්ෂකයින් ඇතුළත් කරන්න",
                                        validations: {
                                            empty: "කරුණාකර සබය පුරවන්න"
                                        }
                                    },
                                    encryption: {
                                        hint: "හැඳුනුම්පත් සංකේතාංකනය සක්‍රීය කරන්න.",
                                        label: "සංකේතනය සක්‍රීය කරන්න",
                                        validations: {
                                            empty: "මෙය අත්‍යවශ්‍ය ක්ෂේත්‍රයකි."
                                        }
                                    },
                                    expiry: {
                                        hint: "හැඳුනුම් ටෝකන කල් ඉකුත් වීමේ කාලය (තත්පර වලින්) වින්‍යාස කරන්න.",
                                        label: "හැඳුනුම්පත් කල් ඉකුත් වීමේ කාලය",
                                        placeholder: "හැඳුනුම් ටෝකන කල් ඉකුත් වීමේ වේලාව ඇතුළත් කරන්න",
                                        validations: {
                                            empty: "කරුණාකර හැඳුනුම්පත් ටෝකන කල් ඉකුත් වීමේ කාලය පුරවන්න"
                                        }
                                    },
                                    method: {
                                        hint: "හැඳුනුම්පත් සංකේතාංකනය සඳහා ක්‍රමය තෝරන්න.",
                                        label: "ගුප්තකේතන ක්‍රමය",
                                        placeholder: "ක්රමය තෝරන්න",
                                        validations: {
                                            empty:  "මෙය අත්‍යවශ්‍ය ක්ෂේත්‍රයකි."
                                        }
                                    }
                                },
                                heading: "ID ටෝකන්"
                            },
                            logoutURLs: {
                                fields: {
                                    back: {
                                        label: "ආපසු නාලිකා ලොග්අවුට් URL",
                                        placeholder: "පසුපස නාලිකා ලොග්අවුට් URL එක ඇතුළත් කරන්න",
                                        validations: {
                                            empty: "කරුණාකර පසුපස නාලිකා ලොග්අවුට් URL පුරවන්න",
                                            invalid: "කරුණාකර වලංගු URL එක් කරන්න"
                                        }
                                    },
                                    front: {
                                        label: "ඉදිරිපස නාලිකා ලොග්අවුට් URL",
                                        placeholder: "ඉදිරිපස නාලිකා ලොග්අවුට් URL එක ඇතුළත් කරන්න",
                                        validations: {
                                            empty: "කරුණාකර ඉදිරිපස නාලිකා ලොග්අවුට් URL පුරවන්න",
                                            invalid: "කරුණාකර වලංගු URL එක් කරන්න"
                                        }
                                    },
                                    signatureValidation: {
                                        label: "ඉල්ලීම් වස්තු අත්සන වලංගු කිරීම සක්‍රීය කරන්න"
                                    }
                                },
                                heading: "PKCE"
                            },
                            pkce: {
                                fields: {
                                    pkce: {
                                        children: {
                                            mandatory: {
                                                label: "PKCE අනිවාර්යයි"
                                            },
                                            plainAlg: {
                                                label: "PKCE 'ප්ලේන්' ට්‍රාන්ස්ෆෝමර් ඇල්ගොරිතම සඳහා සහය දක්වන්න"
                                            }
                                        },
                                        label: "{{label}}",
                                        validations: {
                                            empty: "මෙය අත්‍යවශ්‍ය ක්ෂේත්‍රයකි."
                                        }
                                    }
                                },
                                heading: "PKCE",
                                hint: "PKCE (RFC 7636) යනු ඇතැම් ප්‍රහාර වැළැක්වීම සහ මහජන සේවාදායකයින්ගෙන්" +
                                    " OAuth හුවමාරුව ආරක්ෂිතව සිදු කිරීම සඳහා " +
                                    "බලය පැවරීමේ කේත ප්‍රවාහයේ දිගුවකි."
                            },
                            refreshToken: {
                                fields: {
                                    expiry: {
                                        hint: "නැවුම් ටෝකන කල් ඉකුත් වීමේ කාලය (තත්පර වලින්) වින්‍යාස කරන්න.",
                                        label: "ටෝකන කල් ඉකුත් වීමේ වේලාව නැවුම් කරන්න",
                                        placeholder: "නැවුම් ටෝකන කල් ඉකුත් වීමේ වේලාව ඇතුළත් කරන්න",
                                        validations: {
                                            empty: "කරුණාකර නැවුම් ටෝකන කල් ඉකුත් වීමේ කාලය පුරවන්න"
                                        }
                                    },
                                    renew: {
                                        hint: "Refresh ටෝකන් ප්‍රදාන භාවිතා කරන විට ඉල්ලීමකට නව නැවුම් ටෝකනයක්"
                                            + " නිකුත් කරන්න.",
                                        label: "නැවුම් කිරීමේ ටෝකනය කරකවන්න",
                                        validations: {
                                            empty: "මෙය අත්‍යවශ්‍ය ක්ෂේත්‍රයකි."
                                        }
                                    }
                                },
                                heading: "ටෝකනය නැවුම් කරන්න"
                            },
                            scopeValidators: {
                                fields: {
                                    validator: {
                                        label: "{{label}}",
                                        validations: {
                                            empty: "මෙය අත්‍යවශ්‍ය ක්ෂේත්‍රයකි."
                                        }
                                    }
                                },
                                heading: "විෂය පථ වලංගු කරන්නන්"
                            }
                        }
                    },
                    inboundSAML: {
                        fields: {
                            assertionURLs: {
                                hint: "සත්‍යාපනය සාර්ථක වූ පසු බ්‍රව්සරය යළි හරවා යැවිය යුතු බවට පාරිභෝගික " +
                                    "URL ය මෙයින් තහවුරු වේ. මෙය යෙදුමේ " +
                                    "සහතික කිරීමේ පාරිභෝගික සේවය (ACS) URL ය.",
                                label: "පාරිභෝගික URL ප්‍රකාශ කිරීම",
                                placeholder: "සහතික කිරීමේ URL ඇතුල් කරන්න",
                                validations: {
                                    invalid: "කරුණාකර වලංගු URL එක් කරන්න"
                                }
                            },
                            defaultAssertionURL: {
                                hint: "බහු ප්‍රකාශිත පාරිභෝගික URL තිබිය හැකි බැවින්, සත්‍යාපන " +
                                    "ඉල්ලීමෙන් ඔබට එය ලබා ගැනීමට නොහැකි වූ විට, " +
                                    "ඔබ පෙරනිමි ප්‍රකාශක පාරිභෝගික URL එකක් අර්ථ දැක්විය යුතුය.",
                                label: "පෙරනිමි ප්‍රකාශය පාරිභෝගික URL",
                                validations: {
                                    empty: "මෙය අත්‍යවශ්‍ය ක්ෂේත්‍රයකි."
                                }
                            },
                            idpEntityIdAlias: {
                                hint: "මෙම අගයට අනන්‍යතා සැපයුම්කරුගේ හැඳුනුම්පත අභිබවා යා හැකි අතර එය " +
                                    "නේවාසික අනන්‍යතා සැපයුම්කරුගේ SAML SSO අභ්‍යන්තර සත්‍යාපන " +
                                    "වින්‍යාසය යටතේ දක්වා ඇත. ජනනය කරන ලද SAML ප්‍රතිචාරය නිකුත් " +
                                    "කරන්නා ලෙස හැඳුනුම්පත් සපයන්නාගේ ආයතන හැඳුනුම්පත භාවිතා කරයි.",
                                label: "Idp పరిధిI අන්වර්ථය",
                                placeholder: "අන්වර්ථය ඇතුළත් කරන්න",
                                validations: {
                                    empty: "මෙය අත්‍යවශ්‍ය ක්ෂේත්‍රයකි."
                                }
                            },
                            issuer: {
                                hint: "මෙය නිකුත් කරන්නා නියම කරයි. මේ 'සම්ල්' ය" +
                                    "contains the unique identifier of the Application. This is also the issuer value" +
                                    "specified in the SAML Authentication Request issued by the Application.",
                                label: "නිකුත් කරන්නා",
                                placeholder: "නිකුත් කරන්නාගේ නම ඇතුළත් කරන්න",
                                validations: {
                                    empty: "කරුණාකර නිකුත් කරන්නාට සපයන්න"
                                }
                            },
                            metaURL: {
                                hint: "මෙටා ගොනුව සඳහා URL",
                                label: "මෙටා URL",
                                placeholder: "මෙටා ගොනු url ඇතුල් කරන්න",
                                validations: {
                                    empty: "කරුණාකර මෙටා ගොනු url ලබා දෙන්න",
                                    invalid: "මෙය වලංගු URL එකක් නොවේ"
                                }
                            },
                            mode: {
                                children: {
                                    manualConfig: {
                                        label: "අතින් වින්‍යාසය"
                                    },
                                    metadataFile: {
                                        label: "පාර-දත්ත ගොනුව"
                                    },
                                    metadataURL: {
                                        label: "පාර-දත්ත URL"
                                    }
                                },
                                hint: "Saml වින්‍යාස කිරීමට මාතය තෝරන්න.",
                                label: "මාදිලිය"
                            },
                            qualifier: {
                                hint: "මෙම අගය අවශ්‍ය වන්නේ එකම නිකුත් කරන්නාගේ අගය සඳහා බහු SAML SSO " +
                                    "අභ්‍යන්තර සත්‍යාපන වින්‍යාසයන් වින්‍යාස කිරීමට සිදුවුවහොත් පමණි. මෙහි අර්ථ " +
                                    "දක්වා ඇති සුදුසුකම් යන්ත්‍රය ක්‍රියාත්මක වන වේලාවේදී සුවිශේෂී ලෙස යෙදුමක් හඳුනා " +
                                    "ගැනීම සඳහා අභ්‍යන්තරව නිකුත් කරන්නාට එකතු කරනු ලැබේ.",
                                label: "අයදුම්පත් සුදුසුකම්",
                                placeholder: "යෙදුම් සුදුසුකම් ඇතුළත් කරන්න",
                                validations: {
                                    empty: "මෙය අත්‍යවශ්‍ය ක්ෂේත්‍රයකි."
                                }
                            }
                        },
                        sections: {
                            assertion: {
                                fields: {
                                    audience: {
                                        hint: "සබය සීමා කරන්න.",
                                        label: "ප්‍රේක්ෂකයෝ",
                                        placeholder: "ප්‍රේක්ෂකයින් ඇතුළත් කරන්න",
                                        validations: {
                                            invalid: "කරුණාකර වලංගු URL එක් කරන්න"
                                        }
                                    },
                                    nameIdFormat: {
                                        hint: "අනන්‍යතා සැපයුම්කරු විසින් සහාය දක්වන නාම හඳුනාගැනීමේ ආකෘති මෙය " +
                                            "අර්ථ දක්වයි. පරිශීලකයෙකු පිළිබඳ තොරතුරු සැපයීමට " +
                                            "නාම හඳුනාගැනීම් භාවිතා කරයි.",
                                        label: "නම හැඳුනුම් ආකෘතිය",
                                        placeholder: "නාම හැඳුනුම් ආකෘතිය ඇතුළත් කරන්න",
                                        validations: {
                                            empty: "මෙය අත්‍යවශ්‍ය ක්ෂේත්‍රයකි."
                                        }
                                    },
                                    recipients: {
                                        hint:  "ප්‍රතිචාරයේ ලබන්නන් වලංගු කරන්න.",
                                        label: "ලබන්නන්",
                                        placeholder: "ලබන්නන් ඇතුළත් කරන්න",
                                        validations: {
                                            invalid: "කරුණාකර වලංගු URL එක් කරන්න"
                                        }
                                    }
                                },
                                heading: "ප්‍රකාශ කිරීම"
                            },
                            attributeProfile: {
                                fields: {
                                    enable: {
                                        hint: "හැඳුනුම්පතෙහි මූලික ගුණාංග පැතිකඩක් සඳහා අනන්‍යතා සේවාදායකයා " +
                                            "සහාය ලබා දෙයි, එහිදී අනන්‍යතා සැපයුම්කරුට SAML ප්‍රකාශයන්හි පරිශීලකයාගේ " +
                                            "ගුණාංග ඇතුළත් කළ හැකිය.",
                                        label: "සක්‍රීය කරන්න"
                                    },
                                    includeAttributesInResponse: {
                                        hint: "සෑම විටම ප්‍රතිචාරයේ ගුණාංග ඇතුළත් කිරීම සඳහා ඔබ පිරික්සුම් කොටුව " +
                                            "තෝරාගත් පසු, අනන්‍යතා සැපයුම්කරු සෑම විටම SAML ආරෝපණ ප්‍රකාශයේ " +
                                            "තෝරාගත් හිමිකම් වලට අදාළ ගුණාංග අගයන් ඇතුළත් කරයි.",
                                        label: "සෑම විටම ප්‍රතිචාර වශයෙන් ගුණාංග ඇතුළත් කරන්න"
                                    },
                                    serviceIndex: {
                                        hint: "අගයක් ස්වයංක්‍රීයව ජනනය නොවන්නේ නම් මෙය විකල්ප ක්ෂේත්‍රයකි." +
                                            "automatically.",
                                        label: "පරිභෝජන සේවා දර්ශකය ආරෝපණය කරන්න",
                                        placeholder: "ආරෝපණ පරිභෝජන සේවා දර්ශකය ඇතුළත් කරන්න",
                                        validations: {
                                            empty: "මෙය අත්‍යවශ්‍ය ක්ෂේත්‍රයකි."
                                        }
                                    }
                                },
                                heading: "ආරෝපණ පැතිකඩ"
                            },
                            encryption: {
                                fields: {
                                    assertionEncryption: {
                                        label: "සක්‍රීය කරන්න",
                                        validations: {
                                            empty: "මෙය අත්‍යවශ්‍ය ක්ෂේත්‍රයකි."
                                        }
                                    },
                                    assertionEncryptionAlgorithm: {
                                        label: "ප්‍රකාශ කිරීමේ සංකේතාංකන ඇල්ගොරිතම",
                                        validations: {
                                            empty: "මෙය අත්‍යවශ්‍ය ක්ෂේත්‍රයකි."
                                        }
                                    },
                                    keyEncryptionAlgorithm: {
                                        label: "යතුරු සංකේතාංකන ඇල්ගොරිතම",
                                        validations: {
                                            empty: "මෙය අත්‍යවශ්‍ය ක්ෂේත්‍රයකි."
                                        }
                                    }
                                },
                                heading: "ගුප්ත කේතනය"
                            },
                            idpInitiatedSLO: {
                                fields: {
                                    enable: {
                                        hint: "මෙය සක්‍රිය කර ඇති විට, සේවා සපයන්නා SAML ඉල්ලීම යැවීමට අවශ්‍ය නොවේ." +
                                            "the SAML request.",
                                        label: "සක්‍රීය කරන්න",
                                        validations: {
                                            empty: "මෙය අත්‍යවශ්‍ය ක්ෂේත්‍රයකි."
                                        }
                                    },
                                    returnToURLs: {
                                        label: "URL වෙත ආපසු යන්න",
                                        placeholder: "URL ඇතුලත් කරන්න",
                                        validations: {
                                            invalid: "කරුණාකර වලංගු URL එක් කරන්න"
                                        }
                                    }
                                },
                                heading: "Idp ආරම්භ කරන ලද තනි ලොග්අවුට්"
                            },
                            requestProfile: {
                                fields: {
                                    enable: {
                                        label: "ප්‍රකාශ විමසුම් පැතිකඩ සක්‍රීය කරන්න",
                                        validations: {
                                            empty: "මෙය අත්‍යවශ්‍ය ක්ෂේත්‍රයකි."
                                        }
                                    }
                                },
                                heading: "ප්‍රකාශ විමසුම / ඉල්ලුම් පැතිකඩ"
                            },
                            requestValidation: {
                                fields: {
                                    signatureValidation: {
                                        hint: "හැඳුනුම්පත් සපයන්නා විසින් SAML2 සත්‍යාපන ඉල්ලීමේ අත්සන සහ " +
                                            "යෙදුම විසින් යවන SAML2 ලොග්අවුට් ඉල්ලීම වලංගු කළ යුතුද " +
                                            "යන්න මෙයින් නියම කෙරේ.",
                                        label: "ඉල්ලීම් අත්සන වලංගු කිරීම සක්‍රීය කරන්න",
                                        validations: {
                                            empty: "මෙය අත්‍යවශ්‍ය ක්ෂේත්‍රයකි."
                                        }
                                    },
                                    signatureValidationCertAlias: {
                                        hint: "අයදුම්පත් සහතිකය ලබා දෙන්නේ නම් එය භාවිතා කරනු ඇති අතර ඉහත" +
                                            " තෝරාගත් සහතිකය නොසලකා හරිනු ඇත.",
                                        label: "වලංගු කිරීමේ සහතිකය අන්වර්ථය ඉල්ලන්න",
                                        validations: {
                                            empty: "මෙය අත්‍යවශ්‍ය ක්ෂේත්‍රයකි."
                                        }
                                    }
                                },
                                heading: "වලංගුකරණය ඉල්ලීම"
                            },
                            responseSigning: {
                                fields: {
                                    digestAlgorithm: {
                                        label: "ඩයිජෙස්ට් ඇල්ගොරිතම",
                                        validations: {
                                            empty: "මෙය අත්‍යවශ්‍ය ක්ෂේත්‍රයකි."
                                        }
                                    },
                                    responseSigning: {
                                        hint: "සත්‍යාපන ක්‍රියාවලියෙන් පසු ලැබෙන SAML2 ප්‍රතිචාර අත්සන් කරන්න.",
                                        label: "SAML ප්‍රතිචාර අත්සන් කරන්න"
                                    },
                                    signingAlgorithm: {
                                        label: "ඇල්ගොරිතම අත්සන් කිරීම",
                                        validations: {
                                            empty: "මෙය අත්‍යවශ්‍ය ක්ෂේත්‍රයකි."
                                        }
                                    }
                                },
                                heading: "ප්‍රකාශය / ප්‍රතිචාර අත්සන් කිරීම"
                            },
                            sloProfile: {
                                fields: {
                                    enable: {
                                        label: "සක්‍රීය කරන්න",
                                        validations: {
                                            empty: "මෙය අත්‍යවශ්‍ය ක්ෂේත්‍රයකි."
                                        }
                                    },
                                    logoutMethod: {
                                        label: "පිටවීමේ ක්‍රමය",
                                        validations: {
                                            empty: "මෙය අත්‍යවශ්‍ය ක්ෂේත්‍රයකි."
                                        }
                                    },
                                    requestURL: {
                                        label: "තනි පිටවීමේ ඉල්ලීම් URL",
                                        placeholder: "තනි ලොග්අවුට් ඉල්ලීම් URL ඇතුළත් කරන්න",
                                        validations: {
                                            empty: "මෙය අත්‍යවශ්‍ය ක්ෂේත්‍රයකි.",
                                            invalid: "මෙය වලංගු URL එකක් නොවේ"
                                        }
                                    },
                                    responseURL: {
                                        label: "තනි පිටවීමේ ප්‍රතිචාර URL",
                                        placeholder: "තනි වර්‍ග ප්‍රතිචාර URL ය ඇතුළත් කරන්න",
                                        validations: {
                                            empty: "මෙය අත්‍යවශ්‍ය ක්ෂේත්‍රයකි.",
                                            invalid: "මෙය වලංගු URL එකක් නොවේ"
                                        }
                                    }
                                },
                                heading: "තනි පිටවීමේ පැතිකඩ"
                            },
                            ssoProfile: {
                                fields: {
                                    artifactBinding: {
                                        hint: "අයදුම්පත් සහතිකයට එරෙහිව කලාත්මක විසඳුම් ඉල්ලීම් අත්සන වලංගු වේ." +
                                            "the Application certificate.",
                                        label: "කෞතුක බන්ධන සඳහා අත්සන වලංගු කිරීම සක්‍රීය කරන්න"
                                    },
                                    bindings: {
                                        hint: "SAML පණිවිඩ ප්‍රවාහනය කිරීමේ යාන්ත්‍රණයන්.",
                                        label: "බන්ධන",
                                        validations: {
                                            empty: "මෙය අත්‍යවශ්‍ය ක්ෂේත්‍රයකි."
                                        }
                                    },
                                    idpInitiatedSSO: {
                                        label: "IDP ආරම්භක SSO සක්‍රීය කරන්න",
                                        validations: {
                                            empty: "මෙය අත්‍යවශ්‍ය ක්ෂේත්‍රයකි."
                                        }
                                    }
                                },
                                heading: "පැතිකඩ මත තනි සං Sign ා"
                            }
                        }
                    },
                    inboundSTS: {
                        fields: {
                            realm: {
                                hint: "උදාසීන sts සඳහා තාත්වික හඳුනාගැනුම ඇතුළත් කරන්න",
                                label: "රාජධානිය",
                                placeholder: "රාජධානියට ඇතුළු වන්න.",
                                validations: {
                                    empty: "මෙය අත්‍යවශ්‍ය ක්ෂේත්‍රයකි."
                                }
                            },
                            replyTo: {
                                hint: "ප්‍රතිචාරය හසුරුවන ආර්පී එන්ඩ්පොයින්ට් URL ඇතුල් කරන්න.",
                                label: "පිළිතුරු URL",
                                placeholder: "පිළිතුරු URL ඇතුලත් කරන්න",
                                validations: {
                                    empty: "මෙය අත්‍යවශ්‍ය ක්ෂේත්‍රයකි.",
                                    invalid: "මෙය වලංගු URL එකක් නොවේ"
                                }
                            }
                        }
                    },
                    inboundWSTrust: {
                        fields: {
                            audience: {
                                hint: "විශ්වාසදායක පක්ෂයේ අවසාන ලක්ෂ්‍ය ලිපිනය.",
                                label: "ප්‍රේක්ෂකයෝ",
                                placeholder: "ප්‍රේක්ෂකයින් ඇතුළත් කරන්න",
                                validations: {
                                    empty: "ප්‍රේක්ෂකයන් ඇතුළත් කරන්න.",
                                    invalid: "මෙය වලංගු URL එකක් නොවේ"
                                }
                            },
                            certificateAlias: {
                                hint: "විශ්වාසදායක පක්ෂයේ පොදු සහතිකය.",
                                label: "සහතික අන්වර්ථය",
                                placeholder: "ප්‍රේක්ෂකයින් ඇතුළත් කරන්න",
                                validations: {
                                    empty: "සහතිකය අන්වර්ථය තෝරන්න"
                                }
                            }
                        }
                    },
                    outboundProvisioning: {
                        fields: {
                            blocking: {
                                hint: "ප්‍රතිපාදන සම්පුර්ණ වන තුරු සත්‍යාපන ප්‍රවාහය අවහිර කරන්න.",
                                label: "අවහිර කිරීම"
                            },
                            connector: {
                                label: "ප්‍රතිපාදන සම්බන්ධකය",
                                placeholder: "ප්‍රතිපාදන සම්බන්ධකය තෝරන්න",
                                validations: {
                                    empty: "ප්‍රතිපාදන සම්බන්ධකයක් තෝරා ගැනීම අනිවාර්ය වේ."
                                }
                            },
                            idp: {
                                label: "හැඳුනුම්පත් සපයන්නා",
                                placeholder: "අනන්‍යතා සැපයුම්කරු තෝරන්න",
                                validations: {
                                    empty: "අවතැන්වූවෙකු තෝරා ගැනීම අනිවාර්ය වේ."
                                }
                            },
                            jit: {
                                hint: "නියමිත වේලාවට ප්‍රතිපාදන භාවිතා කරමින් සත්‍යාපනය කළ ගබඩාවට"
                                    + " පරිශීලකයින් සැපයීම.",
                                label: "පිටතට යන JIT"
                            },
                            rules: {
                                hint: "කලින් නිර්වචනය කරන ලද XACML නීති මත පදනම්ව ප්‍රතිපාදන භාවිතා කරන්නන්",
                                label: "රීති සබල කරන්න"
                            }
                        }
                    },
                    provisioningConfig: {
                        fields: {
                            proxyMode: {
                                hint: "පරිශීලකයින් / කණ්ඩායම් පරිශීලක ගබඩාවට ලබා දී නොමැත. ඒවා පිටතට " +
                                    "යන ප්‍රතිපාදන පමණි.",
                                label: "ප්‍රොක්සි ප්‍රකාරය"
                            },
                            userstoreDomain: {
                                hint: "පරිශීලකයින් සහ කණ්ඩායම් සැපයීම සඳහා පරිශීලක වෙළඳසැල් වසම් නාමය තෝරන්න.",
                                label: "පරිශීලක වෙළඳසැල් වසම සැපයීම"
                            }
                        }
                    }
                },
                helpPanel: {
                    tabs: {
                        configs: {
                            content: {
                                subTitle: "යෙදුම සඳහා වින්‍යාස කර ඇති ප්‍රොටෝකෝලය (OIDC, SAML, WS-Trust, ආදිය) " +
                                    "මත පදනම්ව අච්චුව හරහා කලින් නිර්වචනය කළ වින්‍යාසයන් " +
                                    "යාවත්කාලීන කරන්න හෝ නව වින්‍යාසයන් එක් කරන්න.",
                                title: "යෙදුම් වින්‍යාස කිරීම"
                            },
                            heading: "වින්‍යාස කිරීමේ මාර්ගෝපදේශය"
                        },
                        docs: {
                            content: null,
                            heading: "ලියකියවිලි"
                        },
                        samples: {
                            content: {
                                sample: {
                                    configurations: {
                                        btn: "වින්‍යාසය බාගන්න",
                                        subTitle: "නියැදිය සමඟ සේවාදායකයේ සාදන ලද යෙදුම ඒකාබද්ධ කිරීම සඳහා, " +
                                            "ඔබ පහත සඳහන් වින්‍යාසයන් සමඟ සේවාදායකයා " +
                                            "ආරම්භ කළ යුතුය.",
                                        title: "සේවාදායකයා ආරම්භ කරන්න"
                                    },
                                    downloadSample: {
                                        btn: "නියැදිය බාගන්න",
                                        subTitle: "මෙම නියැදි යෙදුම මඟින් WSO2 හැඳුනුම් සේවාදායකයේ SDK " +
                                            "භාවිතය සහ හැඳුනුම් සේවාදායකය සමඟ ඕනෑම " +
                                            "යෙදුමක් ඒකාබද්ධ කළ හැකි ආකාරය පෙන්වයි.",
                                        title: "නියැදිය අත්හදා බලන්න"
                                    },
                                    goBack: "ආපසු යන්න",
                                    subTitle: "අපගේ පෙර සැකසූ නියැදි යෙදුම බාගත කිරීමෙන් ඉක්මනින් " +
                                        "මූලාකෘතිකරණය ආරම්භ කරන්න.",
                                    title: "නියැදි යෙදුම්"
                                },
                                technology: {
                                    subTitle: "ඔබ තාක්ෂණයක් තෝරාගත් පසු නියැදි සහ අවශ්‍ය SDKs සහ ප්‍රයෝජනවත් " +
                                        "තොරතුරු ලබා දෙනු ඇත",
                                    title: "තාක්ෂණයක් තෝරන්න"
                                }
                            },
                            heading: "සාම්පල"
                        },
                        sdks: {
                            content: {
                                sdk: {
                                    goBack: "ආපසු යන්න",
                                    subTitle: "ඔබගේ යෙදුම් සංවර්ධනය ආරම්භ කිරීමට පහත මෘදුකාංග " +
                                        "සංවර්ධන කට්ටල භාවිතා කළ හැකිය.",
                                    title: "මෘදුකාංග සංවර්ධන කට්ටල (SDKs)"
                                }
                            },
                            heading: "SDKs"
                        },
                        start: {
                            content: {
                                endpoints: {
                                    subTitle: "WSO2 SDK භාවිතා නොකර ඔබ ඔබේ යෙදුම ක්‍රියාත්මක කරන්නේ නම්, " +
                                        "යෙදුම සඳහා සත්‍යාපනය ක්‍රියාත්මක කිරීමට " +
                                        "පහත සේවාදායක අන්ත ලක්ෂ්‍ය ඔබට ප්‍රයෝජනවත් වනු ඇත.",
                                    title: "සේවාදායකයේ අවසාන ස්ථාන"
                                },
                                oidcConfigurations: {
                                    labels: {
                                        authorize: "අවසරලත්",
                                        introspection: "ස්වයං විමර්ශනය",
                                        keystore: "යතුරු කට්ටලය",
                                        token: "ටෝකන්",
                                        userInfo: "UserInfo",
                                        wellKnown: "සොයාගැනීම"
                                    }
                                },
                                samlConfigurations: {
                                    buttons: {
                                        certificate: "සහතිකය බාගන්න",
                                        metadata: "IDP පාර-දත්ත බාගන්න"
                                    },
                                    labels: {
                                        certificate: "අවතැන්වූවන්ගේ සහතිකය",
                                        issuer: "නිකුත් කරන්නා",
                                        metadata: "IDP පාර-දත්ත",
                                        slo: "තනි ලොග්අවුට්",
                                        sso: "තනි පුරනය වීම"
                                    }
                                },
                                trySample: {
                                    btn: "සාම්පල ගවේෂණය කරන්න",
                                    subTitle: "සත්‍යාපන ප්‍රවාහය පෙන්වන සාම්පල ඔබට අත්හදා බැලිය හැකිය. නියැදි " +
                                        "යෙදුම බාගත කර යෙදවීමට පහත බොත්තම ක්ලික් කරන්න.",
                                    title: "නියැදියක් සමඟ උත්සාහ කරන්න"
                                },
                                useSDK: {
                                    btns: {
                                        withSDK: "SDK භාවිතා කිරීම",
                                        withoutSDK: "අතින්"
                                    },
                                    subTitle: "අවම කේත රේඛා සංඛ්‍යාවක් සමඟ ඔබේ යෙදුමට සත්‍යාපනය ඒකාබද්ධ " +
                                        "කිරීමට අපගේ SDKs ස්ථාපනය කර භාවිතා කරන්න.",
                                    title: "ඔබේම යෙදුම ඒකාබද්ධ කරන්න"
                                }
                            },
                            heading: "ඊළඟට කුමක්ද?"
                        }
                    }
                },
                list: {
                    actions: {
                        add: "නව යෙදුම"
                    },
                    columns: {
                        actions: "ක්‍රියා",
                        name: "නම"
                    }
                },
                notifications: {
                    addApplication: {
                        error: {
                            description: "{{description}}",
                            message: "නිර්මාණ දෝෂයකි"
                        },
                        genericError: {
                            description: "යෙදුම නිර්මාණය කිරීමට අපොහොසත් විය",
                            message: "යම් දෝෂයක් ඇති වී ඇත"
                        },
                        success: {
                            description: "යෙදුම සාර්ථකව නිර්මාණය කරන ලදි.",
                            message: "නිර්මාණය සාර්ථකයි"
                        }
                    },
                    authenticationStepMin: {
                        genericError: {
                            description: "අවම වශයෙන් එක් සත්‍යාපන පියවරක් අවශ්‍ය වේ.",
                            message: "ඉවත් කිරීමේ දෝෂයකි"
                        }
                    },
                    deleteApplication: {
                        error: {
                            description: "{{description}}",
                            message: "ඉවත් කිරීමේ දෝෂයකි"
                        },
                        genericError: {
                            description: "යෙදුම මැකීමට අපොහොසත් විය",
                            message: "යම් දෝෂයක් ඇති වී ඇත"
                        },
                        success: {
                            description: "යෙදුම සාර්ථකව මකා දැමීය.",
                            message: "ඉවත් කිරීම සාර්ථකයි"
                        }
                    },
                    deleteProtocolConfig: {
                        error: {
                            description: "{{description}}",
                            message: "ඉවත් කිරීමේ දෝෂයකි"
                        },
                        genericError: {
                            description: "අභ්‍යන්තර ප්‍රොටොකෝල් වින්‍යාසයන් මකාදැමීමේදී දෝෂයක් සිදුවිය.",
                            message: "යම් දෝෂයක් ඇති වී ඇත"
                        },
                        success: {
                            description: "{{protocol}} ප්‍රොටොකෝලය වින්‍යාස කිරීම සාර්ථකව මකා දමන ලදි.",
                            message: "ඉවත් කිරීම සාර්ථකයි"
                        }
                    },
                    duplicateAuthenticationStep: {
                        genericError: {
                            description: "එකම සත්‍යාපකය එක පියවරකින් නැවත නැවත කිරීමට අවසර නැත.",
                            message: "අවසර නැත"
                        }
                    },
                    emptyAuthenticationStep: {
                        genericError: {
                            description: "හිස් සත්‍යාපන පියවරක් ඇත. කරුණාකර එය ඉවත් කරන්න හෝ " +
                                "ඉදිරියට යාමට සත්‍යාපක එකතු කරන්න.",
                            message: "යාවත්කාලීන දෝෂයකි"
                        }
                    },
                    fetchAllowedCORSOrigins: {
                        error: {
                            description: "{{description}}",
                            message: "නැවත ලබා ගැනීමේ දෝෂයකි"
                        },
                        genericError: {
                            description: "අවසර ලත් CORS ප්‍රභවයන් ලබා ගැනීමට නොහැකි විය.",
                            message: "යම් දෝෂයක් ඇති වී ඇත"
                        },
                        success: {
                            description: "අවසර ලත් CORS ප්‍රභවයන් සාර්ථකව ලබා ගන්නා ලදි.",
                            message: "නැවත ලබා ගැනීම සාර්ථකයි"
                        }
                    },
                    fetchApplication: {
                        error: {
                            description: "{{description}}",
                            message: "නැවත ලබා ගැනීමේ දෝෂයකි"
                        },
                        genericError: {
                            description: "යෙදුම් විස්තර ලබා ගැනීමට නොහැකි විය.",
                            message: "යම් දෝෂයක් ඇති වී ඇත"
                        },
                        success: {
                            description: "අයදුම්පත් විස්තර සාර්ථකව ලබා ගන්නා ලදි.",
                            message: "නැවත ලබා ගැනීම සාර්ථකයි"
                        }
                    },
                    fetchApplications: {
                        error: {
                            description: "{{description}}",
                            message: "නැවත ලබා ගැනීමේ දෝෂයකි"
                        },
                        genericError: {
                            description: "යෙදුම් ලබා ගැනීමට නොහැකි විය",
                            message: "යම් දෝෂයක් ඇති වී ඇත"
                        },
                        success: {
                            description: "අයදුම්පත් සාර්ථකව ලබා ගන්නා ලදි.",
                            message: "නැවත ලබා ගැනීම සාර්ථකයි"
                        }
                    },
                    fetchCustomInboundProtocols: {
                        error: {
                            description: "{{description}}",
                            message: "නැවත ලබා ගැනීමේ දෝෂයකි"
                        },
                        genericError: {
                            description: "අභිරුචි අභ්‍යන්තර ප්‍රොටෝකෝල ලබා ගැනීමේදී දෝෂයක් ඇතිවිය.",
                            message: "නැවත ලබා ගැනීමේ දෝෂයකි"
                        },
                        success: {
                            description: "අභිරුචි අභ්‍යන්තර ප්‍රොටෝකෝල සාර්ථකව ලබා ගන්නා ලදි.",
                            message: "නැවත ලබා ගැනීම සාර්ථකයි"
                        }
                    },
                    fetchInboundProtocols: {
                        error: {
                            description: "{{description}}",
                            message: "නැවත ලබා ගැනීමේ දෝෂයකි"
                        },
                        genericError: {
                            description: "පවතින අභ්‍යන්තර ප්‍රොටෝකෝල ලබා ගැනීමේදී දෝෂයක් ඇතිවිය.",
                            message: "නැවත ලබා ගැනීමේ දෝෂයකි"
                        },
                        success: {
                            description: "ඇතුළට එන ප්‍රොටෝකෝල සාර්ථකව ලබා ගන්නා ලදි.",
                            message: "නැවත ලබා ගැනීම සාර්ථකයි"
                        }
                    },
                    fetchOIDCIDPConfigs: {
                        error: {
                            description: "{{description}}",
                            message: "නැවත ලබා ගැනීමේ දෝෂයකි"
                        },
                        genericError: {
                            description: "OIDC යෙදුම සඳහා IDP වින්‍යාසයන් ලබා ගැනීමේදී දෝෂයක් සිදුවිය.",
                            message: "නැවත ලබා ගැනීමේ දෝෂයකි"
                        },
                        success: {
                            description: "OIDC යෙදුම සඳහා IDP වින්‍යාසයන් සාර්ථකව ලබා ගන්නා ලදි.",
                            message: "නැවත ලබා ගැනීම සාර්ථකයි"
                        }
                    },
                    fetchOIDCServiceEndpoints: {
                        genericError: {
                            description: "OIDC යෙදුම් සඳහා සේවාදායක අන්ත ලක්ෂ්‍ය ලබා ගැනීමේදී දෝෂයක් ඇතිවිය.",
                            message: "Un problème est survenu"
                        }
                    },
                    fetchProtocolMeta: {
                        error: {
                            description: "{{description}}",
                            message: "නැවත ලබා ගැනීමේ දෝෂයකි"
                        },
                        genericError: {
                            description: "ප්‍රොටොකෝලය පාර-දත්ත ලබා ගැනීමේදී දෝෂයක් ඇතිවිය.",
                            message: "නැවත ලබා ගැනීමේ දෝෂයකි"
                        },
                        success: {
                            description: "ප්‍රොටොකෝලය පාර-දත්ත සාර්ථකව ලබා ගන්නා ලදි.",
                            message: "නැවත ලබා ගැනීම සාර්ථකයි"
                        }
                    },
                    fetchSAMLIDPConfigs: {
                        error: {
                            description: "{{description}}",
                            message: "නැවත ලබා ගැනීමේ දෝෂයකි"
                        },
                        genericError: {
                            description: "SAML යෙදුම සඳහා IDP වින්‍යාසයන් ලබා ගැනීමේදී දෝෂයක් ඇතිවිය.",
                            message: "නැවත ලබා ගැනීමේ දෝෂයකි"
                        },
                        success: {
                            description: "SAML යෙදුම සඳහා IDP වින්‍යාසයන් සාර්ථකව ලබා ගන්නා ලදි.",
                            message: "නැවත ලබා ගැනීම සාර්ථකයි"
                        }
                    },
                    fetchTemplate: {
                        error: {
                            description: "{{description}}",
                            message: "නැවත ලබා ගැනීමේ දෝෂයකි"
                        },
                        genericError: {
                            description: "යෙදුම් ආකෘති දත්ත ලබා ගැනීමේදී දෝෂයක් ඇතිවිය",
                            message: "යම් දෝෂයක් ඇති වී ඇත"
                        },
                        success: {
                            description: "යෙදුම් ආකෘති දත්ත සාර්ථකව ලබා ගන්නා ලදි.",
                            message: "නැවත ලබා ගැනීම සාර්ථකයි"
                        }
                    },
                    fetchTemplates: {
                        error: {
                            description: "{{description}}",
                            message: "නැවත ලබා ගැනීමේ දෝෂයකි"
                        },
                        genericError: {
                            description: "යෙදුම් සැකිලි ලබා ගැනීමට නොහැකි විය.",
                            message: "යම් දෝෂයක් ඇති වී ඇත"
                        },
                        success: {
                            description: "යෙදුම් සැකිලි සාර්ථකව ලබා ගන්නා ලදි.",
                            message: "නැවත ලබා ගැනීම සාර්ථකයි"
                        }
                    },
                    getInboundProtocolConfig: {
                        error: {
                            description: "{{description}}",
                            message: "නැවත ලබා ගැනීමේ දෝෂයකි"
                        },
                        genericError: {
                            description: "ප්‍රොටොකෝලය වින්‍යාස කර ගැනීමේදී දෝෂයක් ඇතිවිය.",
                            message: "නැවත ලබා ගැනීමේ දෝෂයකි"
                        },
                        success: {
                            description: "අභ්‍යන්තර ප්‍රොටොකෝල් වින්‍යාසයන් සාර්ථකව ලබා ගන්නා ලදි.",
                            message: "නැවත ලබා ගැනීම සාර්ථකයි"
                        }
                    },
                    regenerateSecret: {
                        error: {
                            description: "{{description}}",
                            message: "දෝෂය නැවත උත්පාදනය කරන්න"
                        },
                        genericError: {
                            description: "යෙදුම ප්‍රතිනිර්මාණය කිරීමේදී දෝෂයක් සිදුවිය",
                            message: "යම් දෝෂයක් ඇති වී ඇත"
                        },
                        success: {
                            description: "යෙදුම සාර්ථකව ප්‍රතිනිර්මාණය කරන ලදි",
                            message: "නැවත උත්පාදනය සාර්ථකයි"
                        }
                    },
                    revokeApplication: {
                        error: {
                            description: "{{description}}",
                            message: "දෝෂය අවලංගු කරන්න"
                        },
                        genericError: {
                            description: "යෙදුම අවලංගු කිරීමේදී දෝෂයක් ඇතිවිය",
                            message: "යම් දෝෂයක් ඇති වී ඇත"
                        },
                        success: {
                            description: "යෙදුම සාර්ථකව අවලංගු කරන ලදි",
                            message: "අවලංගු කිරීම සාර්ථකයි"
                        }
                    },
                    updateAdvancedConfig: {
                        error: {
                            description: "{{description}}",
                            message: "යාවත්කාලීන දෝෂයකි"
                        },
                        genericError: {
                            description: "උසස් වින්‍යාසයන් අතරතුර දෝෂයක් සිදුවිය.",
                            message: "යම් දෝෂයක් ඇති වී ඇත"
                        },
                        success: {
                            description: "උසස් වින්‍යාසයන් සාර්ථකව යාවත්කාලීන කරන ලදි.",
                            message: "යාවත්කාලීන කිරීම සාර්ථකයි"
                        }
                    },
                    updateApplication: {
                        error: {
                            description: "{{description}}",
                            message: "යාවත්කාලීන දෝෂයකි"
                        },
                        genericError: {
                            description: "යෙදුම් යාවත්කාලීන කිරීමට අපොහොසත් විය",
                            message: "යම් දෝෂයක් ඇති වී ඇත"
                        },
                        success: {
                            description: "යෙදුම සාර්ථකව යාවත්කාලීන කරන ලදි.",
                            message: "යාවත්කාලීන කිරීම සාර්ථකයි"
                        }
                    },
                    updateAuthenticationFlow: {
                        error: {
                            description: "{{description}}",
                            message: "යාවත්කාලීන දෝෂයකි"
                        },
                        genericError: {
                            description: "යෙදුමේ සත්‍යාපන ප්‍රවාහය යාවත්කාලීන කිරීමේදී දෝෂයක් ඇතිවිය",
                            message: "යම් දෝෂයක් ඇති වී ඇත"
                        },
                        success: {
                            description: "යෙදුමේ සත්‍යාපන ප්‍රවාහය සාර්ථකව යාවත්කාලීන කරන ලදි",
                            message: "යාවත්කාලීන කිරීම සාර්ථකයි"
                        }
                    },
                    updateClaimConfig: {
                        error: {
                            description: "{{description}}",
                            message: "යාවත්කාලීන දෝෂයකි"
                        },
                        genericError: {
                            description: "හිමිකම් වින්‍යාසය යාවත්කාලීන කිරීමේදී දෝෂයක් ඇතිවිය",
                            message: "යම් දෝෂයක් ඇති වී ඇත"
                        },
                        success: {
                            description: "හිමිකම් වින්‍යාසය සාර්ථකව යාවත්කාලීන කරන ලදි",
                            message: "යාවත්කාලීන කිරීම සාර්ථකයි"
                        }
                    },
                    updateInboundProtocolConfig: {
                        error: {
                            description: "{{description}}",
                            message: "යාවත්කාලීන කිරීමේ දෝෂයකි"
                        },
                        genericError: {
                            description: "අභ්‍යන්තර ප්‍රොටොකෝල් වින්‍යාසයන් යාවත්කාලීන කිරීමේදී දෝෂයක් ඇතිවිය.",
                            message: "යම් දෝෂයක් ඇති වී ඇත"
                        },
                        success: {
                            description: "අභ්‍යන්තර ප්‍රොටොකෝල් වින්‍යාසයන් සාර්ථකව යාවත්කාලීන කරන ලදි.",
                            message: "යාවත්කාලීන කිරීම සාර්ථකයි"
                        }
                    },
                    updateInboundProvisioningConfig: {
                        error: {
                            description: "{{description}}",
                            message: "යාවත්කාලීන කිරීමේ දෝෂයකි"
                        },
                        genericError: {
                            description: "ප්‍රතිපාදන වින්‍යාස කිරීමේදී දෝෂයක් ඇතිවිය.",
                            message: "යම් දෝෂයක් ඇති වී ඇත"
                        },
                        success: {
                            description: "ප්‍රතිපාදන වින්‍යාසයන් සාර්ථකව යාවත්කාලීන කරන ලදි.",
                            message: "යාවත්කාලීන කිරීම සාර්ථකයි"
                        }
                    },
                    updateOutboundProvisioning: {
                        genericError: {
                            description: "පිටතට යන ප්‍රතිපාදන IDP දැනටමත් පවතී.",
                            message: "යාවත්කාලීන කිරීමේ දෝෂයකි"
                        }
                    },
                    updateProtocol: {
                        error: {
                            description: "{{description}}",
                            message: "යාවත්කාලීන කිරීමේ දෝෂයකි"
                        },
                        genericError: {
                            description: "යෙදුම යාවත්කාලීන කිරීමේදී දෝෂයක් ඇතිවිය",
                            message: "යම් දෝෂයක් ඇති වී ඇත"
                        },
                        success: {
                            description: "නව ප්‍රොටොකෝල් වින්‍යාසයන් සාර්ථකව එක් කරන ලදි.",
                            message: "යාවත්කාලීන කිරීම සාර්ථකයි"
                        }
                    }
                },
                placeholders: {
                    emptyAttributesList: {
                        action: "ගුණාංගය එක් කරන්න",
                        subtitles: "මේ වන විට යෙදුමට කිසිදු ගුණාංගයක් තෝරාගෙන නොමැත.",
                        title: "කිසිදු ගුණාංගයක් එකතු කර නැත"
                    },
                    emptyAuthenticatorStep: {
                        subtitles: {
                            0: "ඉහත ඕනෑම සත්‍යාපකය ඇදගෙන යන්න",
                            1: "සත්‍යාපන අනුක්‍රමයක් තැනීමට."
                        },
                        title: null
                    },
                    emptyAuthenticatorsList: {
                        subtitles: "{{type}} සත්‍යාපකයන් කිසිවක් සොයාගත නොහැකි විය",
                        title: null
                    },
                    emptyList: {
                        action: "නව යෙදුම",
                        subtitles: {
                            0: "දැනට අයදුම්පත් නොමැත.",
                            1: "පහත සඳහන් දෑ අනුගමනය කිරීමෙන් ඔබට පහසුවෙන් නව යෙදුමක් එක් කළ හැකිය",
                            2: "යෙදුම් නිර්මාණය කිරීමේ විශාරදයේ පියවර."
                        },
                        title: "නව යෙදුමක් එක් කරන්න"
                    },
                    emptyOutboundProvisioningIDPs: {
                        action: "නව IDP",
                        subtitles: "මෙම යෙදුමට පිටතට යන ප්‍රතිපාදන අවතැන්වූවන් වින්‍යාස කර නොමැත. " +
                            "එය බැලීමට මෙහි අවතැන්වූවෙකු එක් කරන්න.",
                        title: "පිටතට යන ප්‍රතිපාදන අවතැන්වූවන් නැත"
                    },
                    emptyProtocolList: {
                        action: "නව කෙටුම්පත",
                        subtitles: {
                            0: "දැනට කිසිදු ප්‍රොටෝකෝලයක් නොමැත.",
                            1: "භාවිතා කිරීමෙන් ඔබට පහසුවෙන් ප්‍රොටෝකෝලය එක් කළ හැකිය",
                            2: "පූර්ව නිශ්චිත සැකිලි."
                        },
                        title: "ප්රොටෝකෝලයක් එක් කරන්න"
                    }
                },
                popups: {
                    appStatus: {
                        active: {
                            content: "යෙදුම සක්‍රියයි.",
                            header: "ක්‍රියාකාරී",
                            subHeader: ""
                        },
                        notConfigured: {
                            content: "යෙදුම වින්‍යාස කර නොමැත. කරුණාකර ප්‍රවේශ වින්‍යාසයන් වින්‍යාස කරන්න.",
                            header: "වින්‍යාස කර නොමැත",
                            subHeader: ""
                        },
                        revoked: {
                            content: "යෙදුම අවලංගු කර ඇත. කරුණාකර ප්‍රවේශය වින්‍යාස කිරීමේදී යෙදුම නැවත " +
                                "සක්‍රිය කරන්න.",
                            header: "අවලංගු කරන ලදි",
                            subHeader: ""
                        }
                    }
                },
                templates: {
                    manualSetup: {
                        heading: "අතින් සැකසුම",
                        subHeading: "අභිරුචි වින්‍යාසයන් සහිත යෙදුමක් සාදන්න."
                    },
                    quickSetup: {
                        heading: "ඉක්මන් පිහිටුවීම්",
                        subHeading: "ඔබගේ යෙදුම් නිර්මාණය වේගවත් කිරීම සඳහා පූර්ව නිශ්චිත යෙදුම් සැකිලි සමූහයක්."
                    }
                },
                wizards: {
                    minimalAppCreationWizard: {
                        help: {
                            heading: "උදව්",
                            subHeading: "මඟ පෙන්වීමක් ලෙස පහත සඳහන් දෑ භාවිතා කරන්න"
                        }
                    }
                }
            },
            footer: {
                copyright: "WSO2 හැඳුනුම් සේවාදායකය © {{year}}"
            },
            header: {
                links: {
                    adminPortalNav: "පරිපාලක ද්වාරය",
                    userPortalNav: "මගේ ගිණුම"
                }
            },
            helpPanel: {
                actions: {
                    close: "වසන්න",
                    open: "උදව් පැනලය විවෘත කරන්න",
                    pin: "පින්",
                    unPin: "ඉවත් කරන්න"
                },
                notifications: {
                    pin: {
                        success: {
                            description: "ඔබ පැහැදිලිව වෙනස් නොකළහොත් උපකාරක පැනලය සැමවිටම {{state} වනු ඇත.",
                            message: "උදව් පැනලය {{state}}"
                        }
                    }
                }
            },
            idp: {
                advancedSearch: {
                    form: {
                        inputs: {
                            filterAttribute: {
                                placeholder: "උදා. නම, සබල කර ඇත."
                            },
                            filterCondition: {
                                placeholder: "උදා. ආදිය සමඟ ආරම්භ වේ."
                            },
                            filterValue: {
                                placeholder: "උදා. ගූගල්, GitHub යනාදිය."
                            }
                        }
                    },
                    placeholder: "IDP නාමයෙන් සොයන්න"
                },
                buttons: {
                    addAttribute: "ගුණාංගය එක් කරන්න",
                    addAuthenticator: "නව සත්‍යාපකය",
                    addCertificate: "නව සහතිකය",
                    addConnector: "නව සම්බන්ධකය",
                    addIDP: "නව හැඳුනුම්පත් සපයන්නා"
                },
                confirmations: {
                    deleteAuthenticator: {
                        assertionHint: "තහවුරු කිරීමට කරුණාකර <1> {{name}} </1> ටයිප් කරන්න.",
                        content: "ඔබ මෙම සත්‍යාපකය මකා දැමුවහොත් ඔබට එය නැවත ලබා ගත නොහැක. මෙය මත " +
                            "පදනම් වූ සියලුම යෙදුම් ද වැඩ කිරීම නවතා දැමිය හැකිය. කරුණාකර ප්‍රවේශමෙන් ඉදිරියට යන්න.",
                        header: "ඔබට විශ්වාසද?",
                        message: "මෙම ක්‍රියාව ආපසු හැරවිය නොහැකි අතර සත්‍යාපකය ස්ථිරවම මකා දමනු ඇත."
                    },
                    deleteConnector: {
                        assertionHint: "තහවුරු කිරීමට කරුණාකර <1> {{name}} </1> ටයිප් කරන්න.",
                        content: "ඔබ මෙම සම්බන්ධකය මකා දැමුවහොත්, ඔබට එය නැවත ලබා ගත නොහැක. " +
                            "කරුණාකර ප්‍රවේශමෙන් ඉදිරියට යන්න.",
                        header: "ඔබට විශ්වාසද?",
                        message: "මෙම ක්‍රියාව ආපසු හැරවිය නොහැකි අතර සම්බන්ධකය ස්ථිරවම මකා දමනු ඇත."
                    },
                    deleteIDP: {
                        assertionHint: "තහවුරු කිරීමට කරුණාකර <1> {{name}} </1> ටයිප් කරන්න.",
                        content: "ඔබ මෙම අනන්‍යතා සැපයුම්කරු මකා දැමුවහොත්, ඔබට එය නැවත ලබා ගත නොහැක. " +
                            "මෙය මත පදනම් වූ සියලුම යෙදුම් ද වැඩ කිරීම නවතා දැමිය හැකිය. කරුණාකර"
                                + " ප්‍රවේශමෙන් ඉදිරියට යන්න.",
                        header: "ඔබට විශ්වාසද?",
                        message: "මෙම ක්‍රියාව ආපසු හැරවිය නොහැකි අතර අවතැන්වූවන් ස්ථිරවම මකා දමනු ඇත."
                    }
                },
                dangerZoneGroup: {
                    deleteIDP: {
                        actionTitle: "හැඳුනුම්පත් සපයන්නා මකන්න",
                        header: "අනන්‍යතා සැපයුම්කරු මකන්න",
                        subheader: "ඔබ අනන්‍යතා සැපයුම්කරුවෙකු මකා දැමූ පසු, ආපසු යාමක් නොමැත. " +
                            "කරුණාකර ස්ථිර වන්න."
                    },
                    disableIDP: {
                        actionTitle: "හැඳුනුම්පත් සපයන්නා සක්‍රීය කරන්න",
                        header: "අනන්‍යතා සැපයුම්කරු සක්‍රීය කරන්න",
                        subheader: "ඔබ අනන්‍යතා සැපයුම්කරුවෙකු අක්‍රිය කළ පසු, ඔබ එය නැවත සක්‍රිය කරන තුරු එය " +
                            "තවදුරටත් භාවිතා කළ නොහැක. කරුණාකර ස්ථිර වන්න."
                    },
                    header: "අන්තරා කලාපය"
                },
                forms: {
                    advancedConfigs: {
                        alias: {
                            hint: "ෆෙඩරල් අනන්‍යතා සැපයුම්කරුගේ අන්වර්ථ නාමයක් මගින් නේවාසික අනන්‍යතා " +
                                "සැපයුම්කරු හඳුනන්නේ නම්, එය මෙහි සඳහන් කරන්න.",
                            label: "අන්වර්ථය"
                        },
                        certificateType: {
                            certificateJWKS: {
                                label: "JWKS අන්ත ලක්ෂ්‍යය භාවිතා කරන්න",
                                placeholder: "අගය JWKS ආකෘතියෙන් සහතිකය විය යුතුය.",
                                validations: {
                                    empty: "සහතික වටිනාකම අවශ්‍ය වේ"
                                }
                            },
                            certificatePEM: {
                                label: "සහතිකය ලබා දෙන්න",
                                placeholder: "අගය PEM URL එකක් විය යුතුය.",
                                validations: {
                                    empty: "සහතික වටිනාකම අවශ්‍ය වේ"
                                }
                            },
                            hint: "වර්ගය JWKS නම්, අගය JWKS URL එකක් විය යුතුය. වර්ගය PEM නම්, අගය PEM " +
                                "ආකෘතියෙන් සහතිකය විය යුතුය.",
                            label: "සහතික වර්ගය තෝරන්න"
                        },
                        federationHub: {
                            hint: "මෙය ෆෙඩරේෂන් හබ් අනන්‍යතා සැපයුම්කරුවකු වෙත යොමු කරන්නේ දැයි පරීක්ෂා කරන්න",
                            label: "සම්මේලන කේන්ද්‍රය"
                        },
                        homeRealmIdentifier: {
                            hint: "මෙම අනන්‍යතා සැපයුම්කරු සඳහා ගෘහස්ථ හඳුනාගැනීමේ යන්ත්‍රය ඇතුළත් කරන්න",
                            label: "මුල් පිටුව හඳුනාගැනීමේ යන්ත්‍රය"
                        }
                    },
                    attributeSettings: {
                        attributeListItem: {
                            validation: {
                                empty: "අගය ඇතුලත් කරන්න"
                            }
                        },
                        attributeMapping: {
                            attributeColumnHeader: "ගුණාංගය",
                            attributeMapColumnHeader: "අනන්‍යතා සැපයුම්කරුගේ ගුණාංගය",
                            attributeMapInputPlaceholderPrefix: "උදා",
                            componentHeading: "සිතියම්ගත කිරීම ආරෝපණය කරයි",
                            hint: "හැඳුනුම් සැපයුම්කරුගේ සහය දක්වන ගුණාංග එක් කරන්න"
                        },
                        attributeProvisioning: {
                            attributeColumnHeader: {
                                0: "ගුණාංගය",
                                1: "අනන්‍යතා සැපයුම්කරුගේ ගුණාංගය"
                            },
                            attributeMapColumnHeader: "පෙරනිමි අගය",
                            attributeMapInputPlaceholderPrefix: "උදා",
                            componentHeading: "ගුණාංග තෝරා ගැනීම",
                            hint: "ප්‍රතිපාදන සඳහා අවශ්‍ය ගුණාංග සඳහන් කරන්න"
                        },
                        attributeSelection: {
                            searchAttributes: {
                                placeHolder: "ගුණාංග සොයන්න"
                            }
                        }
                    },
                    authenticatorAccordion: {
                        default: {
                            0: "පෙරනිමිය",
                            1: "පෙරනිමිය කරන්න"
                        },
                        enable: {
                            0: "සක්‍රීය කර ඇත",
                            1: "ආබාඅක්‍රීය කර ඇතධිතයි"
                        }
                    },
                    common: {
                        customProperties: "අභිරුචි දේපල",
                        invalidQueryParamErrorMessage: "මේවා වලංගු විමසුම් පරාමිතීන් නොවේ",
                        invalidURLErrorMessage: "මෙය වලංගු URL එකක් නොවේ",
                        requiredErrorMessage: "මෙය අවශ්‍ය වේ"
                    },
                    generalDetails: {
                        description: {
                            hint: "අනන්‍යතා සැපයුම්කරු පිළිබඳ අර්ථවත් විස්තරයක්.",
                            label: "විස්තර",
                            placeholder: "අනන්‍යතා සැපයුම්කරුගේ විස්තරයක් ඇතුළත් කරන්න."
                        },
                        image: {
                            hint: "අනන්‍යතා සැපයුම්කරුගේ රූපය විමසීමට URL ය.",
                            label: "හැඳුනුම්පත් සපයන්නාගේ පින්තූර URL",
                            placeholder: "උදා. https"
                        },
                        name: {
                            hint: "මෙම අනන්‍යතා සැපයුම්කරු සඳහා අද්විතීය නමක් ඇතුළත් කරන්න.",
                            label: "හැඳුනුම්පත් සපයන්නාගේ නම",
                            placeholder: "අනන්‍යතා සැපයුම්කරු සඳහා නමක් ඇතුළත් කරන්න.",
                            validations: {
                                duplicate: "මෙම නම සමඟ අනන්‍යතා සැපයුම්කරුවෙකු දැනටමත් සිටී",
                                empty: "අනන්‍යතා සැපයුම්කරුගේ නම අවශ්‍ය වේ"
                            }
                        }
                    },
                    jitProvisioning: {
                        enableJITProvisioning: {
                            hint: "මෙම අනන්‍යතා සැපයුම්කරුගෙන් ෆෙඩරල් කරන ලද පරිශීලකයින්ට දේශීයව " +
                                "සැපයිය යුතුදැයි නියම කරයි.",
                            label: "යන්තම් ප්‍රතිපාදන සැපයීම සක්‍රීය කරන්න"
                        },
                        provisioningScheme: {
                            children: {
                                0: "පරිශීලක නාමය, මුරපදය සහ කැමැත්ත සඳහා විමසන්න",
                                1: "මුරපදය සහ කැමැත්ත සඳහා විමසන්න",
                                2: "කැමැත්ත සඳහා විමසන්න",
                                3: "නිශ්ශබ්දව සැපයීම"
                            },
                            hint: "පරිශීලකයින්ට ප්‍රතිපාදන ලබා දුන් විට භාවිතා කළ යුතු යෝජනා ක්‍රමය තෝරන්න.",
                            label: "ප්‍රතිපාදන යෝජනා ක්‍රමය"
                        },
                        provisioningUserStoreDomain: {
                            hint: "ප්‍රතිපාදන භාවිතා කරන්නන් සඳහා පරිශීලක ගබඩා වසම් නාමය තෝරන්න.",
                            label: "සෑම විටම පරිශීලකයින්ට ප්‍රතිපාදන සැපයීම සඳහා පරිශීලක ගබඩා වසම"
                        }
                    },
                    outboundConnectorAccordion: {
                        default: "පෙරනිමිය කරන්න",
                        enable: "සක්‍රීය කර ඇත"
                    },
                    outboundProvisioningRoles: {
                        heading: "පිටතට යන ප්‍රතිපාදන කාර්යභාරය",
                        hint: "හැඳුනුම්පත් සපයන්නා ලෙස පිටතට යන ප්‍රතිපාදන භූමිකාවන් තෝරන්න සහ එකතු කරන්න",
                        label: "කාර්යභාරය",
                        placeHolder: "භූමිකාව තෝරන්න",
                        popup: {
                            content: "භූමිකාව එක් කරන්න"
                        }
                    },
                    roleMapping: {
                        heading: "භූමිකාව සිතියම්ගත කිරීම",
                        hint: "අනන්‍යතා සැපයුම්කරුගේ භූමිකාවන් සමඟ දේශීය භූමිකාවන් සිතියම් ගත කරන්න",
                        keyName: "දේශීය කාර්යභාරය",
                        validation: {
                            duplicateKeyErrorMsg: "මෙම භූමිකාව දැනටමත් සිතියම් ගත කර ඇත. කරුණාකර වෙනත්"
                                + " භූමිකාවක් තෝරන්න",
                            keyRequiredMessage: "කරුණාකර දේශීය භූමිකාව ඇතුළත් කරන්න",
                            valueRequiredErrorMessage: "සිතියම් ගත කිරීමට කරුණාකර අවතැන්වූවන්ගේ"
                                + " භූමිකාවක් ඇතුළත් කරන්න"
                        },
                        valueName: "හැඳුනුම්පත් සපයන්නාගේ කාර්යභාරය"
                    },
                    uriAttributeSettings: {
                        role: {
                            heading: "කාර්යභාරය",
                            hint: "හැඳුනුම් සැපයුම්කරුගේ භූමිකාවන් හඳුනා ගන්නා ගුණාංගය නියම කරයි",
                            label: "භූමිකාව",
                            placeHolder: "ගුණාංගය තෝරන්න",
                            validation: {
                                empty: "කරුණාකර භූමිකාව සඳහා ලක්ෂණයක් තෝරන්න"
                            }
                        },
                        subject: {
                            heading: "විෂය",
                            hint: "අනන්‍යතා සැපයුම්කරු තුළ පරිශීලකයා හඳුනා ගන්නා ගුණාංගය නියම කරයි",
                            label: "විෂය ගුණාංගය",
                            placeHolder: "ගුණාංගය තෝරන්න",
                            validation: {
                                empty: "කරුණාකර විෂය සඳහා ලක්ෂණයක් තෝරන්න"
                            }
                        }
                    }
                },
                helpPanel: {
                    tabs: {
                        samples: {
                            content: {
                                docs: {
                                    goBack: "ආපසු යන්න",
                                    hint: "අදාළ ලියකියවිලි පරීක්ෂා කිරීමට පහත හැඳුනුම්පත් සපයන්නාගේ " +
                                        "වර්ග මත ක්ලික් කරන්න.",
                                    title: "අච්චු වර්ගයක් තෝරන්න"
                                }
                            },
                            heading: "ලියකියවිලි"
                        }
                    }
                },
                list: {
                    actions: "ක්‍රියා",
                    name: "නම"
                },
                modals: {
                    addAuthenticator: {
                        subTitle: "අනන්‍යතා සැපයුම්කරු වෙත නව සත්‍යාපකය එක් කරන්න",
                        title: "නව සත්‍යාපකය එක් කරන්න"
                    },
                    addCertificate: {
                        subTitle: "හැඳුනුම්පත් සපයන්නාට නව සහතිකයක් එක් කරන්න",
                        title: "නව සහතිකයක් එක් කරන්න"
                    },
                    addProvisioningConnector: {
                        subTitle: "නව පිටතට යන ප්‍රතිපාදන සම්බන්ධකය එක් කිරීමට පියවර අනුගමනය කරන්න",
                        title: "පිටතට යන ප්‍රතිපාදන සම්බන්ධකය සාදන්න"
                    },
                    attributeSelection: {
                        content: {
                            searchPlaceholder: "ගුණාංග සොයන්න"
                        },
                        subTitle: "නව ගුණාංග එකතු කරන්න හෝ පවතින ගුණාංග ඉවත් කරන්න.",
                        title: "ගුණාංග තේරීම යාවත්කාලීන කරන්න"
                    }
                },
                notifications: {
                    addFederatedAuthenticator: {
                        error: {
                            description: "{{ description }}",
                            message: "දෝෂයක් සාදන්න"
                        },
                        genericError: {
                            description: "සත්‍යාපකය එකතු කිරීමේදී දෝෂයක් ඇතිවිය.",
                            message: "දෝෂයක් සාදන්න"
                        },
                        success: {
                            description: "සත්‍යාපකය සාර්ථකව එක් කරන ලදි.",
                            message: "සාර්ථක ලෙස නිර්මාණය කරන්න"
                        }
                    },
                    addIDP: {
                        error: {
                            description: "{{ description }}",
                            message: "දෝෂයක් සාදන්න"
                        },
                        genericError: {
                            description: "අනන්‍යතා සැපයුම්කරු නිර්මාණය කිරීමේදී දෝෂයක් ඇතිවිය.",
                            message: "දෝෂයක් සාදන්න"
                        },
                        success: {
                            description: "අනන්‍යතා සැපයුම්කරු සාර්ථකව නිර්මාණය කළේය.",
                            message: "සාර්ථක ලෙස නිර්මාණය කරන්න"
                        }
                    },
                    changeCertType: {
                        jwks: {
                            description: "ඔබ සහතිකයක් එකතු කර ඇත්නම් එය JWKS අන්ත ලක්ෂ්‍යය මගින් අභිබවා යනු " +
                                "ඇති බව කරුණාවෙන් සලකන්න.",
                            message: "අවවාදයයි!"
                        },
                        pem: {
                            description: "ඔබ JWKS අන්ත ලක්ෂ්‍යයක් එකතු කර ඇත්නම් එය සහතිකය මගින් අභිබවා " +
                                "යනු ඇති බව කරුණාවෙන් සලකන්න.",
                            message: "අවවාදයයි!"
                        }
                    },
                    deleteDefaultAuthenticator: {
                        error: {
                            description: "පෙරනිමි ෆෙඩරේටඩ් සත්‍යාපකය මකා දැමිය නොහැක.",
                            message: "ෆෙඩරේටඩ් සත්‍යාපන මකාදැමීමේ දෝෂයකි"
                        },
                        genericError: null,
                        success: null
                    },
                    deleteDefaultConnector: {
                        error: {
                            description: "පෙරනිමි පිටතට යන ප්‍රතිපාදන සම්බන්ධකය මකා දැමිය නොහැක.",
                            message: "පිටතට යන සම්බන්ධක මකාදැමීමේ දෝෂයකි"
                        },
                        genericError: null,
                        success: null
                    },
                    deleteIDP: {
                        error: {
                            description: "{{ විස්තර }}",
                            message: "හැඳුනුම්පත් සපයන්නා මකාදැමීමේ දෝෂය"
                        },
                        genericError: {
                            description: "අනන්‍යතා සැපයුම්කරු මකාදැමීමේදී දෝෂයක් ඇතිවිය",
                            message: "හැඳුනුම්පත් සපයන්නා මකාදැමීමේ දෝෂය"
                        },
                        success: {
                            description: "හැඳුනුම්පත් සපයන්නා සාර්ථකව මකා දැමීය",
                            message: "මකන්න සාර්ථකයි"
                        }
                    },
                    disableAuthenticator: {
                        error: {
                            description: "ඔබට සුපුරුදු සත්‍යාපකය අක්‍රිය කළ නොහැක.",
                            message: "දත්ත වලංගු කිරීමේ දෝෂයකි"
                        },
                        genericError: {
                            description: "",
                            message: ""
                        },
                        success: {
                            description: "",
                            message: ""
                        }
                    },
                    disableOutboundProvisioningConnector: {
                        error: {
                            description: "සුපුරුදු පිටතට යන ප්‍රතිපාදන සම්බන්ධකය ඔබට අක්‍රිය කළ නොහැක.",
                            message: "දත්ත වලංගු කිරීමේ දෝෂයකි"
                        },
                        genericError: {
                            description: "",
                            message: ""
                        },
                        success: {
                            description: "",
                            message: ""
                        }
                    },
                    duplicateCertificateUpload: {
                        error: {
                            description: "අවතැන්වූවන් සඳහා සහතිකය දැනටමත් පවතී",
                            message: "සහතික අනුපිටපත් දෝෂයකි"
                        },
                        genericError: {
                            description: "",
                            message: ""
                        },
                        success: {
                            description: "",
                            message: ""
                        }
                    },
                    getAllLocalClaims: {
                        error: {
                            description: "{{ description }}",
                            message: "ලබා ගැනීමේ දෝෂයකි"
                        },
                        genericError: {
                            description: "දේශීය හිමිකම් ලබා ගැනීමේදී දෝෂයක් ඇතිවිය.",
                            message: "ලබා ගැනීමේ දෝෂයකි"
                        },
                        success: {
                            description: "",
                            message: ""
                        }
                    },
                    getFederatedAuthenticator: {
                        error: {
                            description: "{{ description }}",
                            message: "නැවත ලබා ගැනීමේ දෝෂයකි"
                        },
                        genericError: {
                            description: "",
                            message: "නැවත ලබා ගැනීමේ දෝෂයකි"
                        },
                        success: {
                            description: "",
                            message: ""
                        }
                    },
                    getFederatedAuthenticatorMetadata: {
                        error: {
                            description: "{{ description }}",
                            message: "නැවත ලබා ගැනීමේ දෝෂයකි"
                        },
                        genericError: {
                            description: "සත්‍යාපන පාර-දත්ත ලබා ගැනීමේදී දෝෂයක් ඇතිවිය.",
                            message: "නැවත ලබා ගැනීමේ දෝෂයකි"
                        },
                        success: {
                            description: "",
                            message: ""
                        }
                    },
                    getFederatedAuthenticatorsList: {
                        error: {
                            description: "{{ description }}",
                            message: "නැවත ලබා ගැනීමේ දෝෂයකි"
                        },
                        genericError: {
                            description: "",
                            message: "නැවත ලබා ගැනීමේ දෝෂයකි"
                        },
                        success: {
                            description: "",
                            message: ""
                        }
                    },
                    getIDP: {
                        error: {
                            description: "{{ description }}",
                            message: "ලබා ගැනීමේ දෝෂයකි"
                        },
                        genericError: {
                            description: "අනන්‍යතා සැපයුම්කරුගේ තොරතුරු ලබා ගැනීමේදී දෝෂයක් ඇතිවිය",
                            message: "ලබා ගැනීමේ දෝෂයකි"
                        },
                        success: {
                            description: "",
                            message: ""
                        }
                    },
                    getIDPList: {
                        error: {
                            description: "{{ description }}",
                            message: "ලබා ගැනීමේ දෝෂයකි"
                        },
                        genericError: {
                            description: "අනන්‍යතා සපයන්නන් ලබා ගැනීමේදී දෝෂයක් ඇතිවිය",
                            message: "ලබා ගැනීමේ දෝෂයකි"
                        },
                        success: {
                            description: "",
                            message: ""
                        }
                    },
                    getIDPTemplate: {
                        error: {
                            description: "{{ description }}",
                            message: "නැවත ලබා ගැනීමේ දෝෂයකි"
                        },
                        genericError: {
                            description: "අවතැන්වූවන්ගේ අච්චුව ලබා ගැනීමේදී දෝෂයක් ඇතිවිය.",
                            message: "නැවත ලබා ගැනීමේ දෝෂයකි"
                        },
                        success: {
                            description: "",
                            message: ""
                        }
                    },
                    getIDPTemplateList: {
                        error: {
                            description: "{{ description }}",
                            message: "ලබා ගැනීමේ දෝෂයකි"
                        },
                        genericError: {
                            description: "අනන්‍යතා සැපයුම්කරුගේ අච්චු ලැයිස්තුව ලබා ගැනීමේදී දෝෂයක් ඇතිවිය",
                            message: "ලබා ගැනීමේ දෝෂයකි"
                        },
                        success: {
                            description: "",
                            message: ""
                        }
                    },
                    getOutboundProvisioningConnector: {
                        error: {
                            description: "{{ description }}",
                            message: "නැවත ලබා ගැනීමේ දෝෂයකි"
                        },
                        genericError: {
                            description: "පිටතට යන ප්‍රතිපාදන සම්බන්ධක තොරතුරු ලබා ගැනීමේදී දෝෂයක් ඇතිවිය.",
                            message: "නැවත ලබා ගැනීමේ දෝෂයකි"
                        },
                        success: {
                            description: "",
                            message: ""
                        }
                    },
                    getOutboundProvisioningConnectorMetadata: {
                        error: {
                            description: "{{ description }}",
                            message: "නැවත ලබා ගැනීමේ දෝෂයකි"
                        },
                        genericError: {
                            description: "පිටතට යන ප්‍රතිපාදන සම්බන්ධක පාර-දත්ත ලබා ගැනීමේදී දෝෂයක් ඇතිවිය.",
                            message: "නැවත ලබා ගැනීමේ දෝෂයකි"
                        },
                        success: {
                            description: "",
                            message: ""
                        }
                    },
                    getOutboundProvisioningConnectorsList: {
                        error: {
                            description: "{{ description }}",
                            message: "නැවත ලබා ගැනීමේ දෝෂයකි"
                        },
                        genericError: {
                            description: "පිටතට යන ප්‍රතිපාදන සම්බන්ධක ලැයිස්තුව ලබා ගැනීමේදී දෝෂයක් ඇතිවිය.",
                            message: "නැවත ලබා ගැනීමේ දෝෂයකි"
                        },
                        success: {
                            description: "",
                            message: ""
                        }
                    },
                    getRolesList: {
                        error: {
                            description: "{{ description }}",
                            message: "ලබා ගැනීමේ දෝෂයකි"
                        },
                        genericError: {
                            description: "භූමිකාවන් ලබා ගැනීමේදී දෝෂයක් ඇතිවිය",
                            message: "ලබා ගැනීමේ දෝෂයකි"
                        },
                        success: {
                            description: "",
                            message: ""
                        }
                    },
                    submitAttributeSettings: {
                        error: {
                            description: "සියලුම අනිවාර්ය ගුණාංග වින්‍යාස කිරීමට අවශ්‍යය.",
                            message: "යාවත්කාලීන කිරීම කළ නොහැක"
                        },
                        genericError: {
                            description: "",
                            message: ""
                        },
                        success: {
                            description: "",
                            message: ""
                        }
                    },
                    updateClaimsConfigs: {
                        error: {
                            description: "{{ description }}",
                            message: "යාවත්කාලීන කිරීමේ දෝෂයකි"
                        },
                        genericError: {
                            description: "හිමිකම් වින්‍යාසයන් යාවත්කාලීන කිරීමේදී දෝෂයක් ඇතිවිය.",
                            message: "යාවත්කාලීන කිරීමේ දෝෂයකි"
                        },
                        success: {
                            description: "හිමිකම් වින්‍යාසයන් සාර්ථකව යාවත්කාලීන කරන ලදි.",
                            message: "යාවත්කාලීන කිරීම සාර්ථකයි"
                        }
                    },
                    updateFederatedAuthenticator: {
                        error: {
                            description: "{{ description }}",
                            message: "යාවත්කාලීන දෝෂයකි"
                        },
                        genericError: {
                            description: "ෆෙඩරල් සත්‍යාපනය යාවත්කාලීන කිරීමේදී දෝෂයක් ඇතිවිය.",
                            message: "යාවත්කාලීන දෝෂයකි"
                        },
                        success: {
                            description: "ෆෙඩරේටඩ් සත්‍යාපකය සාර්ථකව යාවත්කාලීන කරන ලදි.",
                            message: "යාවත්කාලීන කිරීම සාර්ථකයි"
                        }
                    },
                    updateFederatedAuthenticators: {
                        error: {
                            description: "{{ description }}",
                            message: "යාවත්කාලීන දෝෂයකි"
                        },
                        genericError: {
                            description: "ෆෙඩරල් සත්‍යාපනය යාවත්කාලීන කිරීමේදී දෝෂයක් ඇතිවිය.",
                            message: "යාවත්කාලීන දෝෂයකි"
                        },
                        success: {
                            description: "ෆෙඩරල් සත්‍යාපනය සාර්ථකව යාවත්කාලීන කරන ලදි.",
                            message: "යාවත්කාලීන කිරීම සාර්ථකයි"
                        }
                    },
                    updateIDP: {
                        error: {
                            description: "{{ description }}",
                            message: "යාවත්කාලීන දෝෂයකි"
                        },
                        genericError: {
                            description: "අනන්‍යතා සැපයුම්කරු යාවත්කාලීන කිරීමේදී දෝෂයක් ඇතිවිය.",
                            message: "යාවත්කාලීන කිරීමේ දෝෂයකි"
                        },
                        success: {
                            description: "අනන්‍යතා සැපයුම්කරු සාර්ථකව යාවත්කාලීන කරන ලදි.",
                            message: "යාවත්කාලීන කිරීම සාර්ථකයි"
                        }
                    },
                    updateIDPCertificate: {
                        error: {
                            description: "{{ description }}",
                            message: "යාවත්කාලීන දෝෂයකි"
                        },
                        genericError: {
                            description: "හැඳුනුම්පත් සැපයුම්කරුගේ සහතිකය යාවත්කාලීන කිරීමේදී දෝෂයක් ඇතිවිය.",
                            message: "යාවත්කාලීන කිරීමේ දෝෂයකි"
                        },
                        success: {
                            description: "හැඳුනුම්පත් සැපයුම්කරුගේ සහතිකය සාර්ථකව යාවත්කාලීන කරන ලදි.",
                            message: "යාවත්කාලීන කිරීම සාර්ථකයි"
                        }
                    },
                    updateIDPRoleMappings: {
                        error: {
                            description: "{{ description }}",
                            message: "යාවත්කාලීන කිරීමේ දෝෂයකි"
                        },
                        genericError: {
                            description: "පිටතට යන ප්‍රතිපාදන භූමිකාවේ වින්‍යාසයන් යාවත්කාලීන කිරීමේදී දෝෂයක් ඇතිවිය.",
                            message: "යාවත්කාලීන කිරීමේ දෝෂයකි"
                        },
                        success: {
                            description: "සාර්ථකව යාවත්කාලීන කරන ලද පිටතට යන ප්‍රතිපාදන භූමිකාව වින්‍යාස කිරීම.",
                            message: "යාවත්කාලීන කිරීම සාර්ථකයි"
                        }
                    },
                    updateJITProvisioning: {
                        error: {
                            description: "",
                            message: ""
                        },
                        genericError: {
                            description: "JIT ප්‍රතිපාදන වින්‍යාසකරණ යාවත්කාලීන කිරීමේදී දෝෂයක් ඇතිවිය.",
                            message: "යාවත්කාලීන කිරීමේ දෝෂයකි"
                        },
                        success: {
                            description: "JIT ප්‍රතිපාදන වින්‍යාසයන් සාර්ථකව යාවත්කාලීන කරන ලදි.",
                            message: "යාවත්කාලීන කිරීම සාර්ථකයි"
                        }
                    },
                    updateOutboundProvisioningConnector: {
                        error: {
                            description: "{{ description }}",
                            message: "යාවත්කාලීන කිරීමේ දෝෂයකි"
                        },
                        genericError: {
                            description: "පිටතට යන ප්‍රතිපාදන සම්බන්ධකය යාවත්කාලීන කිරීමේදී දෝෂයක් ඇතිවිය.",
                            message: "යාවත්කාලීන කිරීමේ දෝෂයකි"
                        },
                        success: {
                            description: "පිටතට යන ප්‍රතිපාදන සම්බන්ධකය සාර්ථකව යාවත්කාලීන කරන ලදි.",
                            message: "යාවත්කාලීන කිරීම සාර්ථකයි"
                        }
                    },
                    updateOutboundProvisioningConnectors: {
                        error: {
                            description: "{{ description }}",
                            message: "යාවත්කාලීන කිරීමේ දෝෂයකි"
                        },
                        genericError: {
                            description: "පිටතට යන ප්‍රතිපාදන සම්බන්ධක යාවත්කාලීන කිරීමේදී දෝෂයක් ඇතිවිය.",
                            message: "යාවත්කාලීන කිරීමේ දෝෂයකි"
                        },
                        success: {
                            description: "පිටතට යන ප්‍රතිපාදන සම්බන්ධක සාර්ථකව යාවත්කාලීන කරන ලදි.",
                            message: "යාවත්කාලීන කිරීම සාර්ථකයි"
                        }
                    }
                },
                placeHolders: {
                    emptyAuthenticatorList: {
                        subtitles: {
                            0: "දැනට සත්‍යාපනය කරන්නන් නොමැත.",
                            1: "භාවිතා කිරීමෙන් ඔබට පහසුවෙන් නව සත්‍යාපකයක් එක් කළ හැකිය",
                            2: "පූර්ව නිශ්චිත සැකිලි."
                        },
                        title: "සත්‍යාපකයක් එක් කරන්න"
                    },
                    emptyCertificateList: {
                        subtitles: {
                            0: "මෙම අවතැන්වූවන්ට සහතික එකතු කර නොමැත.",
                            1: "එය බැලීමට සහතිකයක් එක් කරන්න."
                        },
                        title: "සහතික නැත"
                    },
                    emptyConnectorList: {
                        subtitles: {
                            0: "මෙම අවතැන්වූවන්ට පිටතට යන ප්‍රතිපාදන සම්බන්ධක වින්‍යාස කර නොමැත",
                            1: "එය බැලීමට සම්බන්ධකයක් එක් කරන්න."
                        },
                        title: "පිටතට යන ප්‍රතිපාදන සම්බන්ධක නොමැත"
                    },
                    emptyIDPList: {
                        subtitles: {
                            0: "දැනට අනන්‍යතා සපයන්නන් නොමැත.",
                            1: "පහත සඳහන් දෑ අනුගමනය කිරීමෙන් ඔබට පහසුවෙන් නව අනන්‍යතා සැපයුම්කරුවෙකු"
                                + " එක් කළ හැකිය",
                            2: "අනන්‍යතා සැපයුම්කරුවන්ගේ නිර්මාණ විශාරදයේ පියවර."
                        },
                        title: "නව හැඳුනුම්පත් සපයන්නෙකු එක් කරන්න"
                    },
                    emptyIDPSearchResults: {
                        subtitles: {
                            0: " '{{ searchQuery }}' සඳහා අපට කිසිදු ප්‍රතිපලයක් සොයාගත නොහැකි විය.",
                            1: "කරුණාකර වෙනත් සෙවුම් පදයක් උත්සාහ කරන්න."
                        },
                        title: "ප්‍රතිපල හමු නොවීය"
                    },
                    noAttributes: {
                        subtitles: {
                            0: "මේ වන විට කිසිදු ගුණාංගයක් තෝරාගෙන නොමැත."
                        },
                        title: "කිසිදු ගුණාංගයක් එකතු කර නැත"
                    }
                },
                templates: {
                    manualSetup: {
                        heading: "අතින් සැකසුම",
                        subHeading: "අභිරුචි වින්‍යාසයන් සහිත අනන්‍යතා සැපයුම්කරුවෙකු සාදන්න."
                    },
                    quickSetup: {
                        heading: "ඉක්මන් පිහිටුවීම්",
                        subHeading: "ඔබගේ අනන්‍යතා සැපයුම්කරු නිර්මාණය වේගවත් කිරීම සඳහා පෙර සැකසූ සැකිලි සමූහයක්."
                    }
                },
                wizards: {
                    addAuthenticator: {
                        header: "සත්‍යාපකය පිළිබඳ මූලික තොරතුරු පුරවන්න.",
                        steps: {
                            authenticatorConfiguration: {
                                title: "සත්‍යාපන වින්‍යාසය"
                            },
                            authenticatorSelection: {
                                manualSetup: {
                                    subTitle: "අභිරුචි වින්‍යාසයන් සහිත නව සත්‍යාපකයක් එක් කරන්න.",
                                    title: "අතින් සැකසුම"
                                },
                                quickSetup: {
                                    subTitle: "ක්‍රියාවලිය වේගවත් කිරීම සඳහා පූර්ව නිශ්චිත සත්‍යාපන සැකිලි.",
                                    title: "ඉක්මන් පිහිටුවීම්"
                                },
                                title: "සත්‍යාපන තේරීම"
                            },
                            summary: {
                                title: "සාරාංශය"
                            }
                        }
                    },
                    addIDP: {
                        header: "අනන්‍යතා සැපයුම්කරු පිළිබඳ මූලික තොරතුරු පුරවන්න.",
                        steps: {
                            authenticatorConfiguration: {
                                title: "සත්‍යාපන වින්‍යාසය"
                            },
                            generalSettings: {
                                title: "සාමාන්‍ය සැකසුම්"
                            },
                            provisioningConfiguration: {
                                title: "වින්‍යාසය සැපයීම"
                            },
                            summary: {
                                title: "සාරාංශය"
                            }
                        }
                    },
                    addProvisioningConnector: {
                        header: "ප්‍රතිපාදන සම්බන්ධකය පිළිබඳ මූලික තොරතුරු පුරවන්න.",
                        steps: {
                            connectorConfiguration: {
                                title: "සම්බන්ධක විස්තර"
                            },
                            connectorSelection: {
                                defaultSetup: {
                                    subTitle: "නව පිටතට යන ප්‍රතිපාදන සම්බන්ධකයේ වර්ගය තෝරන්න",
                                    title: "සම්බන්ධක වර්ග"
                                },
                                title: "සම්බන්ධක තේරීම"
                            },
                            summary: {
                                title: "සාරාංශය"
                            }
                        }
                    },
                    buttons: {
                        finish: "අවසන් කරන්න",
                        next: "ලබන",
                        previous: "කලින්"
                    }
                }
            },
            overview: {
                banner: {
                    heading: "සංවර්ධකයින් සඳහා WSO2 හැඳුනුම් සේවාදායකය",
                    subHeading: "අභිරුචි කළ අත්දැකීමක් ගොඩනැගීම සඳහා SDKs සහ වෙනත් සංවර්ධක මෙවලම් භාවිතා කරන්න",
                    welcome: "සාදරයෙන් පිළිගනිමු, {{username}}"
                },
                quickLinks: {
                    cards: {
                        applications: {
                            heading: "අයදුම්පත්",
                            subHeading: "පූර්ව නිශ්චිත සැකිලි භාවිතයෙන් යෙදුම් සාදන්න සහ වින්‍යාසයන්"
                                + " කළමනාකරණය කරන්න."
                        },
                        idps: {
                            heading: "හැඳුනුම්පත් සපයන්නන්",
                            subHeading: "සැකිලි මත පදනම්ව අනන්‍යතා සපයන්නන් නිර්මාණය කිරීම සහ කළමනාකරණය " +
                                "කිරීම සහ සත්‍යාපනය වින්‍යාස කිරීම."
                        },
                        remoteFetch: {
                            heading: "දුරස්ථ ලබා ගැනීම",
                            subHeading: "WSO2 හැඳුනුම් සේවාදායකය සමඟ බාධාවකින් තොරව වැඩ කිරීමට දුරස්ථ"
                                + " ගබඩාවක් වින්‍යාස කරන්න."
                        }
                    }
                }
            },
            privacy: {
                about: {
                    description: "WSO2 හැඳුනුම් සේවාදායකය (මෙම ප්‍රතිපත්තිය තුළ “WSO2 IS” ලෙස හැඳින්වේ) යනු විවෘත " +
                        "ප්‍රමිතීන් සහ පිරිවිතර මත පදනම් වූ විවෘත මූලාශ්‍ර අනන්‍යතා කළමනාකරණ සහ හිමිකම් සේවාදායකයකි.",
                    heading: "WSO2 හැඳුනුම් සේවාදායකය ගැන"
                },
                privacyPolicy: {
                    collectionOfPersonalInfo: {
                        description: {
                            list1: {
                                0: "WSO2 IS ඔබගේ ගිණුමට සැක සහිත පිවිසුම් උත්සාහයන් හඳුනා ගැනීමට ඔබගේ IP"
                                    + " ලිපිනය භාවිතා කරයි.",
                                1: "WSO2 IS පොහොසත් සහ පුද්ගලාරෝපිත පරිශීලක අත්දැකීමක් ලබා දීම සඳහා ඔබේ මුල් " +
                                    "නම, අවසාන නම වැනි ගුණාංග භාවිතා කරයි.",
                                2: "WSO2 IS ඔබගේ ආරක්ෂක ප්‍රශ්න සහ පිළිතුරු භාවිතා කරන්නේ ගිණුම් ප්‍රතිසාධනය"
                                    + " සඳහා පමණි."
                            },
                            para1: "WSO2 IS ඔබේ තොරතුරු රැස් කරන්නේ ඔබේ ප්‍රවේශ අවශ්‍යතා සපුරාලීම සඳහා පමණි."
                                + " උදාහරණයක් වශයෙන්"
                        },
                        heading: "පුද්ගලික තොරතුරු එකතු කිරීම",
                        trackingTechnologies: {
                            description: {
                                list1: {
                                    0: "ඔබ ඔබේ පුද්ගලික දත්ත ඇතුළත් කරන පරිශීලක පැතිකඩ " +
                                        "පිටුවෙන් තොරතුරු රැස් කිරීම.",
                                    1: "HTTP ඉල්ලීම, HTTP ශීර්ෂයන් සහ TCP / IP සමඟ ඔබගේ IP ලිපිනය ලුහුබැඳීම.",
                                    2: "ඔබගේ භූගෝලීය තොරතුරු IP ලිපිනය සමඟ ලුහුබැඳීම.",
                                    3: "ඔබගේ පිවිසුම් ඉතිහාසය බ්‍රව්සර් කුකී සමඟ ලුහුබැඳීම. වැඩි විස්තර සඳහා කරුණාකර " +
                                        "අපගේ {{cookiePolicyLink} see බලන්න."
                                },
                                para1: "WSO2 IS විසින් ඔබේ තොරතුරු රැස් කරයි"
                            },
                            heading: "ලුහුබැඳීමේ තාක්ෂණයන්"
                        }
                    },
                    description: {
                        para1: "මෙම ප්‍රතිපත්තියෙන් WSO2 IS ඔබේ පුද්ගලික තොරතුරු, එකතු කිරීමේ අරමුණු සහ ඔබේ " +
                            "පුද්ගලික තොරතුරු රඳවා තබා ගැනීම පිළිබඳ තොරතුරු ග්‍රහණය කරගන්නේ කෙසේද"
                                + " යන්න විස්තර කරයි.",
                        para2: "මෙම ප්‍රතිපත්තිය යොමු කිරීම සඳහා පමණක් වන අතර එය නිෂ්පාදනයක් ලෙස මෘදුකාංගයට " +
                            "අදාළ වන බව කරුණාවෙන් සලකන්න. WSO2 Inc. සහ එහි සංවර්ධකයින්ට WSO2 IS තුළ ඇති " +
                            "තොරතුරු වෙත ප්‍රවේශයක් නොමැත. වැඩි විස්තර සඳහා"
                                +" කරුණාකර <1>disclaimer</1> කොටස බලන්න.",
                        para3: "WSO2 IS හි භාවිතය සහ පරිපාලනය පාලනය කරන ආයතන, සංවිධාන හෝ පුද්ගලයින් අදාළ " +
                            "ආයතනය, සංවිධානය හෝ පුද්ගලයා විසින් දත්ත පාලනය කරන හෝ සකසන " +
                            "ආකාරය සැකසෙන තමන්ගේම රහස්‍යතා ප්‍රතිපත්ති නිර්මාණය කළ යුතුය."
                    },
                    disclaimer: {
                        description: {
                            list1: {
                                0: "WSO2, එහි සේවකයින්ට, හවුල්කරුවන්ට සහ අනුබද්ධයන්ට WSO2 IS හි අඩංගු පුද්ගලික " +
                                    "දත්ත ඇතුළුව කිසිදු දත්තයකට ප්‍රවේශ වීමට අවශ්‍ය නොවන අතර ගබඩා කිරීම, සැකසීම " +
                                    "හෝ පාලනය කිරීම අවශ්‍ය නොවේ. පුද්ගලික දත්ත ඇතුළුව සියලුම දත්ත " +
                                    "පාලනය කරනු ලබන්නේ සහ සැකසෙන්නේ WSO2 IS ආයතනය විසිනි. WSO2, එහි සේවක " +
                                    "හවුල්කරුවන් සහ අනුබද්ධයන් කිසිදු දත්ත රහස්‍යතා රෙගුලාසි වල අර්ථය තුළ දත්ත " +
                                    "සකසනයක් හෝ දත්ත පාලකයක් නොවේ. WSO2 එවැනි ආයතන හෝ පුද්ගලයින් විසින් WSO2" +
                                    " IS භාවිතා කරනු ලබන නීත්‍යානුකූල භාවය හෝ WSO2 IS භාවිතා කරන ආකාරය සහ " +
                                    "අරමුණු සම්බන්ධයෙන් කිසිදු වගකීමක් හෝ වගකීමක් හෝ වගකීමක් භාර නොගනී.",
                                1: "මෙම රහස්‍යතා ප්‍රතිපත්තිය WSO2 IS ක්‍රියාත්මක වන ආයතනයේ හෝ පුද්ගලයන්ගේ " +
                                    "තොරතුරු අරමුණු සඳහා වන අතර පුද්ගලික දත්ත සුරැකීම සම්බන්ධයෙන් WSO2 IS හි " +
                                    "අඩංගු ක්‍රියාවලීන් සහ ක්‍රියාකාරිත්වය නියම කරයි. පරිශීලකයින්ගේ පුද්ගලික දත්ත පාලනය " +
                                    "කරන තමන්ගේම නීති රීති සහ ක්‍රියාවලීන් නිර්මාණය කිරීම සහ පරිපාලනය කිරීම WSO2 " +
                                    "IS ක්‍රියාත්මක කරන ආයතන සහ පුද්ගලයින්ගේ වගකීම වන අතර, එවැනි නීතිරීති හා " +
                                    "ක්‍රියාවලීන් මෙහි අඩංගු භාවිතය, ගබඩා කිරීම සහ අනාවරණය කිරීමේ ප්‍රතිපත්ති වෙනස් " +
                                    "කළ හැකිය. එබැවින් පරිශීලකයින්ගේ පුද්ගලික දත්ත පාලනය කරන තොරතුරු සඳහා " +
                                    "පරිශීලකයින් තමන්ගේම රහස්‍යතා ප්‍රතිපත්තියක් සඳහා WSO2 IS ධාවනය කරන"
                                        + " පුද්ගලයින්ගෙන් හෝ පුද්ගලයින්ගෙන් උපදෙස් ලබා ගත යුතුය."
                            }
                        },
                        heading: "වියාචනය"
                    },
                    disclosureOfPersonalInfo: {
                        description: "WSO2 IS විසින් WSO2 IS හි ලියාපදිංචි කර ඇති අදාළ යෙදුම් වලට (සේවා සැපයුම්කරු " +
                            "ලෙසද හැඳින්වේ) පුද්ගලික තොරතුරු පමණක් අනාවරණය කරයි. මෙම අයදුම්පත් ලියාපදිංචි කර " +
                            "ඇත්තේ ඔබේ ආයතනයේ හෝ සංවිධානයේ අනන්‍යතා පරිපාලක විසිනි. පුද්ගලික තොරතුරු " +
                            "අනාවරණය වන්නේ ඔබ විසින් වෙනත් ආකාරයකින් කැමැත්ත ප්‍රකාශ කර නොමැති නම් හෝ " +
                            "නීතියෙන් අවශ්‍ය වන ස්ථානයක මිස, එවැනි සේවා සපයන්නන් විසින් පාලනය කරනු ලබන, එකතු " +
                            "කරන ලද අරමුණු සඳහා (හෝ එම අරමුණට අනුකූල යැයි හඳුනාගත් භාවිතයක් සඳහා) පමණි. පුද්ගලික තොරතුරු අනාවරණය කිරීම",
                        heading: "Disclosure of personal information",
                        legalProcess: {
                            description: "WSO2 IS ආයතනයට, ආයතනයට හෝ පුද්ගලිකව ක්‍රියාත්මක වන පුද්ගලයාට ඔබේ " +
                                "පුද්ගලික තොරතුරු නීතියෙන් නියම කළ යුතු හා නීත්‍යානුකූල ක්‍රියාවලියක් අවශ්‍ය වූ විට ඔබේ " +
                                "කැමැත්තෙන් හෝ නැතිව අනාවරණය කිරීමට බල කෙරෙනු ඇති බව කරුණාවෙන් සලකන්න.",
                            heading: "නීති ක්‍රියාවලිය"
                        }
                    },
                    heading: "රහස්යතා ප්රතිපත්තිය",
                    moreInfo: {
                        changesToPolicy: {
                            description: {
                                para1: "WSO2 IS හි යාවත්කාලීන කරන ලද අනුවාද වල මෙම ප්‍රතිපත්තියේ වෙනස්කම් අඩංගු " +
                                    "විය හැකි අතර මෙම ප්‍රතිපත්තියේ සංශෝධන එවැනි වැඩිදියුණු කිරීම් තුළ ඇසුරුම් කෙරේ. " +
                                    "එවැනි වෙනස්කම් අදාළ වන්නේ නවීකරණය කරන ලද අනුවාදයන් භාවිතා කිරීමට"
                                        + " තෝරා ගන්නා පරිශීලකයින්ට පමණි.",
                                para2: "WSO2 IS පවත්වාගෙන යන සංවිධානය වරින් වර රහස්‍යතා ප්‍රතිපත්තිය සංශෝධනය " +
                                    "කළ හැකිය. WSO2 IS ක්‍රියාත්මක වන සංවිධානය විසින් සපයනු ලබන අදාළ සබැඳිය සමඟ " +
                                    "ඔබට නවතම පාලන ප්‍රතිපත්තිය සොයාගත හැකිය. අපගේ නිල පොදු නාලිකා " +
                                    "හරහා රහස්‍යතා ප්‍රතිපත්තියේ යම් වෙනසක් සංවිධානය විසින් දැනුම් දෙනු ඇත."
                            },
                            heading: "මෙම ප්‍රතිපත්තියේ වෙනස්කම්"
                        },
                        contactUs: {
                            description: {
                                para1: "මෙම රහස්‍යතා ප්‍රතිපත්තිය සම්බන්ධයෙන් ඔබට කිසියම් ප්‍රශ්නයක් හෝ " +
                                    "ප්‍රශ්නයක් ඇත්නම් කරුණාකර WSO2 අමතන්න."
                            },
                            heading: "අප අමතන්න"
                        },
                        heading: "වැඩි විස්තර",
                        yourChoices: {
                            description: {
                                para1: "ඔබට දැනටමත් WSO2 IS තුළ පරිශීලක ගිණුමක් තිබේ නම්, මෙම රහස්‍යතා ප්‍රතිපත්තිය " +
                                    "ඔබට පිළිගත නොහැකි බව ඔබ දුටුවහොත් ඔබේ ගිණුම අක්‍රිය කිරීමට ඔබට අයිතියක් ඇත.",
                                para2: "ඔබට ගිණුමක් නොමැති නම් සහ අපගේ රහස්‍යතා ප්‍රතිපත්තියට ඔබ එකඟ නොවන්නේ " +
                                    "නම්, ඔබට එකක් නිර්මාණය නොකිරීමට තෝරා ගත හැකිය."
                            },
                            heading: "ඔබේ තේරීම්"
                        }
                    },
                    storageOfPersonalInfo: {
                        heading: "පුද්ගලික තොරතුරු ගබඩා කිරීම",
                        howLong: {
                            description: {
                                list1: {
                                    0: "වත්මන් මුරපදය",
                                    1: "කලින් භාවිතා කළ මුරපද"
                                },
                                para1: "ඔබ අපගේ පද්ධතියේ ක්‍රියාකාරී පරිශීලකයෙකු වන තාක් WSO2 IS ඔබේ පුද්ගලික දත්ත " +
                                    "රඳවා තබා ගනී. ලබා දී ඇති ස්වයං රැකවරණ පරිශීලක ද්වාර භාවිතා කරමින් " +
                                    "ඔබට ඕනෑම වේලාවක ඔබේ පුද්ගලික දත්ත යාවත්කාලීන කළ හැකිය.",
                                para2: "WSO2 IS මඟින් ඔබට අමතර මට්ටමේ ආරක්ෂාවක් ලබා දීම සඳහා රහසිගත රහස් තබා " +
                                    "ගත හැකිය. මෙයට ඇතුළත් වේ:"
                            },
                            heading: "ඔබේ පුද්ගලික තොරතුරු කොපමණ කාලයක් රඳවා තබා ගනීද?"
                        },
                        requestRemoval: {
                            description: {
                                para1: "ඔබගේ ගිණුම මකා දැමීමට ඔබට පරිපාලකගෙන් ඉල්ලා සිටිය හැකිය. " +
                                    "පරිපාලකයා යනු ඔබ යටතේ ලියාපදිංචි වී ඇති කුලී නිවැසියන්ගේ පරිපාලකයා හෝ ඔබ " +
                                    "කුලී නිවැසියන්ගේ ලක්ෂණය භාවිතා නොකරන්නේ නම් සුපිරි පරිපාලකයා ය.",
                                para2: "මීට අමතරව, WSO2 IS ල logs ු-සටහන්, දත්ත සමුදායන් හෝ විශ්ලේෂණ ආචයනයන් " +
                                    "තුළ රඳවාගෙන ඇති ඔබගේ ක්‍රියාකාරකම්වල සියලු අංශ නිර්නාමික කිරීමට"
                                        + " ඔබට ඉල්ලිය හැකිය."
                            },
                            heading: "ඔබගේ පුද්ගලික තොරතුරු ඉවත් කිරීමට ඉල්ලන්නේ කෙසේද"
                        },
                        where: {
                            description: {
                                para1: "WSO2 IS ඔබගේ පුද්ගලික තොරතුරු ආරක්ෂිත දත්ත ගබඩාවල ගබඩා කරයි. WSO2 IS " +
                                    "ඔබේ පුද්ගලික තොරතුරු තබා ඇති දත්ත සමුදාය ආරක්ෂා කිරීම සඳහා නිසි කර්මාන්ත " +
                                    "පිළිගත් ආරක්ෂක පියවරයන් ක්‍රියාත්මක කරයි. WSO2 IS යනු නිෂ්පාදනයක් ලෙස ඔබේ " +
                                    "දත්ත කිසිදු තෙවන පාර්ශවයක් හෝ ස්ථානයක් සමඟ හුවමාරු නොකරයි.",
                                para2: "WSO2 IS ඔබේ පුද්ගලික දත්ත අමතර මට්ටමේ ආරක්ෂාවක් සහිතව තබා ගැනීමට " +
                                    "සංකේතනය භාවිතා කරයි."
                            },
                            heading: "ඔබේ පුද්ගලික තොරතුරු ගබඩා කර ඇති තැන"
                        }
                    },
                    useOfPersonalInfo: {
                        description: {
                            list1: {
                                0: "ඔබට පුද්ගලික පරිශීලක අත්දැකීමක් ලබා දීමට. WSO2 IS මේ සඳහා ඔබේ නම සහ " +
                                    "උඩුගත කළ පැතිකඩ පින්තූර භාවිතා කරයි.",
                                1: "අනවසරයෙන් පිවිසීමෙන් හෝ අනවසරයෙන් ඇතුළුවීමේ උත්සාහයන්ගෙන් ඔබගේ ගිණුම " +
                                    "ආරක්ෂා කිරීමට. WSO2 IS මේ සඳහා HTTP හෝ TCP / IP ශීර්ෂ භාවිතා කරයි.",
                                2: "පද්ධති කාර්ය සාධනය වැඩි දියුණු කිරීම පිළිබඳ විශ්ලේෂණාත්මක අරමුණු සඳහා සංඛ්‍යාන " +
                                    "දත්ත ලබා ගන්න. WSO2 IS සංඛ්‍යානමය ගණනය කිරීම් වලින් පසුව කිසිදු පුද්ගලික " +
                                    "තොරතුරක් තබා නොගනී. එබැවින් සංඛ්‍යාලේඛන වාර්තාවට තනි පුද්ගලයෙකු"
                                        + " හඳුනා ගැනීමට ක්‍රමයක් නොමැත."
                            },
                            para1: "WSO2 IS ඔබේ පුද්ගලික තොරතුරු භාවිතා කරනු ලැබුවේ එය එකතු කරන ලද අරමුණු " +
                                "සඳහා පමණි (හෝ එම අරමුණු වලට අනුකූල බව හඳුනාගත් භාවිතයක් සඳහා).",
                            para2: "WSO2 IS ඔබේ පුද්ගලික තොරතුරු භාවිතා කරන්නේ පහත සඳහන් අරමුණු සඳහා පමණි.",
                            subList1: {
                                heading: "මෙයට ඇතුළත් වේ",
                                list: {
                                    0: "IP ලිපිනය",
                                    1: "බ්‍රව්සරයේ ඇඟිලි සලකුණු",
                                    2: "කුකීස්"
                                }
                            },
                            subList2: {
                                heading: "WSO2 IS භාවිතා කළ හැකිය",
                                list: {
                                    0: "භූගෝලීය තොරතුරු ලබා ගැනීම සඳහා IP ලිපිනය",
                                    1: "බ්රවුසරයේ තාක්ෂණය හෝ / සහ අනුවාදය තීරණය කිරීම සඳහා"
                                        + " බ්රවුසරයේ ඇඟිලි සලකුණු"
                                }
                            }
                        },
                        heading: "පුද්ගලික තොරතුරු භාවිතය"
                    },
                    whatIsPersonalInfo: {
                        description: {
                            list1: {
                                0: "ඔබේ පරිශීලක නාමය (ඔබේ සේවායෝජකයා විසින් නිර්මාණය කරන ලද " +
                                    "පරිශීලක නාමය ගිවිසුම්ගතව ඇති අවස්ථා හැර)",
                                1: "ඔබගේ උපන් දිනය / වයස",
                                2: "පුරනය වීමට භාවිතා කරන IP ලිපිනය",
                                3: "ඔබ පිවිසීමට උපාංගයක් (උදා: දුරකථන හෝ ටැබ්ලටය) භාවිතා කරන්නේ නම්"
                                    + " ඔබගේ උපාංග හැඳුනුම්පත"
                            },
                            list2: {
                                0: "ඔබ TCP / IP සම්බන්ධතාවය ආරම්භ කළ නගරය / රට",
                                1: "ඔබ පුරනය වූ දවසේ වේලාව (වර්ෂය, මාසය, සතිය, පැය හෝ මිනිත්තුව)",
                                2: "ඔබ පුරනය වීමට භාවිතා කළ උපාංග වර්ගය (උදා: දුරකථන හෝ ටැබ්ලටය)",
                                3: "මෙහෙයුම් පද්ධතිය සහ සාමාන්‍ය බ්‍රව්සර් තොරතුරු"
                            },
                            para1: "WSO2 IS ඔබ හා සම්බන්ධ ඕනෑම දෙයක් සලකන අතර ඔබව හඳුනාගත හැකි ඒවා ඔබේ " +
                                "පුද්ගලික තොරතුරු ලෙස සලකනු ලැබේ. මෙයට ඇතුළත් නමුත් ඒවාට පමණක් සීමා නොවේ:",
                            para2: "කෙසේ වෙතත්, WSO2 IS පුද්ගලික තොරතුරු ලෙස නොසැලකෙන පහත තොරතුරු රැස් " +
                                "කරයි, නමුත් එය භාවිතා කරනුයේ <1>statistical</1> අරමුණු සඳහා පමණි. " +
                                "එයට හේතුව මෙම තොරතුරු ඔබව ලුහුබැඳීමට භාවිතා කළ නොහැකි වීමයි."
                        },
                        heading: "පුද්ගලික තොරතුරු යනු කුමක්ද?"
                    }
                }
            },
            sidePanel: {
                applicationEdit: "යෙදුම් සංස්කරණය",
                applicationTemplates: "යෙදුම් ආකෘති",
                applications: "අයදුම්පත්",
                categories: {
                    application: "අයදුම්පත්",
                    general: "ජනරාල්",
                    gettingStarted: "ඇරඹේ",
                    identityProviders: "හැඳුනුම්පත් සපයන්නන්"
                },
                customize: "අභිරුචිකරණය කරන්න",
                identityProviderEdit: "හැඳුනුම්පත් සපයන්නන් සංස්කරණය කරන්න",
                identityProviderTemplates: "හැඳුනුම්පත් සපයන්නාගේ ආකෘති",
                identityProviders: "හැඳුනුම්පත් සපයන්නන්",
                oidcScopes: "OIDC විෂය පථ",
                oidcScopesEdit: "OIDC විෂය පථ සංස්කරණය",
                overview: "දළ විශ්ලේෂණය",
                privacy: "පෞද්ගලිකත්වය",
                remoteRepo: "දුරස්ථ රෙපෝ වින්‍යාසය",
                remoteRepoEdit: "දුරස්ථ රෙපෝ වින්‍යාස සංස්කරණය"
            },
            templates: {
                emptyPlaceholder: {
                    action: null,
                    subtitles: "කරුණාකර මෙහි පෙන්වීමට සැකිලි එක් කරන්න.",
                    title: "පෙන්වීමට සැකිලි නොමැත."
                }
            },
        },
        notifications: {
            endSession: {
                error: {
                    description: "{{description}}",
                    message: "අවසන් කිරීමේ දෝෂයකි"
                },
                genericError: {
                    description: "වත්මන් සැසිය අවසන් කිරීමට නොහැකි විය.",
                    message: "යම් දෝෂයක් ඇති වී ඇත"
                },
                success: {
                    description: "වත්මන් සැසිය සාර්ථකව අවසන් කරන ලදි.",
                    message: "අවසන් කිරීම සාර්ථකයි"
                }
            },
            getProfileInfo: {
                error: {
                    description: "{{description}}",
                    message: "නැවත ලබා ගැනීමේ දෝෂයකි"
                },
                genericError: {
                    description: "පරිශීලක පැතිකඩ විස්තර ලබා ගැනීමට නොහැකි විය.",
                    message: "යම් දෝෂයක් ඇති වී ඇත"
                },
                success: {
                    description: "පරිශීලක පැතිකඩ විස්තර සාර්ථකව ලබා ගන්නා ලදි.",
                    message: "නැවත ලබා ගැනීම සාර්ථකයි"
                }
            },
            getProfileSchema: {
                error: {
                    description: "{{description}}",
                    message: "නැවත ලබා ගැනීමේ දෝෂයකි"
                },
                genericError: {
                    description: "පරිශීලක පැතිකඩ යෝජනා ක්‍රම ලබා ගැනීමට නොහැකි විය.",
                    message: "යම් දෝෂයක් ඇති වී ඇත"
                },
                success: {
                    description: "පරිශීලක පැතිකඩ යෝජනා ක්‍රම සාර්ථකව ලබා ගන්නා ලදි.",
                    message: "නැවත ලබා ගැනීම සාර්ථකයි"
                }
            }
        },
        pages: {
            applicationTemplate: {
                backButton: "යෙදුම් වෙත ආපසු යන්න",
                subTitle: "කරුණාකර පහත යෙදුම් වර්ග වලින් එකක් තෝරන්න.",
                title: "යෙදුම් වර්ගය තෝරන්න"
            },
            applications: {
                subTitle: "සැකිලි මත පදනම්ව යෙදුම් සාදන්න සහ කළමනාකරණය කරන්න සහ සත්‍යාපනය වින්‍යාස කරන්න.",
                title: "අයදුම්පත්"
            },
            applicationsEdit: {
                backButton: "යෙදුම් වෙත ආපසු යන්න",
                subTitle: null,
                title: null
            },
            idp: {
                subTitle: "සැකිලි මත පදනම්ව අනන්‍යතා සපයන්නන් නිර්මාණය කිරීම සහ කළමනාකරණය"
                    + " කිරීම සහ සත්‍යාපනය වින්‍යාස කිරීම.",
                title: "හැඳුනුම්පත් සපයන්නන්"
            },
            idpTemplate: {
                backButton: "හැඳුනුම්පත් සපයන්නන් වෙත ආපසු යන්න",
                subTitle: "කරුණාකර පහත අනන්‍යතා සැපයුම්කරු වර්ග වලින් එකක් තෝරන්න.",
                supportServices: {
                    authenticationDisplayName: "සත්‍යාපනය",
                    provisioningDisplayName: "ප්‍රතිපාදන"
                },
                title: "අනන්‍යතා සැපයුම්කරු වර්ගය තෝරන්න"
            },
            oidcScopes: {
                subTitle: "OIDC විෂය පථයන් සහ විෂය පථයන්ට බැඳී ඇති ගුණාංග නිර්මාණය කර කළමනාකරණය කරන්න.",
                title: "OIDC විෂය පථ"
            },
            oidcScopesEdit: {
                backButton: "විෂය පථ වෙත ආපසු යන්න",
                subTitle: "විෂය පථයේ OIDC ගුණාංග එකතු කිරීම හෝ ඉවත් කිරීම",
                title: "විෂය පථය සංස්කරණය කරන්න"
            },
            overview: {
                subTitle: "යෙදුම්, අනන්‍යතා සපයන්නන්, පරිශීලකයින් සහ භූමිකාවන් වින්‍යාස කිරීම සහ කළමනාකරණය " +
                    "කිරීම, උපභාෂා ආරෝපණය කිරීම යනාදිය.",
                title: "සාදරයෙන් පිළිගනිමු, {{firstName}}"
            }
        },
        placeholders: {
            404: {
                action: "ආපසු ගෙදර යන්න",
                subtitles: {
                    0: "ඔබ සොයන පිටුව අපට සොයාගත නොහැකි විය.",
                    1: "මුල් පිටුව වෙත හරවා යැවීමට කරුණාකර URL එක පරීක්ෂා කරන්න හෝ පහත බොත්තම ක්ලික් කරන්න."
                },
                title: "පිටුව හමු නොවීය"
            },
            accessDenied: {
                action: "ඉවත් වීම දිගටම කරගෙන යන්න",
                subtitles: {
                    0: "මෙම ද්වාරය භාවිතා කිරීමට ඔබට අවසර නොමැති බව පෙනේ.",
                    1: "කරුණාකර වෙනත් ගිණුමක් සමඟ පුරනය වන්න."
                },
                title: "ඔබට අවසර නැත"
            },
            consentDenied: {
                action: "ඉවත් වීම දිගටම කරගෙන යන්න",
                subtitles: {
                    0: "මෙම යෙදුම සඳහා ඔබ කැමැත්ත ලබා දී නොමැති බව පෙනේ.",
                    1: "කරුණාකර යෙදුම භාවිතා කිරීමට කැමැත්ත ලබා දෙන්න."
                },
                title: "ඔබ කැමැත්ත ප්‍රතික්ෂේප කර ඇත"
            },
            emptySearchResult: {
                action: "සෙවුම් විමසුම හිස් කරන්න",
                subtitles: {
                    0: "\"{{query}}\" සඳහා අපට කිසිදු ප්‍රතිපලයක් සොයාගත නොහැකි විය",
                    1: "කරුණාකර වෙනත් සෙවුම් පදයක් උත්සාහ කරන්න."
                },
                title: "ප්‍රතිපල හමු නොවීය"
            },
            genericError: {
                action: "පිටුව නැවුම් කරන්න",
                subtitles: {
                    0: "මෙම පිටුව ප්‍රදර්ශනය කිරීමේදී යමක් වැරදී ඇත.",
                    1: "තාක්ෂණික විස්තර සඳහා බ්‍රව්සර් කොන්සෝලය බලන්න."
                },
                title: "යම් දෝෂයක් ඇති වී ඇත"
            },
            loginError: {
                action: "ඉවත් වීම දිගටම කරගෙන යන්න",
                subtitles: {
                    0: "මෙම ද්වාරය භාවිතා කිරීමට ඔබට අවසර නොමැති බව පෙනේ.",
                    1: "කරුණාකර වෙනත් ගිණුමක් සමඟ පුරනය වන්න."
                },
                title: "ඔබට අවසර නැත"
            },
            unauthorized: {
                action: "ඉවත් වීම දිගටම කරගෙන යන්න",
                subtitles: {
                    0: "මෙම ද්වාරය භාවිතා කිරීමට ඔබට අවසර නොමැති බව පෙනේ.",
                    1: "කරුණාකර වෙනත් ගිණුමක් සමඟ පුරනය වන්න."
                },
                title: "ඔබට අවසර නැත"
            },
            underConstruction: {
                action: "ආපසු ගෙදර යන්න",
                subtitles: {
                    0: "අපි මේ පිටුවේ යම් වැඩක් කරනවා.",
                    1: "කරුණාකර අප සමඟ ඉවසීමෙන් පසුව නැවත එන්න. ඔබේ ඉවසීමට ස්තුතියි."
                },
                title: "පිටුව ඉදිවෙමින් පවතී"
            }
        },
        technologies: {
            android: "Android",
            angular: "Angular",
            ios: "iOS",
            java: "Java",
            python: "Python",
            react: "React",
            windows: "Windows"
        }
    },
    manage: {
        features: {
            advancedSearch: {
                form: {
                    inputs: {
                        filterAttribute: {
                            label: "පෙරහන් ගුණාංගය",
                            placeholder: "උදා. නම, විස්තරය ආදිය.",
                            validations: {
                                empty: "පෙරහන් ගුණාංගය අවශ්‍ය ක්ෂේත්‍රයකි."
                            }
                        },
                        filterCondition: {
                            label: "පෙරහන් තත්වය",
                            placeholder: "උදා. ආදිය සමඟ ආරම්භ වේ.",
                            validations: {
                                empty: "පෙරහන් තත්ත්වය අත්‍යවශ්‍ය ක්ෂේත්‍රයකි."
                            }
                        },
                        filterValue: {
                            label: "පෙරහන් අගය",
                            placeholder: "උදා. පරිපාලක, wso2 ආදිය.",
                            validations: {
                                empty: "පෙරහන් අගය අත්‍යවශ්‍ය ක්ෂේත්‍රයකි."
                            }
                        }
                    }
                },
                hints: {
                    querySearch: {
                        actionKeys: "Shift + Enter",
                        label: "විමසුමක් ලෙස සෙවීමට"
                    }
                },
                options: {
                    header: "උසස් සෙවීම"
                },
                placeholder: "{{attribute}} by මගින් සොයන්න",
                popups: {
                    clear: "පැහැදිලි සෙවීම",
                    dropdown: "විකල්ප පෙන්වන්න"
                },
                resultsIndicator: "විමසුම සඳහා ප්‍රතිපල පෙන්වයි \"{{query}}\""
            },
            approvals: {
                list: {
                    columns: {
                        actions: "ක්‍රියා",
                        name: "නම"
                    }
                },
                modals: {
                    taskDetails: {
                        header: "අනුමත කිරීමේ කාර්යය",
                        description: "පරිශීලකයෙකුගේ මෙහෙයුම් ක්‍රියාවක් අනුමත කිරීමට ඔබට ඉල්ලීමක් තිබේ.",
                    }
                },
                notifications: {
                    fetchApprovalDetails: {
                        error: {
                            description: "{{description}}",
                            message: "අනුමත තොරතුරු ලබා ගැනීමේ දෝෂයකි"
                        },
                        genericError: {
                            description: "අනුමත තොරතුරු යාවත්කාලීන කිරීමට නොහැකි විය",
                            message: "යම් දෝෂයක් ඇති වී ඇත"
                        },
                        success: {
                            description: "අනුමත කිරීමේ තොරතුරු සාර්ථකව ලබා ගන්නා ලදි",
                            message: "අනුමත තොරතුරු ලබා ගැනීම සාර්ථකයි"
                        }
                    },
                    fetchPendingApprovals: {
                        error: {
                            description: "{{description}}",
                            message: "අපේක්ෂිත අනුමැතිය ලබා ගැනීමේ දෝෂයකි"
                        },
                        genericError: {
                            description: "අපේක්ෂිත අනුමත ලබා ගැනීමට නොහැකි විය",
                            message: "යම් දෝෂයක් ඇති වී ඇත"
                        },
                        success: {
                            description: "අපේක්ෂිත අනුමත කිරීම් සාර්ථකව ලබා ගන්නා ලදි",
                            message: "අපේක්ෂිත අනුමත කිරීම් නැවත ලබා ගැනීම සාර්ථකයි"
                        }
                    },
                    updatePendingApprovals: {
                        error: {
                            description: "{{description}}",
                            message: "අනුමැතිය යාවත්කාලීන කිරීමේදී දෝෂයකි"
                        },
                        genericError: {
                            description: "අනුමැතිය යාවත්කාලීන කළ නොහැක",
                            message: "යම් දෝෂයක් ඇති වී ඇත"
                        },
                        success: {
                            description: "අනුමැතිය සාර්ථකව යාවත්කාලීන කරන ලදි",
                            message: "යාවත්කාලීන කිරීම සාර්ථකයි"
                        }
                    }
                },
                placeholders: {
                    emptyApprovalList: {
                        action: "",
                        subtitles: {
                            0: "සමාලෝචනය කිරීමට දැනට අනුමත කිරීම් නොමැත.",
                            1: "පද්ධතියේ මෙහෙයුම් පාලනය කිරීම සඳහා ඔබ කාර්ය ප්‍රවාහයක් එකතු කර ඇත්දැයි"
                                + " කරුණාකර පරීක්ෂා කරන්න.",
                            2: ""
                        },
                        title: "අනුමත කිරීම් නොමැත"
                    },
                    emptyApprovalFilter: {
                        action: "සියල්ල බලන්න",
                        subtitles: {
                            0: "{{status}} තත්වයේ දැනට අනුමත කිරීම් නොමැත.",
                            1: "ඔබට {{status}} තත්වයේ කිසියම් කාර්යයක් තිබේදැයි කරුණාකර පරීක්ෂා කරන්න",
                            2: "ඒවා මෙතැනින් බලන්න."
                        },
                        title: "ප්‍රතිපල හමු නොවීය"
                    },
                    emptySearchResults: {
                        action: "සියල්ල බලන්න",
                        subtitles: {
                            0: "ඔබ සෙවූ කාර්ය ප්‍රවාහය අපට සොයාගත නොහැකි විය.",
                            1: "කරුණාකර එම නම සමඟ වැඩ ප්‍රවාහයක් තිබේදැයි පරීක්ෂා කරන්න",
                            2: "පද්ධතිය."
                        },
                        title: "අනුමත කිරීම් නොමැත"
                    }
                }
            },
            certificates: {
                keystore: {
                    advancedSearch: {
                        error: "පෙරහන් විමසුම් ආකෘතිය වැරදිය",
                        form: {
                            inputs: {
                                filterAttribute: {
                                    placeholder: "උදා. අන්වර්ථය ආදිය."
                                },
                                filterCondition: {
                                    placeholder: "උදා. ආදිය සමඟ ආරම්භ වේ."
                                },
                                filterValue: {
                                    placeholder: "උදා. wso2carbon ආදිය."
                                }
                            }
                        },
                        placeholder: "අන්වර්ථය මගින් සොයන්න"
                    },
                    attributes: {
                        alias: "අන්වර්ථය"
                    },
                    certificateModalHeader: "සහතිකය බලන්න",
                    confirmation: {
                        content: "මෙම ක්‍රියාව ආපසු හැරවිය නොහැකි අතර සහතිකය ස්ථිරවම මකා දමනු ඇත.",
                        header: "ඔබට විශ්වාසද?",
                        hint: "තහවුරු කිරීමට කරුණාකර <1>{{id}}</1> ඇතුලත් කරන්න.",
                        message: "මෙම ක්‍රියාව ආපසු හැරවිය නොහැකි අතර සහතිකය ස්ථිරවම මකා දමනු ඇත.",
                        primaryAction: "තහවුරු කරන්න",
                        tenantContent: "මෙය කුලී නිවැසියන්ගේ සහතිකය ස්ථිරවම මකා දමනු ඇත. වරක් මකාදැමූ විට, ඔබ "
                            + "නව කුලී නිවැසියෙකුගේ සහතිකයක් ආනයනය නොකරන්නේ නම්, ඔබට ද්වාර "
                            + "අයදුම්පත් වෙත ප්‍රවේශ විය නොහැක. මකාදැමීම දිගටම කරගෙන යාමට, "
                            + "සහතිකයේ අන්වර්ථය ඇතුළත් කර මකන්න ක්ලික් කරන්න."
                    },
                    errorCertificate: "සහතිකය විකේතනය කිරීමේදී දෝෂයක් සිදුවිය. "
                        + "කරුණාකර සහතිකය වලංගු බව සහතික කරන්න.",
                    errorEmpty: "සහතික ගොනුවක් එක් කරන්න හෝ PEM- කේතනය කළ සහතිකයක අන්තර්ගතය අලවන්න.",
                    forms: {
                        alias: {
                            label: "අන්වර්ථය",
                            placeholder: "අන්වර්ථයක් ඇතුළත් කරන්න",
                            requiredErrorMessage: "අන්වර්ථය අවශ්‍යයි"
                        }
                    },
                    list: {
                        columns: {
                            actions: "ක්‍රියා",
                            name: "නම"
                        }
                    },
                    notifications: {
                        addCertificate:{
                            genericError: {
                                description: "සහතිකය ආයාත කිරීමේදී දෝෂයක් සිදුවිය.",
                                message: "යම් දෝෂයක් ඇති වී ඇත"
                            },
                            success: {
                                description: "සහතිකය සාර්ථකව එකතු කර ඇත.",
                                message: "සහතික ආනයන සාර්ථකත්වය"
                            }
                        },
                        deleteCertificate: {
                            genericError: {
                                description: "සහතිකය මකාදැමීමේදී දෝෂයක් ඇතිවිය",
                                message: "යම් දෝෂයක් ඇති වී ඇත!"
                            },
                            success: {
                                description: "සහතිකය සාර්ථකව මකා දමා ඇත.",
                                message: "සහතිකය සාර්ථකව මකා දමන ලදි"
                            }
                        },
                        download: {
                            success: {
                                description: "සහතිකය බාගත කිරීම ආරම්භ කර ඇත.",
                                message: "සහතික බාගත කිරීම ආරම්භ විය"
                            }
                        },
                        getAlias: {
                            genericError: {
                                description: "සහතිකය ලබා ගැනීමේදී දෝෂයක් ඇතිවිය.",
                                message: "යම් දෝෂයක් ඇති වී ඇත"
                            }
                        },
                        getCertificate: {
                            genericError: {
                                description: "සහතිකය ලබා ගැනීමේදී දෝෂයක් ඇතිවිය",
                                message: "යම් දෝෂයක් ඇති වී ඇත"
                            }
                        },
                        getCertificates: {
                            genericError: {
                                description: "සහතික ලබා ගැනීමේදී දෝෂයක් ඇතිවිය",
                                message: "යම් දෝෂයක් ඇති වී ඇත"
                            }
                        },
                        getPublicCertificate: {
                            genericError: {
                                description: "කුලී නිවැසියන්ගේ සහතිකය ලබා ගැනීමේදී දෝෂයක් ඇතිවිය.",
                                message: "යම් දෝෂයක් ඇති වී ඇත!"
                            }
                        }
                    },
                    pageLayout: {
                        description: "යතුරු ගබඩාවේ සහතික සාදන්න සහ කළමනාකරණය කරන්න",
                        primaryAction: "ආනයන සහතිකය",
                        title: "සහතික"
                    },
                    placeholders: {
                        emptyList: {
                            action: "ආනයන සහතිකය",
                            subtitle: "දැනට සහතික නොමැත. "
                                + "පහත බොත්තම ක්ලික් කිරීමෙන් ඔබට නව "
                                + "සහතිකයක් ආයාත කළ හැකිය.",
                            title: "ආනයන සහතිකය"
                        },
                        emptySearch: {
                            action: "සෙවුම් විමසුම හිස් කරන්න",
                            subtitle: "{{searchQuery}} සඳහා අපට කිසිදු ප්‍රතිපලයක් සොයාගත නොහැකි විය, "
                                + "කරුණාකර වෙනත් සෙවුම් පදයක් උත්සාහ කරන්න.",
                            title: "ප්‍රතිපල හමු නොවීය"
                        }
                    },
                    summary: {
                        issuerDN: "නිකුත් කරන්නා ඩී.එන්",
                        sn: "අන්රක්රමික අංකය",
                        subjectDN: "විෂය ඩී.එන්",
                        validFrom: "පෙර වලංගු නොවේ",
                        validTill: "පසුව වලංගු නොවේ",
                        version: "පිටපත"
                    },
                    wizard: {
                        dropZone: {
                            action: "සහතිකය උඩුගත කරන්න",
                            description: "සහතික ගොනුවක් මෙහි ඇද දමන්න"
                        },
                        header: "සහතිකය එකතු කරන්න",
                        panes: {
                            paste: "අලවන්න",
                            upload: "උඩුගත කරන්න"
                        },
                        pastePlaceholder: "PEM සහතිකයක අන්තර්ගතය අලවන්න",
                        steps: {
                            summary: "සාරාංශය",
                            upload: "සහතිකය උඩුගත කරන්න"
                        }
                    }
                },
                truststore: {
                    advancedSearch: {
                        form: {
                            inputs: {
                                filterAttribute: {
                                    placeholder: "උදා. අන්වර්ථය, සහතිකය ආදිය."
                                },
                                filterCondition: {
                                    placeholder: "උදා. ආදිය සමඟ ආරම්භ වේ."
                                },
                                filterValue: {
                                    placeholder: "උදා. wso2carbon ආදිය."
                                }
                            }
                        },
                        placeholder: "කණ්ඩායම් නාමයෙන් සොයන්න"
                    }
                }
            },
            claims: {
                dialects: {
                    advancedSearch: {
                        error: "පෙරහන් විමසුම් ආකෘතිය වැරදිය",
                        form: {
                            inputs: {
                                filterAttribute: {
                                    placeholder: "උදා. ඩයලෙක්ට් යූආර්අයි ආදිය."
                                },
                                filterCondition: {
                                    placeholder: "උදා. ආදිය සමඟ ආරම්භ වේ."
                                },
                                filterValue: {
                                    placeholder: "උදා. http"
                                }
                            }
                        },
                        placeholder: "ඩයලෙක්ට් යූආර්අයි මගින් සොයන්න"
                    },
                    attributes: {
                        dialectURI: "උපභාෂාව URI"
                    },
                    confirmations: {
                        action: "තහවුරු කරන්න",
                        content: "ඔබ මෙම බාහිර උපභාෂාව මකා දැමුවහොත්, ඊට සම්බන්ධ සියලු බාහිර ගුණාංග ද මකා "
                            + "දැමෙනු ඇත. කරුණාකර ප්‍රවේශමෙන් ඉදිරියට යන්න.",
                        header: "ඔබට විශ්වාසද?",
                        hint: "තහවුරු කිරීමට කරුණාකර <1>{{confirm}}</1> ඇතුලත් කරන්න.",
                        message: "මෙම ක්‍රියාව ආපසු හැරවිය නොහැකි අතර තෝරාගත් බාහිර උපභාෂාව"
                            + " ස්ථිරවම මකා දමනු ඇත."
                    },
                    dangerZone: {
                        actionTitle: "බාහිර උපභාෂාව මකන්න",
                        header: "බාහිර උපභාෂාව මකන්න",
                        subheader: "ඔබ බාහිර උපභාෂාවක් මකා දැමූ පසු, ආපසු යාමක් නොමැත. කරුණාකර ස්ථිර වන්න."
                    },
                    forms: {
                        dialectURI: {
                            label: "උපභාෂාව URI",
                            placeholder: "යූආර්අයි උපභාෂාවක් ඇතුළත් කරන්න",
                            requiredErrorMessage: "යූආර්අයි උපභාෂාවක් ඇතුළත් කරන්න"
                        },
                        submit: "යාවත්කාලීන කරන්න"
                    },
                    localDialect: "දේශීය උපභාෂාව",
                    notifications: {
                        addDialect: {
                            error: {
                                description: "බාහිර උපභාෂාව එකතු කිරීමේදී දෝෂයක් ඇතිවිය",
                                message: "යම් දෝෂයක් ඇති වී ඇත"
                            },
                            genericError: {
                                description: "බාහිර උපභාෂාව එකතු කර ඇති නමුත් "
                                    + "සියලු බාහිර ගුණාංග සාර්ථකව එකතු කර නොමැත",
                                message: "බාහිර ගුණාංග එකතු කළ නොහැක"
                            },
                            success: {
                                description: "බාහිර උපභාෂාව සාර්ථකව එකතු කර ඇත",
                                message: "බාහිර උපභාෂාව සාර්ථකව එකතු කරන ලදි"
                            }
                        },
                        deleteDialect: {
                            genericError: {
                                description: "මෙම භාෂාව මකාදැමීමේ දෝශයක් ඇති විය",
                                message: "යම් දෝෂයක් ඇති වී ඇත"
                            },
                            success: {
                                description: "උපභාෂාව සාර්ථකව මකා දමා ඇත!",
                                message: "උපභාෂාව සාර්ථකව මකා දමන ලදි"
                            }
                        },
                        fetchADialect: {
                            genericError: {
                                description: "බාහිර උපභාෂාව ලබා ගැනීමේදී දෝෂයක් ඇතිවිය",
                                message: "යම් දෝෂයක් ඇති වී ඇත"
                            }
                        },
                        fetchDialects: {
                            error: {
                                description: "{{description}}",
                                message: "නැවත ලබා ගැනීමේ දෝෂයකි"
                            },
                            genericError: {
                                description: "හිමිකම් උපභාෂා ලබා ගැනීමට නොහැකි විය.",
                                message: "යම් දෝෂයක් ඇති වී ඇත"
                            },
                            success: {
                                description: "හිමිකම් උපභාෂා සාර්ථකව ලබා ගන්නා ලදි.",
                                message: "නැවත ලබා ගැනීම සාර්ථකයි"
                            }
                        },
                        fetchExternalClaims: {
                            genericError: {
                                description: "බාහිර ගුණාංග ලබා ගැනීමේදී දෝෂයක් ඇතිවිය",
                                message: "යම් දෝෂයක් ඇති වී ඇත"
                            }
                        },
                        updateDialect: {
                            genericError: {
                                description: "උපභාෂාව යාවත්කාලීන කිරීමේදී දෝෂයක් ඇතිවිය",
                                message: "යම් දෝෂයක් ඇති වී ඇත"
                            },
                            success: {
                                description: "උපභාෂාව සාර්ථකව යාවත්කාලීන කර ඇත.",
                                message: "උපභාෂා යාවත්කාලීන කිරීම සාර්ථකයි"
                            }
                        }
                    },
                    pageLayout: {
                        edit: {
                            back: "Attribute dialects වෙත ආපසු යන්න",
                            description: "External dialect සහ එහි attributes සංස්කරණය කරන්න",
                            updateDialectURI: "උපභාෂාව URI යාවත්කාලීන කරන්න",
                            updateExternalAttributes: "බාහිර ගුණාංග යාවත්කාලීන කරන්න"
                        },
                        list: {
                            description: "ගුණාංග උපභාෂා සාදන්න සහ කළමනාකරණය කරන්න",
                            primaryAction: "නව බාහිර උපභාෂාව",
                            title: "උපභාෂා ආරෝපණය කරන්න",
                            view: "දේශීය හිමිකම් බලන්න"
                        }
                    },
                    wizard: {
                        header: "බාහිර උපභාෂාව එක් කරන්න",
                        steps: {
                            dialectURI: "උපභාෂාව URI",
                            externalAttribute: "බාහිර ගුණාංග",
                            summary: "සාරාංශය"
                        },
                        summary: {
                            externalAttribute: "බාහිර ගුණාංග යූආර්අයි",
                            mappedAttribute: "සිතියම්ගත කළ දේශීය ගුණාංග යූආර්අයි",
                            notFound: "බාහිර ලක්ෂණයක් එකතු කර නැත."
                        }
                    }
                },
                external: {
                    advancedSearch: {
                        error: "පෙරහන් විමසුම් ආකෘතිය වැරදිය",
                        form: {
                            inputs: {
                                filterAttribute: {
                                    placeholder: "උදා. URI ආදිය ආරෝපණය කරන්න."
                                },
                                filterCondition: {
                                    placeholder: "උදා. ආදිය සමඟ ආරම්භ වේ."
                                },
                                filterValue: {
                                    placeholder: "උදා. http"
                                }
                            }
                        },
                        placeholder: "ගුණාංග URI මගින් සොයන්න"
                    },
                    attributes: {
                        attributeURI: "ආරෝපණය URI",
                        mappedClaim: "සිතියම්ගත කළ දේශීය ගුණාංග යූආර්අයි"
                    },
                    forms: {
                        attributeURI: {
                            label: "ආරෝපණය URI",
                            placeholder: "URI ගුණාංගයක් ඇතුළත් කරන්න",
                            requiredErrorMessage: "URI ගුණාංගය අවශ්‍ය වේ"
                        },
                        localAttribute: {
                            label: "සිතියම් ගත කිරීම සඳහා දේශීය ගුණාංග URI",
                            placeholder: "දේශීය ලක්ෂණයක් තෝරන්න",
                            requiredErrorMessage: "සිතියම් ගත කිරීම සඳහා දේශීය ලක්ෂණයක් තෝරන්න"
                        },
                        submit: "බාහිර ගුණාංග එකතු කරන්න"
                    },
                    notifications: {
                        addExternalAttribute: {
                            genericError: {
                                description: "බාහිර ගුණාංගය එකතු කිරීමේදී දෝෂයක් ඇතිවිය.",
                                message: "යම් දෝෂයක් ඇති වී ඇත"
                            },
                            success: {
                                description: "බාහිර ගුණාංගය උපභාෂාවට සාර්ථකව එකතු කර ඇත!",
                                message: "බාහිර ගුණාංගය සාර්ථකව එක් කරන ලදි"
                            }
                        },
                        deleteExternalClaim: {
                            genericError: {
                                description: "බාහිර ගුණාංගය මකාදැමීමේදී දෝෂයක් ඇතිවිය",
                                message: "යම් දෝෂයක් ඇති වී ඇත"
                            },
                            success: {
                                description: "බාහිර ගුණාංගය සාර්ථකව මකා දමා ඇත!",
                                message: "බාහිර ගුණාංගය සාර්ථකව මකා දමන ලදි"
                            }
                        },
                        fetchExternalClaims: {
                            error: {
                                description: "{{description}}",
                                message: "නැවත ලබා ගැනීමේ දෝෂයකි"
                            },
                            genericError: {
                                description: "බාහිර හිමිකම් ලබා ගැනීමට නොහැකි විය.",
                                message: "යම් දෝෂයක් ඇති වී ඇත"
                            },
                            success: {
                                description: "බාහිර හිමිකම් සාර්ථකව ලබා ගන්නා ලදි.",
                                message: "නැවත ලබා ගැනීම සාර්ථකයි"
                            }
                        },
                        getExternalAttribute: {
                            genericError: {
                                description: "බාහිර ගුණාංගය ලබා ගැනීමේදී දෝෂයක් ඇතිවිය",
                                message: "යම් දෝෂයක් ඇති වී ඇත"
                            }
                        },
                        updateExternalAttribute: {
                            genericError: {
                                description: "බාහිර ගුණාංගය යාවත්කාලීන කිරීමේදී දෝෂයක් ඇතිවිය",
                                message: "යම් දෝෂයක් ඇති වී ඇත"
                            },
                            success: {
                                description: "බාහිර ගුණාංගය සාර්ථකව යාවත්කාලීන කර ඇත!",
                                message: "බාහිර ගුණාංගය සාර්ථකව යාවත්කාලීන කරන ලදි"
                            }
                        }
                    },
                    pageLayout: {
                        edit: {
                            header: "බාහිර ගුණාංග එකතු කරන්න",
                            primaryAction: "නව බාහිර ගුණාංගය"
                        }
                    },
                    placeholders: {
                        empty: {
                            subtitle: "දැනට, මෙම උපභාෂාව සඳහා බාහිර ගුණාංග නොමැත."
                                + "this dialect.",
                            title: "බාහිර ගුණාංග නොමැත"
                        }
                    }
                },
                list: {
                    columns: {
                        actions: "ක්‍රියා",
                        claimURI: "යූආර්අයි ඉල්ලන්න",
                        dialectURI: "උපභාෂාව URI",
                        name: "නම"
                    },
                    confirmation: {
                        action: "තහවුරු කරන්න",
                        content: "{{message}} කරුණාකර ප්‍රවේශමෙන් ඉදිරියට යන්න.",
                        dialect: {
                            message: "ඔබ මෙම බාහිර උපභාෂාව මකා දැමුවහොත්, "
                                + "ඊට සම්බන්ධ සියලු බාහිර ගුණාංග ද මකා දැමෙනු ඇත.",
                            name: "බාහිර උපභාෂාව"
                        },
                        external: {
                            message: "මෙය බාහිර ගුණාංගය ස්ථිරවම මකා දමනු ඇත.",
                            name: "බාහිර ගුණාංගය"
                        },
                        header: "ඔබට විශ්වාසද?",
                        hint: "තහවුරු කිරීමට කරුණාකර <1>{{assertion}}</1> ටයිප් කරන්න.",
                        local: {
                            message: "ඔබ මෙම දේශීය ගුණාංගය මකා දැමුවහොත්, "
                                + "මෙම ගුණාංගයට අයත් පරිශීලක දත්ත ද මකා දැමෙනු ඇත.",
                            name: "දේශීය ගුණාංගය"
                        },
                        message: "මෙම ක්‍රියාව ආපසු හැරවිය නොහැකි අතර තෝරාගත් {{name} ස්ථිරවම මකා දමනු ඇත."
                    },
                    placeholders: {
                        emptyList: {
                            action: {
                                dialect: "නව බාහිර ගුණාංගය",
                                external: "නව බාහිර ගුණාංගය",
                                local: "නව දේශීය ගුණාංගය"
                            },
                            subtitle: "දැනට ප්‍රතිපල නොමැත. නිර්මාණ විශාරදයේ ඇති පියවර අනුගමනය කිරීමෙන් "
                                + "ඔබට පහසුවෙන් නව අයිතමයක් එක් කළ හැකිය.",
                            title: {
                                dialect: "බාහිර උපභාෂාවක් එක් කරන්න",
                                external: "බාහිර ගුණාංගයක් එක් කරන්න",
                                local: "දේශීය ලක්ෂණයක් එක් කරන්න"
                            }
                        },
                        emptySearch: {
                            action: "සෙවුම් විමසුම හිස් කරන්න",
                            subtitle: "{{searchQuery}} සඳහා අපට කිසිදු ප්‍රතිපලයක් සොයාගත නොහැකි විය. "
                                + "කරුණාකර වෙනත් සෙවුම් පදයක් උත්සාහ කරන්න.",
                            title: "ප්‍රතිපල හමු නොවීය"
                        }
                    },
                    warning: "මෙම ගුණාංගය පහත පරිශීලක වෙළඳසැල් වල ඇති " +
                        "ගුණාංගයකට සිතියම් ගත කර නොමැත:"
                },
                local: {
                    additionalProperties: {
                        hint: "වත්මන් ගුණාංග භාවිතා කරමින් දිගුවක් ලිවීමේදී භාවිතා කරන්න",
                        key: "නම",
                        keyRequiredErrorMessage: "නමක් ඇතුළත් කරන්න",
                        value: "වටිනාකම",
                        valueRequiredErrorMessage: "අගයක් ඇතුළත් කරන්න"
                    },
                    advancedSearch: {
                        error: "පෙරහන් විමසුම් ආකෘතිය වැරදිය",
                        form: {
                            inputs: {
                                filterAttribute: {
                                    placeholder: "උදා. නම, ආරෝපණය URI ආදිය."
                                },
                                filterCondition: {
                                    placeholder: "උදා. ආදිය සමඟ ආරම්භ වේ."
                                },
                                filterValue: {
                                    placeholder: "උදා. ලිපිනය, ස්ත්‍රී පුරුෂ භාවය ආදිය."
                                }
                            }
                        },
                        placeholder: "නමින් සොයන්න"
                    },
                    attributes: {
                        attributeURI: "ආරෝපණය URI"
                    },
                    confirmation: {
                        content: "ඔබ මෙම දේශීය ගුණාංගය මකා දැමුවහොත්, මෙම ගුණාංගයට අයත් පරිශීලක "
                            + "දත්ත ද මකා දැමෙනු ඇත. කරුණාකර ප්‍රවේශමෙන් ඉදිරියට යන්න.",
                        header: "ඔබට විශ්වාසද?",
                        hint: "තහවුරු කිරීමට කරුණාකර <1>{{name}}</1> ටයිප් කරන්න.",
                        message: "මෙම ක්‍රියාව ආපසු හැරවිය නොහැකි අතර තෝරාගත් දේශීය ගුණාංගය ස්ථිරවම"
                            + " මකා දමනු ඇත.",
                        primaryAction: "තහවුරු කරන්න"
                    },
                    dangerZone: {
                        actionTitle: "දේශීය ගුණාංග මකන්න",
                        header: "දේශීය ගුණාංග මකන්න",
                        subheader: "ඔබ දේශීය ගුණාංගයක් මකා දැමූ පසු, ආපසු යාමක් නොමැත. "
                            + "කරුණාකර ස්ථිර වන්න."
                    },
                    forms: {
                        attribute: {
                            placeholder: "සිතියම සඳහා ලක්ෂණයක් ඇතුළත් කරන්න",
                            requiredErrorMessage: "ගුණාංග නාමය අත්‍යවශ්‍ය ක්ෂේත්‍රයකි"
                        },
                        attributeHint: "ගුණාංගය සඳහා අද්විතීය හැඳුනුම්පතක්. යූආර්අයි ගුණාංගයක් නිර්මාණය කිරීම "
                            + "සඳහා හැඳුනුම්පත යූආර්අයි උපභාෂාවට එකතු කරනු ලැබේ",
                        attributeID: {
                            label: "ගුණාංග හැඳුනුම්පත",
                            placeholder: "ගුණාංග හැඳුනුම්පතක් ඇතුළත් කරන්න",
                            requiredErrorMessage: "ගුණාංග හැඳුනුම්පත අවශ්‍ය වේ"
                        },
                        description: {
                            label: "විස්තර",
                            placeholder: "විස්තරයක් ඇතුළත් කරන්න",
                            requiredErrorMessage: "විස්තරය අවශ්ය වේ"
                        },
                        displayOrder: {
                            label: "ඇණවුම පෙන්වන්න",
                            placeholder: "දර්ශන අනුපිළිවෙල ඇතුළත් කරන්න"
                        },
                        displayOrderHint: "පරිශීලක පැතිකඩෙහි සහ පරිශීලක ලියාපදිංචි කිරීමේ පිටුවෙහි මෙම "
                            + "ගුණාංගය පෙන්වන ස්ථානය මෙය තීරණය කරයි",
                        name: {
                            label: "නම",
                            placeholder: "ගුණාංගය සඳහා නමක් ඇතුළත් කරන්න",
                            requiredErrorMessage: "නම අවශ්‍යයි"
                        },
                        nameHint: "පරිශීලක පැතිකඩ සහ පරිශීලක ලියාපදිංචි පිටුවෙහි පෙන්වන ගුණාංගයේ නම"
                            + "and user registration page",
                        readOnly: {
                            label: "මෙම ගුණාංගය කියවීමට පමණක් කරන්න"
                        },
                        regEx: {
                            label: "සාමාන්ය ලෙස",
                            placeholder: "සාමාන්‍ය ප්‍රකාශනයක් ඇතුළත් කරන්න"
                        },
                        regExHint: "මෙම නිත්‍ය ප්‍රකාශනය මෙම ගුණාංගයට ගත හැකි අගය වලංගු කිරීම සඳහා භාවිතා කරයි",
                        required: {
                            label: "පරිශීලක ලියාපදිංචි කිරීමේදී මෙම ගුණාංගය අවශ්‍ය කරන්න"
                        },
                        supportedByDefault: {
                            label: "පරිශීලක පැතිකඩ සහ පරිශීලක ලියාපදිංචි පිටුවෙහි මෙම ගුණාංගය පෙන්වන්න"
                        }
                    },
                    mappedAttributes: {
                        hint: "ඔබට මෙම ගුණාංගයට සිතියම් ගත කිරීමට අවශ්‍ය සෑම පරිශීලක වෙළඳසැලකින්ම"
                            + " ගුණාංගය ඇතුළත් කරන්න."
                    },
                    notifications: {
                        addLocalClaim: {
                            genericError: {
                                description: "දේශීය ගුණාංගය එකතු කිරීමේදී දෝෂයක් ඇතිවිය",
                                message: "යම් දෝෂයක් ඇති වී ඇත"
                            },
                            success: {
                                description: "දේශීය ගුණාංගය සාර්ථකව එකතු කර ඇත!",
                                message: "දේශීය ගුණාංගය සාර්ථකව එකතු කරන ලදි"
                            }
                        },
                        deleteClaim: {
                            genericError: {
                                description: "දේශීය ගුණාංගය මකාදැමීමේදී දෝෂයක් ඇතිවිය",
                                message: "යම් දෝෂයක් ඇති වී ඇත"
                            },
                            success: {
                                description: "දේශීය හිමිකම් පෑම සාර්ථකව මකා දමා ඇත!",
                                message: "දේශීය ගුණාංගය සාර්ථකව මකා දමන ලදි"
                            }
                        },
                        fetchLocalClaims: {
                            error: {
                                description: "{{description}}",
                                message: "නැවත ලබා ගැනීමේ දෝෂයකි"
                            },
                            genericError: {
                                description: "දේශීය හිමිකම් ලබා ගැනීමට නොහැකි විය.",
                                message: "යම් දෝෂයක් ඇති වී ඇත"
                            },
                            success: {
                                description: "දේශීය හිමිකම් සාර්ථකව ලබා ගන්නා ලදි.",
                                message: "නැවත ලබා ගැනීම සාර්ථකයි"
                            }
                        },
                        getAClaim: {
                            genericError: {
                                description: "දේශීය ගුණාංගය ලබා ගැනීමේදී දෝෂයක් ඇතිවිය",
                                message: "යම් දෝෂයක් ඇති වී ඇත"
                            }
                        },
                        getClaims: {
                            genericError: {
                                description: "දේශීය ගුණාංග ලබා ගැනීමේදී දෝෂයක් ඇතිවිය",
                                message: "යම් දෝෂයක් ඇති වී ඇත"
                            }
                        },
                        getLocalDialect: {
                            genericError: {
                                description: "දේශීය උපභාෂාව ලබා ගැනීමේදී දෝෂයක් ඇතිවිය",
                                message: "යම් දෝෂයක් ඇති වී ඇත"
                            }
                        },
                        updateClaim: {
                            genericError: {
                                description: "දේශීය ගුණාංගය යාවත්කාලීන කිරීමේදී දෝෂයක් ඇතිවිය",
                                message: "යම් දෝෂයක් ඇති වී ඇත"
                            },
                            success: {
                                description: "මෙම දේශීය ගුණාංගය සාර්ථකව "
                                    + "යාවත්කාලීන කර ඇත!",
                                message: "දේශීය ගුණාංගය සාර්ථකව යාවත්කාලීන කරන ලදි"
                            }
                        }
                    },
                    pageLayout: {
                        edit: {
                            back: "දේශීය ගුණාංග වෙත ආපසු යන්න",
                            description: "දේශීය ගුණාංග සංස්කරණය කරන්න",
                            tabs: {
                                additionalProperties: "අමතර දේපල",
                                general: "ජනරාල්",
                                mappedAttributes: "සිතියම්ගත කළ ගුණාංග"
                            }
                        },
                        local: {
                            action: "නව දේශීය ගුණාංගය",
                            back: "උපභාෂා ආරෝපණය කිරීමට ආපසු යන්න",
                            description: "දේශීය ගුණාංග සාදන්න සහ කළමනාකරණය කරන්න",
                            title: "දේශීය ගුණාංග"
                        }
                    },
                    wizard: {
                        header: "දේශීය ගුණාංග එකතු කරන්න",
                        steps: {
                            general: "ජනරාල්",
                            mapAttributes: "සිතියම් ගුණාංග",
                            summary: "සාරාංශය"
                        },
                        summary: {
                            attribute: "ගුණාංගය",
                            attributeURI: "ආරෝපණය URI",
                            displayOrder: "ඇණවුම පෙන්වන්න",
                            readOnly: "මෙම ගුණාංගය කියවීමට පමණි",
                            regEx: "සාමාන්ය ලෙස",
                            required: "පරිශීලක ලියාපදිංචි කිරීමේදී මෙම ගුණාංගය අවශ්‍ය වේ",
                            supportedByDefault: "මෙම ගුණාංගය පරිශීලක පැතිකඩ සහ පරිශීලක ලියාපදිංචි පිටුවෙහි දැක්වේ",
                            userstore: "පරිශීලක වෙළඳසැල"
                        }
                    }
                }
            },
            emailLocale: {
                buttons: {
                    addLocaleTemplate: "ස්ථාන සැකිල්ල එක් කරන්න",
                    saveChanges: "වෙනස්කම් සුරකින්න"
                },
                forms: {
                    addLocale: {
                        fields: {
                            bodyEditor: {
                                label: "සිරුර",
                                validations: {
                                    empty: "ඊමේල් බොඩි හිස් විය නොහැක."
                                }
                            },
                            locale: {
                                label: "පෙදෙසි",
                                placeholder: "පෙදෙසි තෝරන්න",
                                validations: {
                                    empty: "පෙදෙසි තෝරන්න"
                                }
                            },
                            signatureEditor: {
                                label: "තැපැල් අත්සන",
                                validations: {
                                    empty: "ඊමේල් අත්සන හිස් විය නොහැක."
                                }
                            },
                            subject: {
                                label: "විෂය",
                                placeholder: "ඔබගේ විද්‍යුත් තැපැල් විෂය ඇතුළත් කරන්න",
                                validations: {
                                    empty: "විද්‍යුත් විෂය අවශ්‍ය වේ"
                                }
                            }
                        }
                    }
                }
            },
            emailTemplateTypes: {
                advancedSearch: {
                    error: "පෙරහන් විමසුම් ආකෘතිය වැරදිය",
                    form: {
                        inputs: {
                            filterAttribute: {
                                placeholder: "උදා. නම ආදිය."
                            },
                            filterCondition: {
                                placeholder: "උදා. ආදිය සමඟ ආරම්භ වේ."
                            },
                            filterValue: {
                                placeholder: "උදා. TOTP, passwordResetSuccess ආදිය."
                            }
                        }
                    },
                    placeholder: "විද්‍යුත් තැපැල් ආකෘති වර්ගය අනුව සොයන්න"
                },
                buttons: {
                    createTemplateType: "සැකිලි වර්ගය සාදන්න",
                    deleteTemplate: "අච්චුව මකන්න",
                    editTemplate: "සැකිල්ල සංස්කරණය කරන්න",
                    newType: "නව ආකෘති වර්ගය"
                },
                confirmations: {
                    deleteTemplateType: {
                        assertionHint: "තහවුරු කිරීමට කරුණාකර <1>{{id}}</1> ටයිප් කරන්න.",
                        content: "ඔබ මෙම ඊමේල් අච්චු වර්ගය මකා දැමුවහොත්, සියලු සම්බන්ධිත වැඩ ප්‍රවාහයන්ට " +
                            "තවදුරටත් වලංගු ඊමේල් අච්චුවක් සමඟ වැඩ කිරීමට නොහැකි වන අතර මෙම අච්චු වර්ගයට " +
                            "සම්බන්ධ සියලුම ස්ථාන සැකිලි මකා දමනු ඇත. කරුණාකර ප්‍රවේශමෙන් ඉදිරියට යන්න.",
                        header: "ඔබට විශ්වාසද?",
                        message: "මෙම ක්‍රියාව ආපසු හැරවිය නොහැකි අතර තෝරාගත් විද්‍යුත් තැපැල් " +
                            "ආකෘති වර්ගය ස්ථිරවම මකා දමනු ඇත."
                    }
                },
                forms: {
                    addTemplateType: {
                        fields: {
                            type: {
                                label: "ආකෘති වර්ගය නම",
                                placeholder: "අච්චු වර්ගයේ නමක් ඇතුළත් කරන්න",
                                validations: {
                                    empty: "ඉදිරියට යාමට අච්චු වර්ගයේ නම අවශ්‍ය වේ."
                                }
                            }
                        }
                    }
                },
                list: {
                    actions: "ක්‍රියා",
                    name: "නම"
                },
                notifications: {
                    createTemplateType: {
                        error: {
                            description: "{{description}}",
                            message: "විද්‍යුත් තැපැල් ආකෘති වර්ගය සෑදීමේ දෝෂයකි."
                        },
                        genericError: {
                            description: "විද්‍යුත් තැපැල් ආකෘති වර්ගය සෑදිය නොහැක.",
                            message: "යම් දෝෂයක් ඇති වී ඇත"
                        },
                        success: {
                            description: "විද්‍යුත් තැපැල් ආකෘති වර්ගය සාර්ථකව නිර්මාණය කළේය.",
                            message: "විද්‍යුත් තැපැල් ආකෘති වර්ගය සෑදීම සාර්ථකයි"
                        }
                    },
                    deleteTemplateType: {
                        error: {
                            description: "{{description}}",
                            message: "විද්‍යුත් තැපැල් ආකෘති වර්ගය මැකීමේ දෝෂයකි."
                        },
                        genericError: {
                            description: "විද්‍යුත් තැපැල් ආකෘති වර්ගය මකා දැමිය නොහැක.",
                            message: "යම් දෝෂයක් ඇති වී ඇත"
                        },
                        success: {
                            description: "විද්‍යුත් තැපැල් ආකෘති වර්ගය සාර්ථකව මකා දමන ලදි.",
                            message: "විද්‍යුත් තැපැල් ආකෘති වර්ගය මකා දැමීම සාර්ථකයි"
                        }
                    },
                    getTemplateTypes: {
                        error: {
                            description: "{{description}}",
                            message: "නැවත ලබා ගැනීමේ දෝෂයකි"
                        },
                        genericError: {
                            description: "විද්‍යුත් තැපැල් ආකෘති වර්ග ලබා ගැනීමට නොහැකි විය.",
                            message: "යම් දෝෂයක් ඇති වී ඇත"
                        },
                        success: {
                            description: "විද්‍යුත් තැපැල් ආකෘති වර්ග සාර්ථකව ලබා ගන්නා ලදි.",
                            message: "නැවත ලබා ගැනීම සාර්ථකයි"
                        }
                    },
                    updateTemplateType: {
                        error: {
                            description: "{{description}}",
                            message: "විද්‍යුත් තැපැල් ආකෘති වර්ගය යාවත්කාලීන කිරීමේ දෝෂයකි."
                        },
                        genericError: {
                            description: "විද්‍යුත් තැපැල් ආකෘති වර්ගය යාවත්කාලීන කළ නොහැක.",
                            message: "යම් දෝෂයක් ඇති වී ඇත"
                        },
                        success: {
                            description: "විද්‍යුත් තැපැල් ආකෘති වර්ගය සාර්ථකව යාවත්කාලීන කරන ලදි.",
                            message: "විද්‍යුත් තැපැල් ආකෘති වර්ගය යාවත්කාලීන කිරීම සාර්ථකයි"
                        }
                    }
                },
                placeholders: {
                    emptyList: {
                        action: "නව ආකෘති වර්ගය",
                        subtitles: {
                            0: "දැනට සැකිලි වර්ග නොමැත.",
                            1: "ඔබට නව අච්චු වර්ගයක් එක් කළ හැකිය",
                            2: "පහත බොත්තම ක්ලික් කරන්න."
                        },
                        title: "නව ආකෘති වර්ගය එක් කරන්න"
                    },
                    emptySearch: {
                        action: "සෙවුම් විමසුම හිස් කරන්න",
                        subtitles: "{{searchQuery}} සඳහා අපට කිසිදු ප්‍රතිපලයක් සොයාගත නොහැකි විය. "
                            + "කරුණාකර වෙනත් සෙවුම් පදයක් උත්සාහ කරන්න.",
                        title: "ප්‍රතිපල හමු නොවීය"
                    }
                },
                wizards: {
                    addTemplateType: {
                        heading: "විද්‍යුත් තැපැල් ආකෘති වර්ගය සාදන්න",
                        steps: {
                            templateType: {
                                heading: "ආකෘති වර්ගය"
                            }
                        },
                        subHeading: "ඊමේල් අවශ්‍යතා සමඟ සම්බන්ධ වීමට නව අච්චු වර්ගයක් සාදන්න."
                    }
                }
            },
            emailTemplates: {
                buttons: {
                    deleteTemplate: "අච්චුව මකන්න",
                    editTemplate: "සැකිල්ල සංස්කරණය කරන්න",
                    newTemplate: "නව අච්චුව",
                    viewTemplate: "අච්චුව බලන්න"
                },
                confirmations: {
                    deleteTemplate: {
                        assertionHint: "තහවුරු කිරීමට කරුණාකර <1>{{id}}</1> ටයිප් කරන්න.",
                        content: "ඔබ මෙම විද්‍යුත් තැපැල් අච්චුව මකා දැමුවහොත්, සියලු සම්බන්ධිත වැඩ " + 
                            "ප්‍රවාහයන්ට තවදුරටත් වැඩ කිරීමට වලංගු විද්‍යුත් තැපැල් අච්චුවක් නොමැත. කරුණාකර " + 
                            "ප්‍රවේශමෙන් ඉදිරියට යන්න.",
                        header: "ඔබට විශ්වාසද?",
                        message: "මෙම ක්‍රියාව ආපසු හැරවිය නොහැකි අතර තෝරාගත් විද්‍යුත් තැපැල් අච්චුව"
                            + " ස්ථිරවම මකා දමනු ඇත."
                    }
                },
                editor: {
                    tabs: {
                        code: {
                            tabName: "HTML කේතය"
                        },
                        preview: {
                            tabName: "පෙරදසුන"
                        }
                    }
                },
                list: {
                    actions: "ක්‍රියා",
                    name: "නම"
                },
                notifications: {
                    createTemplate: {
                        error: {
                            description: "{{description}}",
                            message: "විද්‍යුත් තැපැල් අච්චුවක් සෑදීමේ දෝෂයකි."
                        },
                        genericError: {
                            description: "විද්‍යුත් තැපැල් අච්චුවක් සෑදිය නොහැක.",
                            message: "යම් දෝෂයක් ඇති වී ඇත"
                        },
                        success: {
                            description: "විද්‍යුත් තැපැල් අච්චුව සාර්ථකව නිර්මාණය කළේය.",
                            message: "විද්‍යුත් තැපැල් අච්චුවක් සෑදීම සාර්ථකයි"
                        }
                    },
                    deleteTemplate: {
                        error: {
                            description: "{{description}}",
                            message: "විද්‍යුත් තැපැල් අච්චුව මකාදැමීමේ දෝෂයකි."
                        },
                        genericError: {
                            description: "විද්‍යුත් තැපැල් අච්චුව මකා දැමිය නොහැක.",
                            message: "යම් දෝෂයක් ඇති වී ඇත"
                        },
                        success: {
                            description: "විද්‍යුත් තැපැල් අච්චුව සාර්ථකව මකා දමන ලදි.",
                            message: "විද්‍යුත් තැපැල් අච්චුව මකා දැමීම සාර්ථකයි"
                        }
                    },
                    getTemplateDetails: {
                        error: {
                            description: "{{description}}",
                            message: "නැවත ලබා ගැනීමේ දෝෂයකි"
                        },
                        genericError: {
                            description: "විද්‍යුත් තැපැල් ආකෘති විස්තර ලබා ගැනීමට නොහැකි විය.",
                            message: "යම් දෝෂයක් ඇති වී ඇත"
                        },
                        success: {
                            description: "විද්‍යුත් තැපැල් ආකෘති විස්තර සාර්ථකව ලබා ගන්නා ලදි.",
                            message: "නැවත ලබා ගැනීම සාර්ථකයි"
                        }
                    },
                    getTemplates: {
                        error: {
                            description: "{{description}}",
                            message: "නැවත ලබා ගැනීමේ දෝෂයකි"
                        },
                        genericError: {
                            description: "විද්‍යුත් තැපැල් සැකිලි ලබා ගැනීමට නොහැකි විය.",
                            message: "යම් දෝෂයක් ඇති වී ඇත"
                        },
                        success: {
                            description: "විද්‍යුත් තැපැල් සැකිලි සාර්ථකව ලබා ගන්නා ලදි.",
                            message: "නැවත ලබා ගැනීම සාර්ථකයි"
                        }
                    },
                    iframeUnsupported: {
                        genericError: {
                            description: "ඔබගේ බ්‍රව්සරය iframes සඳහා සහය නොදක්වයි.",
                            message: "සහාය නොදක්වයි"
                        }
                    },
                    updateTemplate: {
                        error: {
                            description: "{{description}}",
                            message: "විද්‍යුත් තැපැල් අච්චුව යාවත්කාලීන කිරීමේ දෝෂයකි."
                        },
                        genericError: {
                            description: "විද්‍යුත් තැපැල් අච්චුව යාවත්කාලීන කළ නොහැක.",
                            message: "යම් දෝෂයක් ඇති වී ඇත"
                        },
                        success: {
                            description: "විද්‍යුත් තැපැල් අච්චුව සාර්ථකව යාවත්කාලීන කරන ලදි.",
                            message: "විද්‍යුත් තැපැල් අච්චු යාවත්කාලීන කිරීම සාර්ථකයි"
                        }
                    }
                },
                placeholders: {
                    emptyList: {
                        action: "නව අච්චුව",
                        subtitles: {
                            0: "තෝරාගත් අය සඳහා දැනට සැකිලි නොමැත",
                            1: "විද්‍යුත් තැපැල් ආකෘති වර්ගය. ඔබට නව අච්චුවක් එක් කළ හැකිය",
                            2: "පහත බොත්තම ක්ලික් කරන්න."
                        },
                        title: "අච්චුව එක් කරන්න"
                    }
                },
                viewTemplate: {
                    heading: "විද්‍යුත් තැපැල් ආකෘති පෙරදසුන"
                }
            },
            footer: {
                copyright: "WSO2 හැඳුනුම් සේවාදායකය © {{year}}"
            },
            governanceConnectors: {
                categories: "ප්රවර්ග",
                connectorSubHeading: "{{Name}} සැකසුම් වින්‍යාස කරන්න.",
                disabled: "අක්‍රීය කර ඇත",
                enabled: "සක්‍රීය කර ඇත",
                form: {
                    errors: {
                        format: "ආකෘතිය වැරදිය.",
                        positiveIntegers: "අංකය 0 ට නොඅඩු විය යුතුය."
                    }
                },
                notifications: {
                    getConnector: {
                        error: {
                            description: "{{ description }}",
                            message: "ලබා ගැනීමේ දෝෂයකි"
                        },
                        genericError: {
                            description: "පාලන සම්බන්ධකය ලබා ගැනීමේදී දෝෂයක් ඇතිවිය.",
                            message: "යම් දෝෂයක් ඇති වී ඇත"
                        },
                        success: {
                            description: "",
                            message: ""
                        }
                    },
                    getConnectorCategories: {
                        error: {
                            description: "{{ description }}",
                            message: "ලබා ගැනීමේ දෝෂයකි"
                        },
                        genericError: {
                            description: "පාලන සම්බන්ධක කාණ්ඩ ලබා ගැනීමේදී දෝෂයක් ඇතිවිය.",
                            message: "යම් දෝෂයක් ඇති වී ඇත"
                        },
                        success: {
                            description: "",
                            message: ""
                        }
                    },
                    updateConnector: {
                        error: {
                            description: "{{ description }}",
                            message: "යාවත්කාලීන කිරීමේ දෝෂයකි"
                        },
                        genericError: {
                            description: "පාලන සම්බන්ධකය යාවත්කාලීන කිරීමේදී දෝෂයක් ඇතිවිය.",
                            message: "යම් දෝෂයක් ඇති වී ඇත"
                        },
                        success: {
                            description: "{{name}} සම්බන්ධකය සාර්ථකව යාවත්කාලීන කරන ලදි.",
                            message: "යාවත්කාලීන කිරීම සාර්ථකයි."
                        }
                    }
                },
                pageSubHeading: "{{ name }} වින්‍යාස කර කළමනාකරණය කරන්න."
    
            },
            groups: {
                advancedSearch: {
                    form: {
                        inputs: {
                            filterAttribute: {
                                placeholder: "උදා. කණ්ඩායම් නම."
                            },
                            filterCondition: {
                                placeholder: "උදා. ආදිය සමඟ ආරම්භ වේ."
                            },
                            filterValue: {
                                placeholder: "සෙවීමට අගය ඇතුළත් කරන්න"
                            }
                        }
                    },
                    placeholder: "කණ්ඩායම් නාමයෙන් සොයන්න"
                },
                edit: {
                    basics: {
                        fields: {
                            groupName: {
                                name: "කණ්ඩායම් නම",
                                placeholder: "ඔබගේ කණ්ඩායමේ නම ඇතුළත් කරන්න",
                                required: "කණ්ඩායම් නම අවශ්‍යයි"
                            }
                        }
                    },
                    roles: {
                        addRolesModal: {
                            heading: "කණ්ඩායම් භූමිකාවන් යාවත්කාලීන කරන්න",
                            subHeading: "නව භූමිකාවන් එක් කරන්න හෝ කණ්ඩායමට පවරා ඇති භූමිකාවන් ඉවත් කරන්න."
                        },
                        subHeading: "මෙම කණ්ඩායම විසින් පවරා ඇති භූමිකාවන් එකතු කිරීම හෝ ඉවත් කිරීම සහ " +
                            "මෙය ඇතැම් කාර්යයන් ඉටු කිරීමට බලපානු ඇති බව සලකන්න."
                    }
                },
                list: {
                    columns: {
                        actions: "ක්‍රියා",
                        lastModified: "අවසන් වරට වෙනස් කරන ලදි",
                        name: "නම"
                    },
                    storeOptions: "පරිශීලක වෙළඳසැල තෝරන්න"
                },
                notifications: {
                    createGroup: {
                        error: {
                            description: "{{description}}",
                            message: "කණ්ඩායම නිර්මාණය කිරීමේදී දෝෂයක් ඇතිවිය."
                        },
                        genericError: {
                            description: "කණ්ඩායම නිර්මාණය කිරීමට නොහැකි විය.",
                            message: "යම් දෝෂයක් ඇති වී ඇත"
                        },
                        success: {
                            description: "කණ්ඩායම සාර්ථකව නිර්මාණය කරන ලදි.",
                            message: "කණ්ඩායම සාර්ථකව නිර්මාණය කරන ලදි."
                        }
                    },
                    createPermission: {
                        error: {
                            description: "{{description}}",
                            message: "කණ්ඩායමට අවසර එකතු කිරීමේදී දෝෂයක් ඇතිවිය."
                        },
                        genericError: {
                            description: "කණ්ඩායමට අවසර එකතු කළ නොහැක.",
                            message: "යම් දෝෂයක් ඇති වී ඇත"
                        },
                        success: {
                            description: "කණ්ඩායමට අවසර සාර්ථකව එකතු කරන ලදි.",
                            message: "කණ්ඩායම සාර්ථකව නිර්මාණය කරන ලදි."
                        }
                    },
                    deleteGroup: {
                        error: {
                            description: "{{description}}",
                            message: "තෝරාගත් කණ්ඩායම මකාදැමීමේ දෝෂයකි."
                        },
                        genericError: {
                            description: "තෝරාගත් කණ්ඩායම ඉවත් කිරීමට නොහැකි විය.",
                            message: "යම් දෝෂයක් ඇති වී ඇත"
                        },
                        success: {
                            description: "තෝරාගත් කණ්ඩායම සාර්ථකව මකා දමන ලදි.",
                            message: "කණ්ඩායම සාර්ථකව මකා දමන ලදි"
                        }
                    },
                    fetchGroups: {
                        genericError: {
                            description: "කණ්ඩායම් ලබා ගැනීමේදී දෝෂයක් ඇතිවිය.",
                            message: "යම් දෝෂයක් ඇති වී ඇත"
                        }
                    },
                    updateGroup: {
                        error: {
                            description: "{{description}}",
                            message: "තෝරාගත් කණ්ඩායම යාවත්කාලීන කිරීමේදී දෝෂයකි."
                        },
                        genericError: {
                            description: "තෝරාගත් කණ්ඩායම යාවත්කාලීන කළ නොහැක.",
                            message: "යම් දෝෂයක් ඇති වී ඇත"
                        },
                        success: {
                            description: "තෝරාගත් කණ්ඩායම සාර්ථකව යාවත්කාලීන කරන ලදි.",
                            message: "කණ්ඩායම සාර්ථකව යාවත්කාලීන කරන ලදි"
                        }
                    }
                },
                placeholders: {
                    groupsError: {
                        subtitles: [
                            "පරිශීලක වෙළඳසැලෙන් කණ්ඩායම් ලබා ගැනීමට උත්සාහ කිරීමේදී දෝෂයක් ඇතිවිය.",
                            "කරුණාකර පරිශීලක වෙළඳසැලේ සම්බන්ධතා තොරතුරු නිවැරදි බවට වග බලා ගන්න."
                        ],
                        title:"පරිශීලක වෙළඳසැලෙන් කණ්ඩායම් ලබා ගැනීමට නොහැකි විය"
                    }
                }
            },
            header: {
                links: {
                    devPortalNav: "සංවර්ධක ද්වාරය",
                    userPortalNav: "මගේ ගිණුම"
                }
            },
            helpPanel: {
                notifications: {
                    pin: {
                        success: {
                            description: "ඔබ පැහැදිලිව වෙනස් නොකළහොත් උපකාරක පැනලය සැමවිටම {{state}} වනු ඇත.",
                            message: "උදව් පැනලය {{state}}"
                        }
                    }
                }
            },
            oidcScopes: {
                buttons: {
                    addScope: "නව OIDC විෂය පථය"
                },
                confirmationModals: {
                    deleteClaim: {
                        assertionHint: "තහවුරු කිරීමට කරුණාකර <1> {{name}} </1> ටයිප් කරන්න.",
                        content: "ඔබ මෙම හිමිකම මකා දැමුවහොත් ඔබට එය නැවත ලබා ගත නොහැකි වනු ඇත. " +
                            "කරුණාකර ප්‍රවේශමෙන් ඉදිරියට යන්න.",
                        header: "ඔබට විශ්වාසද?",
                        message: "මෙම ක්‍රියාව ආපසු හැරවිය නොහැකි අතර OIDC හිමිකම් ස්ථිරවම මකා දමනු ඇත."
                    },
                    deleteScope: {
                        assertionHint: "තහවුරු කිරීමට කරුණාකර <1> {{name}} </1> ටයිප් කරන්න.",
                        content: "ඔබ මෙම විෂය පථය මකා දැමුවහොත්, ඔබට එය නැවත ලබා ගත නොහැක. " +
                            "කරුණාකර ප්‍රවේශමෙන් ඉදිරියට යන්න.",
                        header: "ඔබට විශ්වාසද?",
                        message: "මෙම ක්‍රියාව ආපසු හැරවිය නොහැකි අතර OIDC විෂය පථය ස්ථිරවම මකා දමනු ඇත."
                    }
                },
                editScope: {
                    claimList: {
                        addClaim:  "නව ගුණාංගය",
                        emptyPlaceholder: {
                            action: "ගුණාංගය එක් කරන්න",
                            subtitles: {
                                0: "මෙම OIDC විෂය පථය සඳහා කිසිදු ගුණාංගයක් එකතු කර නොමැත",
                                1: "කරුණාකර ඒවා බැලීමට අවශ්‍ය ගුණාංග මෙහි එක් කරන්න."
                            },
                            title: "OIDC ගුණාංග නොමැත"
                        },
                        popupDelete: "ගුණාංගය මකන්න",
                        searchClaims: "සෙවුම් ගුණාංග",
                        subTitle: "OIDC විෂය පථයේ ලක්ෂණ එකතු කිරීම හෝ ඉවත් කිරීම",
                        title: "{{ name }}"
                    }
                },
                forms: {
                    addScopeForm: {
                        inputs: {
                            description: {
                                label: "විස්තර",
                                placeholder: "විෂය පථය සඳහා විස්තරයක් ඇතුළත් කරන්න"
                            },
                            displayName: {
                                label: "ප්රදර්ශන නාමය",
                                placeholder: "දර්ශන නාමය ඇතුළත් කරන්න",
                                validations: {
                                    empty: "දර්ශන නාමය අත්‍යවශ්‍ය ක්ෂේත්‍රයකි"
                                }
                            },
                            scopeName: {
                                label: "විෂය පථයේ නම",
                                placeholder: "විෂය පථයේ නම ඇතුළත් කරන්න",
                                validations: {
                                    empty: "විෂය පථයේ නම අත්‍යවශ්‍ය ක්ෂේත්‍රයකි"
                                }
                            }
                        }
                    }
                },
                list: {
                    columns: {
                        actions: "ක්‍රියා",
                        name: "නම"
                    },
                    empty: {
                        action: "OIDC විෂය පථය එක් කරන්න",
                        subtitles: {
                            0: "පද්ධතියේ OIDC විෂය පථ නොමැත.",
                            1: "කරුණාකර මෙහි නව OIDC විෂය පථයන් එක් කරන්න."
                        },
                        title: "OIDC විෂය පථ නොමැත"
                    },
                    searchPlaceholder: "විෂය පථයෙන් සොයන්න"
                },
                notifications: {
                    addOIDCClaim: {
                        error: {
                            description: "{{description}}",
                            message: "නිර්මාණ දෝෂයකි"
                        },
                        genericError: {
                            description: "OIDC ගුණාංගය එකතු කිරීමේදී දෝෂයක් ඇතිවිය.",
                            message: "යම් දෝෂයක් ඇති වී ඇත"
                        },
                        success: {
                            description: "නව OIDC ගුණාංගය සාර්ථකව එක් කරන ලදි",
                            message: "නිර්මාණය සාර්ථකයි"
                        }
                    },
                    addOIDCScope: {
                        error: {
                            description: "{{description}}",
                            message: "නිර්මාණ දෝෂයකි"
                        },
                        genericError: {
                            description: "OIDC විෂය පථය නිර්මාණය කිරීමේදී දෝෂයක් ඇතිවිය.",
                            message: "යම් දෝෂයක් ඇති වී ඇත"
                        },
                        success: {
                            description: "නව OIDC විෂය පථය සාර්ථකව",
                            message: "නිර්මාණය සාර්ථකයි"
                        }
                    },
                    deleteOIDCScope: {
                        error: {
                            description: "{{description}}",
                            message: "මකාදැමීමේ දෝෂයකි"
                        },
                        genericError: {
                            description: "OIDC විෂය පථය මකාදැමීමේදී දෝෂයක් සිදුවිය.",
                            message: "යම් දෝෂයක් ඇති වී ඇත"
                        },
                        success: {
                            description: "OIDC විෂය පථය සාර්ථකව මකා දමන ලදි.",
                            message: "මකාදැමීම සාර්ථකයි"
                        }
                    },
                    deleteOIDClaim: {
                        error: {
                            description: "{{description}}",
                            message: "මකාදැමීමේ දෝෂයකි"
                        },
                        genericError: {
                            description: "OIDC ගුණාංගය මකාදැමීමේදී දෝෂයක් සිදුවිය.",
                            message: "යම් දෝෂයක් ඇති වී ඇත"
                        },
                        success: {
                            description: "OIDC ගුණාංගය සාර්ථකව මකා දමන ලදි.",
                            message: "මකාදැමීම සාර්ථකයි"
                        }
                    },
                    fetchOIDCScope: {
                        error: {
                            description: "{{description}}",
                            message: "නැවත ලබා ගැනීමේ දෝෂයකි"
                        },
                        genericError: {
                            description: "OIDC විෂය පථය ලබා ගැනීමේදී දෝෂයක් ඇතිවිය.",
                            message: "යම් දෝෂයක් ඇති වී ඇත"
                        },
                        success: {
                            description: "OIDC විෂය පථයේ තොරතුරු සාර්ථකව ලබා ගන්නා ලදි.",
                            message: "නැවත ලබා ගැනීම සාර්ථකයි"
                        }
                    },
                    fetchOIDCScopes: {
                        error: {
                            description: "{{description}}",
                            message: "නැවත ලබා ගැනීමේ දෝෂයකි"
                        },
                        genericError: {
                            description: "OIDC විෂය පථය ලබා ගැනීමේදී දෝෂයක් ඇතිවිය.",
                            message: "යම් දෝෂයක් ඇති වී ඇත"
                        },
                        success: {
                            description: "OIDC විෂය පථය සාර්ථකව ලබා ගන්නා ලදි.",
                            message: "නැවත ලබා ගැනීම සාර්ථකයි"
                        }
                    },
                    fetchOIDClaims: {
                        error: {
                            description: "{{description}}",
                            message: "නැවත ලබා ගැනීමේ දෝෂයකි"
                        },
                        genericError: {
                            description: "OIDC ගුණාංග ලබා ගැනීමේදී දෝෂයක් ඇතිවිය.",
                            message: "යම් දෝෂයක් ඇති වී ඇත"
                        },
                        success: {
                            description: "OIDC විෂය පථය සාර්ථකව ලබා ගන්නා ලදි.",
                            message: "නැවත ලබා ගැනීම සාර්ථකයි"
                        }
                    },
                    updateOIDCScope: {
                        error: {
                            description: "{{description}}",
                            message: "යාවත්කාලීන දෝෂයකි"
                        },
                        genericError: {
                            description: "OIDC විෂය පථය යාවත්කාලීන කිරීමේදී දෝෂයක් ඇතිවිය.",
                            message: "යම් දෝෂයක් ඇති වී ඇත"
                        },
                        success: {
                            description: "OIDC විෂය පථය සාර්ථකව යාවත්කාලීන කරන ලදි.",
                            message: "යාවත්කාලීන කිරීම සාර්ථකයි"
                        }
                    }
                },
                placeholders:{
                    emptyList: {
                        action: "නව OIDC විෂය පථය",
                        subtitles: {
                            0: "දැනට OIDC විෂය පථ නොමැත.",
                            1: "පහත දැක්වෙන කරුණු අනුගමනය කිරීමෙන් ඔබට නව OIDC විෂය පථයක් පහසුවෙන්"
                                + " එකතු කළ හැකිය",
                            2: "නිර්මාණ විශාරදයේ පියවර."
                        },
                        title: "නව OIDC විෂය පථයක් එක් කරන්න"
                    },
                    emptySearch: {
                        action: "සියල්ල බලන්න",
                        subtitles: {
                            0: "ඔබ සෙවූ විෂය පථය අපට සොයාගත නොහැකි විය.",
                            1: "කරුණාකර වෙනත් නමක් උත්සාහ කරන්න.",
                        },
                        title: "ප්‍රතිපල හමු නොවීය"
                    }
                },
                wizards: {
                    addScopeWizard: {
                        buttons: {
                            next: "ලබන",
                            previous: "කලින්"
                        },
                        claimList: {
                            searchPlaceholder: "සෙවුම් ගුණාංග",
                            table: {
                                emptyPlaceholders: {
                                    assigned: "මෙම OIDC විෂය පථය සඳහා පවතින සියලුම ගුණාංග පවරා ඇත.",
                                    unAssigned: "මෙම OIDC විෂය පථය සඳහා කිසිදු ගුණාංගයක් පවරා නොමැත."
                                },
                                header: "ගුණාංග"
                            }
                        },
                        steps: {
                            basicDetails: "මූලික විස්තර",
                            claims: "ගුණාංග එකතු කරන්න"
                        },
                        subTitle: "අවශ්‍ය ගුණාංග සහිත නව OIDC විෂය පථයක් සාදන්න",
                        title: "OIDC විෂය පථය සාදන්න"
                    }
                }
            },
            overview: {
                widgets: {
                    insights: {
                        groups: {
                            heading: "කණ්ඩායම්",
                            subHeading: "කණ්ඩායම් පිළිබඳ දළ විශ්ලේෂණය"
                        },
                        users: {
                            heading: "පරිශීලකයින්",
                            subHeading: "පරිශීලකයින්ගේ දළ විශ්ලේෂණය"
                        }
                    },
                    overview: {
                        cards: {
                            groups: {
                                heading: "කණ්ඩායම්"
                            },
                            users: {
                                heading: "පරිශීලකයින්"
                            },
                            userstores: {
                                heading: "පරිශීලක වෙළඳසැල්"
                            }
                        },
                        heading: "දළ විශ්ලේෂණය",
                        subHeading: "නිදසුනෙහි තත්වය අවබෝධ කර ගැනීම සඳහා මූලික සංඛ්‍යාලේඛන සමූහය."
                    },
                    quickLinks: {
                        cards: {
                            certificates: {
                                heading: "සහතික",
                                subHeading: "යතුරු ගබඩාවේ සහතික කළමනාකරණය කරන්න."
                            },
                            dialects: {
                                heading: "උපභාෂා ආරෝපණය කරන්න",
                                subHeading: "ගුණාංග උපභාෂා කළමනාකරණය කරන්න."
                            },
                            emailTemplates: {
                                heading: "විද්‍යුත් තැපැල් ආකෘති",
                                subHeading: "විද්‍යුත් තැපැල් සැකිලි කළමනාකරණය කරන්න."
                            },
                            generalConfigs: {
                                heading: "සාමාන්‍ය වින්‍යාසයන්",
                                subHeading: "වින්‍යාස කිරීම්, ප්‍රතිපත්ති ආදිය කළමනාකරණය කරන්න."
                            },
                            groups: {
                                heading: "කණ්ඩායම්",
                                subHeading: "පරිශීලක කණ්ඩායම් සහ අවසර කළමනාකරණය කරන්න."
                            },
                            roles: {
                                heading: "භූමිකාවන්",
                                subHeading: "පරිශීලක භූමිකාවන් සහ අවසර කළමනාකරණය කරන්න."
                            }
                        },
                        heading: "ඉක්මන් සබැඳි",
                        subHeading: "විශේෂාංග වෙත ඉක්මනින් සැරිසැරීමට සබැඳි."
                    }
                }
            },
            privacy: {
                about: {
                    description: "WSO2 හැඳුනුම් සේවාදායකය (මෙම ප්‍රතිපත්තිය තුළ “WSO2 IS” ලෙස හැඳින්වේ) යනු විවෘත " +
                        "ප්‍රමිතීන් සහ පිරිවිතර මත පදනම් වූ විවෘත මූලාශ්‍ර අනන්‍යතා කළමනාකරණ සහ හිමිකම් සේවාදායකයකි.",
                    heading: "WSO2 හැඳුනුම් සේවාදායකය ගැන"
                },
                privacyPolicy: {
                    collectionOfPersonalInfo: {
                        description: {
                            list1: {
                                0: "WSO2 IS ඔබගේ ගිණුමට සැක සහිත පිවිසුම් උත්සාහයන් හඳුනා ගැනීමට ඔබගේ"
                                    + " IP ලිපිනය භාවිතා කරයි.",
                                1: "WSO2 IS පොහොසත් සහ පුද්ගලාරෝපිත පරිශීලක අත්දැකීමක් ලබා දීම සඳහා ඔබේ " +
                                    "මුල් නම, අවසාන නම වැනි ගුණාංග භාවිතා කරයි.",
                                2: "WSO2 IS ඔබගේ ආරක්ෂක ප්‍රශ්න සහ පිළිතුරු භාවිතා කරන්නේ ගිණුම්"
                                    + " ප්‍රතිසාධනය සඳහා පමණි."
                            },
                            para1: "WSO2 IS ඔබේ තොරතුරු රැස් කරන්නේ ඔබේ ප්‍රවේශ අවශ්‍යතා සපුරාලීම"
                                + " සඳහා පමණි. උදාහරණයක් වශයෙන්"
                        },
                        heading: "පුද්ගලික තොරතුරු එකතු කිරීම",
                        trackingTechnologies: {
                            description: {
                                list1: {
                                    0: "ඔබ ඔබේ පුද්ගලික දත්ත ඇතුළත් කරන පරිශීලක පැතිකඩ පිටුවෙන්" +
                                        " තොරතුරු රැස් කිරීම.",
                                    1: "HTTP ඉල්ලීම, HTTP ශීර්ෂයන් සහ TCP / IP සමඟ ඔබගේ IP ලිපිනය සොයා ගැනීම.",
                                    2: "ඔබගේ භූගෝලීය තොරතුරු IP ලිපිනය සමඟ ලුහුබැඳීම.",
                                    3: "ඔබගේ පිවිසුම් ඉතිහාසය බ්‍රව්සර් කුකී සමඟ ලුහුබැඳීම. වැඩි විස්තර " +
                                        "සඳහා කරුණාකර අපගේ {{cookiePolicyLink} බලන්න."
                                },
                                para1: "WSO2 IS විසින් ඔබේ තොරතුරු රැස් කරයි"
                            },
                            heading: "ලුහුබැඳීමේ තාක්ෂණයන්"
                        }
                    },
                    description: {
                        para1: "මෙම ප්‍රතිපත්තියෙන් WSO2 IS ඔබේ පුද්ගලික තොරතුරු, එකතු කිරීමේ අරමුණු සහ ඔබේ " +
                            "පුද්ගලික තොරතුරු රඳවා තබා ගැනීම පිළිබඳ තොරතුරු ග්‍රහණය කරගන්නේ කෙසේද" +
                            " යන්න විස්තර කරයි.",
                        para2: "මෙම ප්‍රතිපත්තිය යොමු කිරීම සඳහා පමණක් වන අතර එය නිෂ්පාදනයක් ලෙස මෘදුකාංගයට" +
                            " අදාළ වන බව කරුණාවෙන් සලකන්න. WSO2 Inc. සහ එහි සංවර්ධකයින්ට WSO2 IS තුළ ඇති" +
                            " තොරතුරු වෙත ප්‍රවේශයක් නොමැත. වැඩි විස්තර සඳහා"
                                + " කරුණාකර <1> වියාචනය </ 1> කොටස බලන්න.",
                        para3: "WSO2 IS හි භාවිතය සහ පරිපාලනය පාලනය කරන ආයතන, සංවිධාන හෝ පුද්ගලයින් " +
                            "අදාළ ආයතනය, සංවිධානය හෝ පුද්ගලයා විසින් දත්ත පාලනය කරන හෝ සකසන ආකාරය " +
                            "සැකසෙන තමන්ගේම රහස්‍යතා ප්‍රතිපත්ති නිර්මාණය කළ යුතුය."
                    },
                    disclaimer: {
                        description: {
                            list1: {
                                0: "WSO2, එහි සේවකයින්, හවුල්කරුවන් සහ අනුබද්ධ සමාගම්වලට WSO2 IS හි අඩංගු" +
                                    " පුද්ගලික දත්ත ඇතුළුව කිසිදු දත්තයකට ප්‍රවේශ වීමට අවශ්‍ය නොවන අතර ගබඩා කිරීම," +
                                    " සැකසීම හෝ පාලනය කිරීම අවශ්‍ය නොවේ. පුද්ගලික දත්ත ඇතුළුව සියලුම දත්ත " +
                                    "පාලනය කරනු ලබන්නේ සහ සැකසෙන්නේ WSO2 IS ආයතනය විසිනි. WSO2, එහි සේවක" +
                                    " හවුල්කරුවන් සහ අනුබද්ධයන් කිසිදු දත්ත රහස්‍යතා රෙගුලාසි වල අර්ථය තුළ දත්ත " +
                                    "සකසනයක් හෝ දත්ත පාලකයක් නොවේ. WSO2 එවැනි ආයතන හෝ පුද්ගලයින් විසින් WSO2" +
                                    " IS භාවිතා කරනු ලබන නීත්‍යානුකූල භාවය හෝ WSO2 IS භාවිතා කරන ආකාරය සහ " +
                                    "අරමුණු සම්බන්ධයෙන් කිසිදු වගකීමක් හෝ වගකීමක් හෝ වගකීමක් භාර නොගනී.",
                                1: "මෙම රහස්‍යතා ප්‍රතිපත්තිය WSO2 IS ක්‍රියාත්මක වන ආයතනයේ හෝ පුද්ගලයන්ගේ " +
                                    "තොරතුරු අරමුණු සඳහා වන අතර පුද්ගලික දත්ත ආරක්ෂණය සම්බන්ධයෙන් WSO2 IS " +
                                    "තුළ අඩංගු ක්‍රියාවලීන් සහ ක්‍රියාකාරිත්වය නියම කරයි. WSO2 IS පවත්වාගෙන යන " +
                                    "ආයතනවල සහ පුද්ගලයන්ගේ වගකීම වන්නේ පරිශීලකයින්ගේ පුද්ගලික දත්ත " +
                                    "පාලනය කරන තමන්ගේම නීති රීති සහ ක්‍රියාවලීන් නිර්මාණය" +
                                    "කිරීම සහ පරිපාලනය කිරීමයි. එවැනි නීතිරීති හා ක්‍රියාවලීන් " +
                                    "මෙහි අඩංගු භාවිතය, ගබඩා කිරීම සහ අනාවරණය කිරීමේ " +
                                    "ප්‍රතිපත්ති වෙනස් කළ හැකිය. එබැවින් පරිශීලකයින්ගේ පුද්ගලික දත්ත පාලනය කරන " +
                                    "තොරතුරු සඳහා පරිශීලකයින් එහි පුද්ගලිකත්ව ප්‍රතිපත්තියක් සඳහා WSO2 IS ධාවනය " +
                                    "කරන පුද්ගලයින්ගෙන් හෝ පුද්ගලයින්ගෙන් උපදෙස් ලබා ගත යුතුය."
                            }
                        },
                        heading: "වියාචනය"
                    },
                    disclosureOfPersonalInfo: {
                        description: "WSO2 IS විසින් WSO2 IS හි ලියාපදිංචි කර ඇති අදාළ යෙදුම් වලට (සේවා " +
                            "සැපයුම්කරු ලෙසද හැඳින්වේ) පුද්ගලික තොරතුරු පමණක් අනාවරණය කරයි. මෙම අයදුම්පත් " +
                            "ලියාපදිංචි කර ඇත්තේ ඔබේ ආයතනයේ හෝ සංවිධානයේ අනන්‍යතා පරිපාලක විසිනි. පුද්ගලික " +
                            "තොරතුරු අනාවරණය වන්නේ ඔබ විසින් වෙනත් ආකාරයකින් කැමැත්ත ප්‍රකාශ කර නොමැති " +
                            "නම් හෝ නීතියෙන් අවශ්‍ය වන ස්ථානයක මිස, එවැනි සේවා සපයන්නන් විසින් පාලනය කරනු " +
                            "ලබන, එකතු කරන ලද අරමුණු සඳහා (හෝ එම අරමුණට අනුකූල යැයි හඳුනාගත් " +
                            "භාවිතයක් සඳහා) පමණි.",
                        heading: "පුද්ගලික තොරතුරු අනාවරණය කිරීම",
                        legalProcess: {
                            description: "WSO2 IS ආයතනයට, ආයතනයට හෝ පුද්ගලිකව ක්‍රියාත්මක වන පුද්ගලයාට ඔබේ " +
                                "පුද්ගලික තොරතුරු නීතියෙන් නියම කළ යුතු හා නීත්‍යානුකූල ක්‍රියාවලියක් අවශ්‍ය වූ විට " +
                                "ඔබේ කැමැත්තෙන් හෝ නැතිව අනාවරණය කිරීමට බල කෙරෙනු ඇති බව " +
                                "කරුණාවෙන් සලකන්න.",
                            heading: "නීති ක්‍රියාවලිය"
                        }
                    },
                    heading: "රහස්යතා ප්රතිපත්තිය",
                    moreInfo: {
                        changesToPolicy: {
                            description: {
                                para1: "WSO2 IS හි යාවත්කාලීන කරන ලද අනුවාද වල මෙම ප්‍රතිපත්තියේ වෙනස්කම් අඩංගු " +
                                    "විය හැකි අතර මෙම ප්‍රතිපත්තියේ සංශෝධන එවැනි වැඩිදියුණු කිරීම් තුළ ඇසුරුම් කරනු " +
                                    "ලැබේ. එවැනි වෙනස්කම් අදාළ වන්නේ නවීකරණය කරන ලද අනුවාදයන් භාවිතා කිරීමට" +
                                    " තෝරා ගන්නා පරිශීලකයින්ට පමණි.",
                                para2: "WSO2 IS පවත්වාගෙන යන සංවිධානය වරින් වර රහස්‍යතා ප්‍රතිපත්තිය සංශෝධනය " +
                                    "කළ හැකිය. WSO2 IS ක්‍රියාත්මක වන සංවිධානය විසින් සපයනු ලබන අදාළ සබැඳිය " +
                                    "සමඟ ඔබට නවතම පාලන ප්‍රතිපත්තිය සොයාගත හැකිය. අපගේ නිල පොදු නාලිකා " +
                                    "හරහා රහස්‍යතා ප්‍රතිපත්තියේ යම් වෙනසක් සංවිධානය විසින් දැනුම් දෙනු ඇත."
                            },
                            heading: "මෙම ප්‍රතිපත්තියේ වෙනස්කම්"
                        },
                        contactUs: {
                            description: {
                                para1: "මෙම රහස්‍යතා ප්‍රතිපත්තිය සම්බන්ධයෙන් ඔබට කිසියම් ප්‍රශ්නයක් හෝ ප්‍රශ්නයක් " +
                                    "ඇත්නම් කරුණාකර WSO2 අමතන්න."
                            },
                            heading: "අප අමතන්න"
                        },
                        heading: "වැඩි විස්තර",
                        yourChoices: {
                            description: {
                                para1: "ඔබට දැනටමත් WSO2 IS තුළ පරිශීලක ගිණුමක් තිබේ නම්, මෙම රහස්‍යතා ප්‍රතිපත්තිය " +
                                    "ඔබට පිළිගත නොහැකි බව ඔබ දුටුවහොත් ඔබේ ගිණුම අක්‍රිය කිරීමට ඔබට අයිතියක් ඇත.",
                                para2: "ඔබට ගිණුමක් නොමැති නම් සහ අපගේ රහස්‍යතා ප්‍රතිපත්තියට ඔබ එකඟ නොවන්නේ " +
                                    "නම්, ඔබට එකක් නිර්මාණය නොකිරීමට තෝරා ගත හැකිය."
                            },
                            heading: "ඔබේ තේරීම්"
                        }
                    },
                    storageOfPersonalInfo: {
                        heading: "පුද්ගලික තොරතුරු ගබඩා කිරීම",
                        howLong: {
                            description: {
                                list1: {
                                    0: "වත්මන් මුරපදය",
                                    1: "කලින් භාවිතා කළ මුරපද"
                                },
                                para1: "ඔබ අපගේ පද්ධතියේ ක්‍රියාකාරී පරිශීලකයෙකු වන තාක් WSO2 IS ඔබේ පුද්ගලික " +
                                    "දත්ත රඳවා තබා ගනී. ලබා දී ඇති ස්වයං රැකවරණ පරිශීලක ද්වාර භාවිතා කරමින් ඔබට" +
                                    " ඕනෑම වේලාවක ඔබේ පුද්ගලික දත්ත යාවත්කාලීන කළ හැකිය.",
                                para2: "WSO2 IS මඟින් ඔබට අමතර මට්ටමේ ආරක්ෂාවක් ලබා දීම සඳහා රහසිගත රහස් තබා " +
                                    "ගත හැකිය. මෙම ඇතුළත්:"
                            },
                            heading: "ඔබේ පුද්ගලික තොරතුරු කොපමණ කාලයක් රඳවා තබා ගනීද?"
                        },
                        requestRemoval: {
                            description: {
                                para1: "ඔබට ඔබගේ ගිණුම මැකීමට පරිපාලක ඉල්ලා සිටිය හැක. පරිපාලකයා යනු ඔබ " +
                                    "යටතේ ලියාපදිංචි වී ඇති කුලී නිවැසියන්ගේ පරිපාලකයා හෝ ඔබ " +
                                    "කුලී නිවැසියන්ගේ ලක්ෂණය භාවිතා නොකරන්නේ නම් සුපිරි පරිපාලකයා ය.",
                                para2: "මීට අමතරව, WSO2 IS ල logs ු-සටහන්, දත්ත සමුදායන් හෝ විශ්ලේෂණ ආචයනයන් " +
                                    "තුළ රඳවාගෙන ඇති ඔබගේ ක්‍රියාකාරකම්වල සියලු අංශ නිර්නාමික කිරීමට" +
                                    " ඔබට ඉල්ලිය හැකිය."
                            },
                            heading: "ඔබගේ පුද්ගලික තොරතුරු ඉවත් කිරීමට ඉල්ලන්නේ කෙසේද"
                        },
                        where: {
                            description: {
                                para1: "WSO2 IS ඔබගේ පුද්ගලික තොරතුරු ආරක්ෂිත දත්ත ගබඩාවල ගබඩා කරයි. WSO2 IS " +
                                    "ඔබේ පුද්ගලික තොරතුරු තබා ඇති දත්ත සමුදාය ආරක්ෂා කිරීම සඳහා නිසි කර්මාන්ත " +
                                    "පිළිගත් ආරක්ෂක පියවරයන් ක්‍රියාත්මක කරයි. WSO2 IS යනු නිෂ්පාදනයක් " +
                                    "ලෙස ඔබේ දත්ත කිසිදු තෙවන පාර්ශවයක් හෝ ස්ථානයක් සමඟ හුවමාරු නොකරයි.",
                                para2: "WSO2 IS ඔබේ පුද්ගලික දත්ත අමතර මට්ටමේ ආරක්ෂාවක් සහිතව තබා " +
                                    "ගැනීමට සංකේතනය භාවිතා කරයි."
                            },
                            heading: "ඔබේ පුද්ගලික තොරතුරු ගබඩා කර ඇති තැන"
                        }
                    },
                    useOfPersonalInfo: {
                        description: {
                            list1: {
                                0: "ඔබට පුද්ගලික පරිශීලක අත්දැකීමක් ලබා දීමට. WSO2 IS මේ සඳහා ඔබේ නම සහ " +
                                    "උඩුගත කළ පැතිකඩ පින්තූර භාවිතා කරයි.",
                                1: "අනවසරයෙන් පිවිසීමෙන් හෝ අනවසරයෙන් ඇතුළුවීමේ උත්සාහයන්ගෙන් ඔබගේ ගිණුම " +
                                    "ආරක්ෂා කිරීමට. WSO2 IS මේ සඳහා HTTP හෝ TCP / IP ශීර්ෂ භාවිතා කරයි.",
                                2: "පද්ධති කාර්ය සාධනය වැඩි දියුණු කිරීම පිළිබඳ විශ්ලේෂණාත්මක අරමුණු සඳහා සංඛ්‍යාන " +
                                    "දත්ත ලබා ගන්න. WSO2 IS සංඛ්‍යානමය ගණනය කිරීම් වලින් පසුව කිසිදු පුද්ගලික " +
                                    "තොරතුරක් තබා නොගනී. එබැවින් සංඛ්‍යාලේඛන වාර්තාවට තනි පුද්ගලයෙකු හඳුනා"
                                        + " ගැනීමට ක්‍රමයක් නොමැත."
                            },
                            para1: "WSO2 IS ඔබේ පුද්ගලික තොරතුරු භාවිතා කරනු ලැබුවේ එය එකතු කරන ලද අරමුණු " +
                                "සඳහා පමණි (හෝ එම අරමුණු වලට අනුකූල බව හඳුනාගත් භාවිතය සඳහා).",
                            para2: "WSO2 IS ඔබේ පුද්ගලික තොරතුරු භාවිතා කරන්නේ පහත සඳහන් අරමුණු සඳහා පමණි.",
                            subList1: {
                                heading: "මෙයට ඇතුළත් වේ",
                                list: {
                                    0: "IP ලිපිනය",
                                    1: "බ්‍රව්සරයේ ඇඟිලි සලකුණු",
                                    2: "කුකීස්"
                                }
                            },
                            subList2: {
                                heading: "WSO2 IS භාවිතා කළ හැකිය",
                                list: {
                                    0: "භූගෝලීය තොරතුරු ලබා ගැනීම සඳහා IP ලිපිනය",
                                    1: "බ්‍රව්සර් තාක්‍ෂණය හෝ / සහ අනුවාදය තීරණය කිරීම සඳහා බ්‍රව්සරයේ ඇඟිලි සලකුණු"
                                }
                            }
                        },
                        heading: "පුද්ගලික තොරතුරු භාවිතය"
                    },
                    whatIsPersonalInfo: {
                        description: {
                            list1: {
                                0: "ඔබේ පරිශීලක නාමය (ඔබේ සේවායෝජකයා විසින් නිර්මාණය කරන ලද " +
                                    "පරිශීලක නාමය ගිවිසුම්ගතව ඇති අවස්ථා හැර))",
                                1: "ඔබගේ උපන් දිනය / වයස",
                                2: "පුරනය වීමට භාවිතා කරන IP ලිපිනය",
                                3: "ඔබ පිවිසීමට උපාංගයක් (උදා: දුරකථන හෝ ටැබ්ලටය) භාවිතා කරන්නේ නම්"
                                    + " ඔබගේ උපාංග හැඳුනුම්පත"
                            },
                            list2: {
                                0: "ඔබ TCP / IP සම්බන්ධතාවය ආරම්භ කළ නගරය / රට",
                                1: "ඔබ පුරනය වූ දවසේ වේලාව (වර්ෂය, මාසය, සතිය, පැය හෝ මිනිත්තුව)",
                                2: "ඔබ පුරනය වීමට භාවිතා කළ උපාංග වර්ගය (උදා: දුරකථන හෝ ටැබ්ලටය)",
                                3: "මෙහෙයුම් පද්ධතිය සහ සාමාන්‍ය බ්‍රව්සර් තොරතුරු"
                            },
                            para1: "WSO2 IS ඔබ හා සම්බන්ධ ඕනෑම දෙයක් සලකන අතර ඔබව හඳුනාගත හැකි ඒවා ඔබේ " +
                                "පුද්ගලික තොරතුරු ලෙස සලකනු ලැබේ. මෙයට ඇතුළත් නමුත් ඒවාට පමණක් සීමා නොවේ:",
                            para2: "කෙසේ වෙතත්, WSO2 IS පුද්ගලික තොරතුරු ලෙස නොසැලකෙන පහත තොරතුරු රැස් " +
                                "කරයි, නමුත් එය භාවිතා කරනුයේ <1> සංඛ්‍යාන </ 1> අරමුණු සඳහා පමණි. " +
                                "එයට හේතුව මෙම තොරතුරු ඔබව ලුහුබැඳීමට භාවිතා කළ නොහැකි වීමයි."
                        },
                        heading: "පුද්ගලික තොරතුරු යනු කුමක්ද?"
                    }
                }
            },
            remoteFetch: {
                components: {
                    status: {
                        details: "විස්තර",
                        header: "දුරස්ථ වින්‍යාසයන්",
                        hint: "දැනට කිසිදු යෙදුමක් යොදවා නොමැත.",
                        linkPopup: {
                            content: "",
                            header: "GitHub නිධිය URL",
                            subHeader: ""
                        },
                        refetch: "නැවත ලබා ගන්න"
                    }
                },
                forms: {
                    getRemoteFetchForm: {
                        actions: {
                            remove: "වින්‍යාසය ඉවත් කරන්න",
                            save: "වින්‍යාසය සුරකින්න"
                        },
                        fields: {
                            accessToken: {
                                label: "GitHub පුද්ගලික ප්‍රවේශ ටෝකනය",
                                placeholder: "පුද්ගලික ප්‍රවේශ ටෝකනය"
                            },
                            connectivity: {
                                children: {
                                    polling: {
                                        label: "Polling"
                                    },
                                    webhook: {
                                        label: "Webhook"
                                    }
                                },
                                label: "සම්බන්ධතා යාන්ත්‍රණය"
                            },
                            enable: {
                                hint: "යෙදුම් ලබා ගැනීම සඳහා වින්‍යාසය සක්‍රීය කරන්න",
                                label: "ලබා ගැනීමේ වින්‍යාසය සක්‍රීය කරන්න"
                            },
                            gitBranch: {
                                hint: "යෙදුම් ලබා ගැනීම සඳහා වින්‍යාසය සක්‍රීය කරන්න",
                                label: "GitHub ශාඛාව",
                                placeholder: "උදා : Main",
                                validations: {
                                    required: "GitHub ශාඛාව අවශ්‍යයි."
                                }
                            },
                            gitFolder: {
                                hint: "යෙදුම් ලබා ගැනීම සඳහා වින්‍යාසය සක්‍රීය කරන්න",
                                label: "GitHub නාමාවලිය",
                                placeholder: "උදා : SampleConfigFolder/",
                                validations: {
                                    required: "GitHub වින්‍යාස නාමාවලිය අවශ්‍යයි."
                                }
                            },
                            gitURL: {
                                label: "GitHub නිධිය URL",
                                placeholder: "උදා : https://github.com/samplerepo/sample-project",
                                validations: {
                                    required: "GitHub නිධිය URL අවශ්‍යයි."
                                }
                            },
                            pollingFrequency: {
                                label: "Polling Frequency"
                            },
                            sharedKey: {
                                label: "GitHub හවුල් යතුර"
                            },
                            username: {
                                label: "GitHub පරිශීලක නාමය",
                                placeholder: "උදා: John Doe"
                            }
                        },
                        heading: {
                            subTitle: "යෙදුම් ලබා ගැනීම සඳහා නිධිය වින්‍යාස කරන්න",
                            title: "යෙදුම් වින්‍යාස කිරීමේ ගබඩාව"
                        }
                    }
                },
                modal: {
                    appStatusModal: {
                        description: "",
                        heading: "යෙදුම් ලබා ගැනීමේ තත්වය",
                        primaryButton: "යෙදුම් නැවත ලබා ගන්න",
                        secondaryButton: ""
                    }
                },
                notifications: {
                    createRepoConfig: {
                        error: {
                            description: "{{ description }}",
                            message: "දෝෂයක් සාදන්න"
                        },
                        genericError: {
                            description: "දුරස්ථ නිධි වින්‍යාසය නිර්මාණය කිරීමේදී දෝෂයක් ඇතිවිය.",
                            message: "දෝෂයක් සාදන්න"
                        },
                        success: {
                            description: "දුරස්ථ නිධි වින්‍යාසය සාර්ථකව නිර්මාණය කරන ලදි.",
                            message: "සාර්ථක ලෙස සාදන ලදී"
                        }
                    },
                    deleteRepoConfig: {
                        error: {
                            description: "{{ description }}",
                            message: "දෝෂය මකන්න"
                        },
                        genericError: {
                            description: "දුරස්ථ නිධි වින්‍යාසය මකාදැමීමේදී දෝෂයක් ඇතිවිය.",
                            message: "දෝෂය මකන්න"
                        },
                        success: {
                            description: "දුරස්ථ නිධි වින්‍යාසය සාර්ථකව මකා දමන ලදි.",
                            message: "සාර්ථකව මකා දමන්න"
                        }
                    },
                    getConfigDeploymentDetails: {
                        error: {
                            description: "{{ description }}",
                            message: "දත්ත ලබා ගැනීමේ දෝෂයක්"
                        },
                        genericError: {
                            description: "යෙදවීමේ තොරතුරු ලබා ගැනීමේදී දෝෂයක් ඇතිවිය.",
                            message: "දත්ත ලබා ගැනීමේ දෝෂයක්"
                        },
                        success: {
                            description: "යෙදවීමේ විස්තර සාර්ථකව ලබා ගන්නා ලදි.",
                            message: "නැවත ලබා ගැනීම සාර්ථකයි"
                        }
                    },
                    getConfigList: {
                        error: {
                            description: "{{ description }}",
                            message: "දත්ත ලබා ගැනීමේ දෝෂයක්"
                        },
                        genericError: {
                            description: "යෙදවීමේ වින්‍යාස ලැයිස්තුව ලබා ගැනීමේදී දෝෂයක් ඇතිවිය.",
                            message: "දත්ත ලබා ගැනීමේ දෝෂයක්"
                        },
                        success: {
                            description: "යෙදවීමේ වින්‍යාස ලැයිස්තුව සාර්ථකව ලබා ගන්නා ලදි.",
                            message: "නැවත ලබා ගැනීම සාර්ථකයි"
                        }
                    },
                    getRemoteRepoConfig: {
                        error: {
                            description: "{{ description }}",
                            message: "දත්ත ලබා ගැනීමේ දෝෂයක්"
                        },
                        genericError: {
                            description: "නිධිය වින්‍යාසය ලබා ගැනීමේදී දෝෂයක් ඇතිවිය.",
                            message: "දත්ත ලබා ගැනීමේ දෝෂයක්"
                        },
                        success: {
                            description: "නිධිය වින්‍යාසය සාර්ථකව ලබා ගන්නා ලදි.",
                            message: "නැවත ලබා ගැනීම සාර්ථකයි"
                        }
                    },
                    triggerConfigDeployment: {
                        error: {
                            description: "{{ description }}",
                            message: "යෙදවීමේ දෝෂය"
                        },
                        genericError: {
                            description: "නිධි වින්‍යාසයන් යෙදවීමේදී දෝෂයක් ඇතිවිය.",
                            message: "යෙදවීමේ දෝෂය"
                        },
                        success: {
                            description: "නිධි වින්‍යාසයන් සාර්ථකව යොදවා ඇත.",
                            message: "යෙදවීම සාර්ථකයි"
                        }
                    }
                },
                pages: {
                    listing: {
                        subTitle: "හැඳුනුම් සේවාදායකය සමඟ බාධාවකින් තොරව වැඩ කිරීමට ගිතුබ් ගබඩාව " +
                            "වින්‍යාස කරන්න.",
                        title: "දුරස්ථ වින්‍යාසයන්"
                    }
                },
                placeholders: {
                    emptyListPlaceholder: {
                        action: "දුරස්ථ වින්‍යාසයන්",
                        subtitles: "දැනට කිසිදු ගබඩාවක් වින්‍යාස කර නොමැත. ඔබට නව වින්‍යාසයක් එක් කළ හැකිය.",
                        title: "වින්‍යාසය එක් කරන්න"
                    }
                }
            },
            roles: {
                addRoleWizard: {
                    buttons: {
                        finish: "අවසන් කරන්න",
                        next: "ලබන",
                        previous: "කලින්"
                    },
                    forms: {
                        roleBasicDetails: {
                            domain: {
                                label: {
                                    group: "පරිශීලක වෙළඳසැල",
                                    role: "භූමිකාව වර්ගය"
                                },
                                placeholder: "වසම්",
                                validation: {
                                    empty: {
                                        group: "පරිශීලක ගබඩාව තෝරන්න",
                                        role: "භූමිකාව වර්ගය තෝරන්න"
                                    }
                                }
                            },
                            roleName: {
                                label: "{{type}} නම",
                                placeholder: "Enter {{type}} නම ඇතුළත් කරන්න",
                                validations: {
                                    duplicate: "දී ඇති {{type}} with නම සමඟ {{type}} දැනටමත් පවතී.",
                                    empty: "ඉදිරියට යාමට {{type}} නම අවශ්‍ය වේ.",
                                    invalid: "කරුණාකර වලංගු {{type}} නමක් ඇතුළත් කරන්න."
                                }
                            }
                        }
                    },
                    heading: "{{Type}} සාදන්න",
                    permissions: {
                        buttons: {
                            collapseAll: "සියල්ල හකුලන්න",
                            expandAll: "සියල්ල පුළුල් කරන්න",
                            update: "යාවත්කාලීන කරන්න"
                        }
                    },
                    subHeading: "නිශ්චිත අවසරයන් සහිතව පද්ධතිය තුළ නව {{වර්ගයේ} create සාදන්න",
                    summary: {
                        labels: {
                            domain: {
                                group: "පරිශීලක වෙළඳසැල",
                                role: "භූමිකාව වර්ගය"
                            },
                            groups: "පවරා ඇති කණ්ඩායම් (ය)",
                            permissions: "අවසර (ය)",
                            roleName: "{{type}} නම",
                            users: "පවරා ඇති පරිශීලකයින් (ය)"
                        }
                    },
                    users: {
                        assignUserModal: {
                            heading: "යාවත්කාලීන කරන්න {{type}} පරිශීලකයින්",
                            list: {
                                listHeader: "නම",
                                searchPlaceholder: "පරිශීලකයින් සොයන්න"
                            },
                            subHeading: "නව පරිශීලකයින් එක් කරන්න හෝ  {{type}} වෙත පවරා ඇති පවතින"
                                + " පරිශීලකයින් ඉවත් කරන්න."
                        }
                    },
                    wizardSteps: {
                        0: "මූලික විස්තර",
                        1: "අවසර තෝරා ගැනීම",
                        2: "පරිශීලකයින් යොදවන්න",
                        3: "සාරාංශය",
                        4: "කණ්ඩායම් සහ පරිශීලකයින්",
                        5: "භූමිකාවන් පවරන්න"
                    }
                },
                advancedSearch: {
                    form: {
                        inputs: {
                            filterAttribute: {
                                placeholder: "උදා. භූමිකාවේ නම."
                            },
                            filterCondition: {
                                placeholder: "උදා. ආදිය සමඟ ආරම්භ වේ."
                            },
                            filterValue: {
                                placeholder: "සෙවීමට අගය ඇතුළත් කරන්න"
                            }
                        }
                    },
                    placeholder: "භූමිකාවේ නම අනුව සොයන්න"
                },
                edit: {
                    basics: {
                        buttons: {
                            update: "යාවත්කාලීන කරන්න"
                        },
                        confirmation: {
                            assertionHint: "තහවුරු කිරීමට කරුණාකර <1>{{roleName}}</1> ටයිප් කරන්න.",
                            content: "ඔබ මෙම {{type}} මකා දැමුවහොත්, එයට අනුයුක්ත කර ඇති අවසරයන් මකා දැමෙනු "
                                + "ඇති අතර එයට අනුයුක්ත කර ඇති පරිශීලකයින්ට කලින් අවසර දී ඇති අපේක්ෂිත ක්‍රියා සිදු "
                                + "කිරීමට තවදුරටත් නොහැකි වනු ඇත. කරුණාකර ප්‍රවේශමෙන් ඉදිරියට යන්න",
                            header: "ඔබට විශ්වාසද?",
                            message: "මෙම ක්‍රියාව ආපසු හැරවිය නොහැකි අතර තෝරාගත් {{type}} ස්ථිරවම මකා දමනු ඇත."
                        },
                        dangerZone: {
                            actionTitle: "{{type}} මකන්න",
                            header: "{{type}} මකන්න",
                            subheader: "ඔබ {{type}} මකා දැමූ පසු, ආපසු යාමක් නොමැත. කරුණාකර ස්ථිර වන්න."
                        },
                        fields: {
                            roleName: {
                                name: "භූමිකාවේ නම",
                                placeholder: "ඔබගේ භූමිකාවේ නම ඇතුළත් කරන්න",
                                required: "භූමිකාවේ නම අවශ්‍යයි"
                            }
                        }
                    },
                    groups: {
                        addGroupsModal: {
                            heading: "කාර්යභාර කණ්ඩායම් යාවත්කාලීන කරන්න",
                            subHeading: "නව කණ්ඩායම් එකතු කරන්න හෝ භූමිකාවට පවරා ඇති පවතින"
                                + " කණ්ඩායම් ඉවත් කරන්න."
                        },
                        emptyPlaceholder: {
                            action: "කණ්ඩායම පවරන්න",
                            subtitles: "මේ වන විට මෙම භූමිකාවට කිසිදු කණ්ඩායමක් පවරා නොමැත.",
                            title: "කණ්ඩායම් පවරා නොමැත"
                        },
                        heading: "පවරා ඇති කණ්ඩායම්",
                        subHeading: "මෙම භූමිකාවට පවරා ඇති කණ්ඩායම් එකතු කරන්න හෝ ඉවත් කරන්න. "
                            + "මෙය ඇතැම් කාර්යයන් ඉටු කිරීමට බලපානු ඇති බව සලකන්න."
                    },
                    menuItems: {
                        basic: "මූලික කරුණු",
                        groups: "කණ්ඩායම්",
                        permissions: "අවසර",
                        roles: "භූමිකාවන්",
                        users: "පරිශීලකයින්"
                    },
                    users: {
                        list: {
                            emptyPlaceholder: {
                                action: "පරිශීලකයා පවරන්න",
                                subtitles: "මේ මොහොතේ {{type}} to සඳහා පරිශීලකයින් පවරා නොමැත.",
                                title: "පරිශීලකයින් පවරා නොමැත"
                            },
                            header: "පරිශීලකයින්"
                        }
                    }
                },
                list: {
                    buttons: {
                        addButton: "නව {{type}}",
                        filterDropdown: "පෙරණය"
                    },
                    columns: {
                        actions: "ක්‍රියා",
                        lastModified: "අවසන් වරට වෙනස් කරන ලදි",
                        name: "නම"
                    },
                    confirmations: {
                        deleteItem: {
                            assertionHint: "තහවුරු කිරීමට කරුණාකර <1>{{roleName}}</1> ටයිප් කරන්න.",
                            content: "ඔබ මෙම {{type}} මකා දැමුවහොත්, එයට අනුයුක්ත කර ඇති අවසරයන් මකා දැමෙනු " +
                                "ඇති අතර එයට අනුයුක්ත කර ඇති පරිශීලකයින්ට කලින් අවසර දී ඇති අපේක්ෂිත " +
                                "ක්‍රියා සිදු කිරීමට තවදුරටත් නොහැකි වනු ඇත. කරුණාකර ප්‍රවේශමෙන් ඉදිරියට යන්න.",
                            header: "ඔබට විශ්වාසද?",
                            message: "මෙම ක්‍රියාව ආපසු හැරවිය නොහැකි අතර තෝරාගත් {{type}} ස්ථිරවම මකා දමනු ඇත."
                        }
                    },
                    emptyPlaceholders: {
                        emptyRoleList: {
                            action: "නව {{type}}",
                            subtitles: {
                                0: "දැනට {{type}} නොමැත.",
                                1: "පහත දැක්වෙන දේ අනුගමනය කිරීමෙන් ඔබට පහසුවෙන් නව {{type}} එකතු කළ හැකිය",
                                2: "{{type}} නිර්මාණ විශාරදයේ පියවර."
                            },
                            title: "නව {{type}} එකතු කරන්න"
                        },
                        search: {
                            action: "සෙවුම් විමසුම හිස් කරන්න",
                            subtitles: {
                                0: "{{type}} සඳහා අපට කිසිදු ප්‍රතිපලයක් සොයාගත නොහැකි විය",
                                1: "කරුණාකර වෙනත් සෙවුම් පදයක් උත්සාහ කරන්න."
                            },
                            title: "ප්‍රතිපල හමු නොවීය"
                        }
                    },
                    popups: {
                        delete: "{{type}} delete මකන්න",
                        edit: "{{type}} සංස්කරණය කරන්න"
                    }
                },
                notifications: {
                    createPermission: {
                        error: {
                            description: "{{description}}",
                            message: "භූමිකාවට අවසර එකතු කිරීමේදී දෝෂයක් ඇතිවිය."
                        },
                        genericError: {
                            description: "භූමිකාවට අවසර එකතු කළ නොහැක.",
                            message: "යම් දෝෂයක් ඇති වී ඇත"
                        },
                        success: {
                            description: "භූමිකාවට අවසර සාර්ථකව එකතු කරන ලදි.",
                            message: "භූමිකාව සාර්ථකව නිර්මාණය විය."
                        }
                    },
                    createRole: {
                        error: {
                            description: "{{description}}",
                            message: "භූමිකාව නිර්මාණය කිරීමේදී දෝෂයක් ඇතිවිය."
                        },
                        genericError: {
                            description: "භූමිකාව නිර්මාණය කිරීමට නොහැකි විය.",
                            message: "යම් දෝෂයක් ඇති වී ඇත"
                        },
                        success: {
                            description: "භූමිකාව සාර්ථකව නිර්මාණය විය.",
                            message: "භූමිකාව සාර්ථකව නිර්මාණය විය."
                        }
                    },
                    deleteRole: {
                        error: {
                            description: "{{description}}",
                            message: "තෝරාගත් භූමිකාව මකාදැමීමේ දෝෂයකි."
                        },
                        genericError: {
                            description: "තෝරාගත් භූමිකාව ඉවත් කිරීමට නොහැකි විය.",
                            message: "යම් දෝෂයක් ඇති වී ඇත"
                        },
                        success: {
                            description: "තෝරාගත් භූමිකාව සාර්ථකව මකා දමන ලදි.",
                            message: "කාර්යභාරය සාර්ථකව මකා දමන ලදි"
                        }
                    },
                    fetchRoles: {
                        genericError: {
                            description: "භූමිකාවන් ලබා ගැනීමේදී දෝෂයක් ඇතිවිය.",
                            message: "යම් දෝෂයක් ඇති වී ඇත"
                        }
                    },
                    updateRole: {
                        error: {
                            description: "{{description}}",
                            message: "තෝරාගත් භූමිකාව යාවත්කාලීන කිරීමේදී දෝෂයකි."
                        },
                        genericError: {
                            description: "තෝරාගත් භූමිකාව යාවත්කාලීන කළ නොහැක.",
                            message: "යම් දෝෂයක් ඇති වී ඇත"
                        },
                        success: {
                            description: "තෝරාගත් භූමිකාව සාර්ථකව යාවත්කාලීන කරන ලදි.",
                            message: "කාර්යභාරය සාර්ථකව යාවත්කාලීන කරන ලදි"
                        }
                    }
                }
            },
            serverConfigs: {
                realmConfiguration: {
                    actionTitles: {
                        config: "තව"
                    },
                    confirmation: {
                        heading: "තහවුරු කිරීම",
                        message: "රාජධානියට අදාළ වින්‍යාසයන් සුරැකීමට ඔබ කැමතිද?"
                    },
                    description: "රාජධානියට අදාළ මූලික වින්‍යාසයන් වින්‍යාස කරන්න.",
                    form: {
                        homeRealmIdentifiers: {
                            hint: "ගෘහස්ථ හඳුනාගැනීමේ යන්ත්‍රය ඇතුළත් කරන්න. බහු හඳුනාගැනීම් සඳහා අවසර ඇත.",
                            label: "ගෘහස්ථ හඳුනාගැනීම්",
                            placeholder: "localhost"
                        },
                        idleSessionTimeoutPeriod: {
                            hint: "නිෂ්ක්‍රීය සැසි කල් ඉකුත්වීම මිනිත්තු කිහිපයකින් ඇතුළත් කරන්න",
                            label: "නිෂ්ක්‍රීය සැසි කාලය අවසන්"
                        },
                        rememberMePeriod: {
                            hint: "මතක තබා ගැනීමේ කාල සීමාව මිනිත්තු කිහිපයකින් ඇතුළත් කරන්න",
                            label: "මාව මතක තබා ගන්න"
                        }
                    },
                    heading: "තාත්වික වින්‍යාසයන්",
                    notifications: {
                        emptyHomeRealmIdentifiers: {
                            error: {
                                description: "ඔබ අවම වශයෙන් එක් නිවාස ක්ෂේත්‍ර හඳුනාගැනීමක් ප්‍රකාශ කළ යුතුය.",
                                message: "දත්ත වලංගු කිරීමේ දෝෂයකි"
                            },
                            genericError: {
                                description: "",
                                message: ""
                            },
                            success: {
                                description: "",
                                message: ""
                            }
                        },
                        getConfigurations: {
                            error: {
                                description: "{{ description }}",
                                message: "ලබා ගැනීමේ දෝෂයකි"
                            },
                            genericError: {
                                description: "රාජධානියේ වින්‍යාසයන් ලබා ගැනීමේදී දෝෂයක් ඇතිවිය.",
                                message: "යම් දෝෂයක් ඇති වී ඇත"
                            },
                            success: {
                                description: "",
                                message: ""
                            }
                        },
                        updateConfigurations: {
                            error: {
                                description: "{{ description }}",
                                message: "යාවත්කාලීන කිරීමේ දෝෂයකි"
                            },
                            genericError: {
                                description: "තාත්වික වින්‍යාසයන් යාවත්කාලීන කිරීමේදී දෝෂයක් ඇතිවිය.",
                                message: "යාවත්කාලීන කිරීමේ දෝෂයකි"
                            },
                            success: {
                                description: "රාජධානියේ වින්‍යාසයන් සාර්ථකව යාවත්කාලීන කරන ලදි.",
                                message: "යාවත්කාලීන කිරීම සාර්ථකයි"
                            }
                        }
                    }
                }
            },
            sidePanel: {
                addEmailTemplate: "විද්‍යුත් තැපැල් අච්චුව එක් කරන්න",
                addEmailTemplateLocale: "විද්‍යුත් තැපැල් ආකෘති පෙදෙසි එක් කරන්න",
                approvals: "අනුමත කිරීම්",
                attributeDialects: "උපභාෂා ආරෝපණය කරන්න",
                categories: {
                    attributes: "ගුණාංග",
                    certificates: "සහතික",
                    configurations: "වින්‍යාස කිරීම්",
                    general: "ජනරාල්",
                    users: "පරිශීලකයින්",
                    userstores: "පරිශීලක වෙළඳසැල්"
                },
                certificates: "සහතික",
                configurations: "වින්‍යාස කිරීම්",
                editEmailTemplate: "විද්‍යුත් තැපැල් ආකෘති",
                editExternalDialect: "බාහිර උපභාෂාව සංස්කරණය කරන්න",
                editGroups: "කණ්ඩායම සංස්කරණය කරන්න",
                editLocalClaims: "දේශීය හිමිකම් සංස්කරණය කරන්න",
                editRoles: "භූමිකාව සංස්කරණය කරන්න",
                editUsers: "පරිශීලක සංස්කරණය කරන්න",
                editUserstore: "පරිශීලක වෙළඳසැල සංස්කරණය කරන්න",
                emailTemplateTypes: "",
                emailTemplates: "විද්‍යුත් තැපැල් ආකෘති",
                generalConfigurations: "ජනරාල්",
                groups: "කණ්ඩායම්",
                localDialect: "දේශීය උපභාෂාව",
                overview: "දළ විශ්ලේෂණය",
                privacy: "පෞද්ගලිකත්වය",
                roles: "භූමිකාවන්",
                users: "පරිශීලකයින්",
                userstoreTemplates: "පරිශීලක වෙළඳසැල් සැකිලි",
                userstores: "පරිශීලක වෙළඳසැල්"
            },
            transferList: {
                list: {
                    emptyPlaceholders: {
                        default: "මේ වන විට මෙම ලැයිස්තුවේ අයිතම නොමැත.",
                        groups: {
                            selected: "මෙම කණ්ඩායමට පවරා ඇති {{type}} නොමැත.",
                            unselected: "මෙම කණ්ඩායමට පැවරීම සඳහා {{type}} නොමැත."
                        },
                        roles: {
                            selected: "මෙම භූමිකාව සමඟ පවරා ඇති {{type}} නොමැත.",
                            unselected: "මෙම භූමිකාව සමඟ පැවරීම සඳහා {{type}} නොමැත."
                        },
                        users: {
                            roles: {
                                selected: "මෙම පරිශීලකයාට {{type}} පවරා නොමැත.",
                                unselected: "මෙම පරිශීලකයාට පැවරීම සඳහා {{type}} නොමැත."
                            }
                        }
                    },
                    headers: {
                        0: "වසම්",
                        1: "නම"
                    }
                },
                searchPlaceholder: "සොයන්න {{type}}"
            },
            user: {
                deleteUser: {
                    confirmationModal: {
                        assertionHint: "තහවුරු කිරීමට කරුණාකර <1>{{userName}}</1> ටයිප් කරන්න.",
                        content: "ඔබ මෙම පරිශීලකයා මකා දැමුවහොත්, පරිශීලකයාට මගේ ගිණුමට හෝ පරිශීලකයා මීට " +
                            "පෙර දායක වූ වෙනත් යෙදුමකට ප්‍රවේශ විය නොහැක. කරුණාකර ප්‍රවේශමෙන් ඉදිරියට යන්න.",
                        header: "ඔබට විශ්වාසද?",
                        message: "මෙම ක්‍රියාව ආපසු හැරවිය නොහැකි අතර එය පරිශීලකයා ස්ථිරවම මකා දමනු ඇත."
                    }
                },
                disableUser: {
                    confirmationModal: {
                        assertionHint: "තහවුරු කිරීමට කරුණාකර <1>{{userName}}</1> ටයිප් කරන්න.",
                        content: "ඔබ මෙම පරිශීලකයා අක්‍රීය කළහොත්, පරිශීලකයාට මගේ ගිණුමට හෝ පරිශීලකයා මීට " +
                            "පෙර දායක වූ වෙනත් යෙදුමකට ප්‍රවේශ විය නොහැක. කරුණාකර ප්‍රවේශමෙන් ඉදිරියට යන්න.",
                        header: "ඔබට විශ්වාසද?",
                        message: "පරිශීලකයාට තවදුරටත් පද්ධතියට ප්‍රවේශය අවශ්‍ය නොවන බවට වග බලා ගන්න."
                    }
                },
                editUser: {
                    dangerZoneGroup: {
                        deleteUserZone: {
                            actionTitle: "පරිශීලකයා මකන්න",
                            header: "පරිශීලකයා මකන්න",
                            subheader: "ඔබ පරිශීලකයෙකු මකා දැමූ පසු, ආපසු යාමක් නොමැත. කරුණාකර ස්ථිර වන්න."
                        },
                        disableUserZone: {
                            actionTitle: "පරිශීලකයා අක්‍රීය කරන්න",
                            header: "පරිශීලකයා අක්‍රීය කරන්න",
                            subheader: "ඔබ ගිණුමක් අක්‍රිය කළ පසු, පරිශීලකයාට පද්ධතියට ප්‍රවේශ විය නොහැක. " +
                                "කරුණාකර ස්ථිර වන්න."
                        },
                        header: "අන්තරා කලාපය",
                        lockUserZone: {
                            actionTitle: "අගුළු පරිශීලකයා",
                            header: "අගුළු පරිශීලකයා",
                            subheader: "ඔබ ගිණුම අගුළු දැමූ පසු, පරිශීලකයාට තවදුරටත් පද්ධතියට ප්‍රවේශ විය නොහැක. " +
                                "කරුණාකර ස්ථිර වන්න."
                        }
                    }
                },
                forms: {
                    addUserForm: {
                        buttons: {
                            radioButton: {
                                label: "පරිශීලක මුරපදය සැකසීමේ ක්‍රමය තෝරන්න",
                                options: {
                                    askPassword: "මුරපදය සැකසීමට පරිශීලකයාට ආරාධනා කරන්න",
                                    createPassword: "පරිශීලක මුරපදය සකසන්න"
    
                                }
                            }
                        },
                        inputs: {
                            confirmPassword: {
                                label: "මුරපදය තහවුරු කරන්න",
                                placeholder: "නව මුරපදය ඇතුළත් කරන්න",
                                validations: {
                                    empty: "මුරපදය තහවුරු කිරීම අත්‍යවශ්‍ය ක්ෂේත්‍රයකි",
                                    mismatch: "මුරපද තහවුරු කිරීම නොගැලපේ"
                                }
                            },
                            domain: {
                                label: "Userstore",
                                placeholder: "පරිශීලක ගබඩාව තෝරන්න",
                                validations: {
                                    empty: "User store name cannot be empty."
                                }
                            },
                            email: {
                                label: "විද්යුත් තැපැල් ලිපිනය",
                                placeholder: "ඊමේල් ලිපිනය ඇතුළත් කරන්න",
                                validations: {
                                    empty: "විද්‍යුත් තැපැල් ලිපිනය හිස් විය නොහැක",
                                    invalid: "කරණාකර වලංගු ඊතැපැල් ලිපිනයක් ඇතුළු කරන්න"
                                }
                            },
                            firstName: {
                                label: "මුල් නම",
                                placeholder: "ඔබේ මුල් නම ඇතුළත් කරන්න",
                                validations: {
                                    empty: "පළමු නම අත්‍යවශ්‍ය ක්ෂේත්‍රයකි"
                                }
                            },
                            lastName: {
                                label: "අවසන් නම",
                                placeholder: "ඔබගේ අවසාන නම ඇතුළත් කරන්න",
                                validations: {
                                    empty: "අවසාන නම අත්‍යවශ්‍ය ක්ෂේත්‍රයකි"
                                }
                            },
                            newPassword: {
                                label: "නව මුරපදය",
                                placeholder: "නව මුරපදය ඇතුළත් කරන්න",
                                validations: {
                                    empty: "නව මුරපදය අත්‍යවශ්‍ය ක්ෂේත්‍රයකි",
                                    regExViolation: "කරුණාකර වලංගු මුරපදයක් ඇතුළත් කරන්න"
                                }
                            },
                            username: {
                                label: "පරිශීලක නාමය",
                                placeholder: "පරිශීලක නාමය ඇතුළත් කරන්න",
                                validations: {
                                    empty: "පරිශීලක නාමය අත්‍යවශ්‍ය ක්ෂේත්‍රයකි",
                                    invalid: "මෙම පරිශීලක නාමය සමඟ පරිශීලකයෙකු දැනටමත් සිටී.",
                                    invalidCharacters: "පරිශීලක නාමය අවලංගු අක්ෂර අඩංගු බව පෙනේ.",
                                    regExViolation: "කරුණාකර වලංගු පරිශීලක නාමයක් ඇතුළත් කරන්න."
                                }
                            }
                        },
                        validations: {
                            genericError: {
                                description: "යම් දෝෂයක් ඇති වී ඇත. කරුණාකර නැවත උත්සාහ කරන්න",
                                message: "මුරපද දෝෂය වෙනස් කරන්න"
                            },
                            invalidCurrentPassword: {
                                description: "ඔබ ඇතුලත් කළ මුරපදය අවලංගු බව පෙනේ. කරුණාකර නැවත උත්සාහ කරන්න",
                                message: "මුරපද දෝෂය වෙනස් කරන්න"
                            },
                            submitError: {
                                description: "{{description}}",
                                message: "මුරපද දෝෂය වෙනස් කරන්න"
                            },
                            submitSuccess: {
                                description: "මුරපදය සාර්ථකව වෙනස් කර ඇත",
                                message: "මුරපද යළි පිහිටුවීම සාර්ථකයි"
                            }
                        }
                    }
                },
                lockUser: {
                    confirmationModal: {
                        assertionHint: "තහවුරු කිරීමට කරුණාකර <1>{{userName}}</1> ටයිප් කරන්න.",
                        content: "ඔබ මෙම පරිශීලකයා අගුළු දැමුවහොත්, පරිශීලකයාට මගේ ගිණුමට හෝ පරිශීලකයා මීට " +
                            "පෙර දායක වූ වෙනත් යෙදුමකට ප්‍රවේශ විය නොහැක. කරුණාකර ප්‍රවේශමෙන් ඉදිරියට යන්න.",
                        header: "ඔබට විශ්වාසද?",
                        message: "මෙම පරිශීලකයා පද්ධතියට ප්‍රවේශ වීම වැළැක්විය යුතු බවට වග බලා ගන්න."
                    }
                },
                modals: {
                    addUserWarnModal: {
                        heading: "අවවාදයයි",
                        message: "මෙම නිර්මාණය කළ පරිශීලකයාට කාර්යභාරයක් පැවරෙන්නේ නැති බව කරුණාවෙන්" +
                            " සලකන්න. ඔබට මෙම පරිශීලකයාට භූමිකාවන් පැවරීමට අවශ්‍ය නම් කරුණාකර"
                                + " පහත බොත්තම ක්ලික් කරන්න."
                    },
                    addUserWizard: {
                        buttons: {
                            next: "ලබන",
                            previous: "කලින්"
                        },
                        steps: {
                            basicDetails: "මූලික විස්තර",
                            groups: "පරිශීලක කණ්ඩායම්",
                            roles: "පරිශීලක භූමිකාවන්",
                            summary: "සාරාංශය"
                        },
                        subTitle: "නව පරිශීලකයා නිර්මාණය කිරීමට පියවර අනුගමනය කරන්න",
                        title: "පරිශීලක සාදන්න",
                        wizardSummary: {
                            domain: "පරිශීලක වෙළඳසැල",
                            groups: "කණ්ඩායම්)",
                            name: "නම",
                            passwordOption: {
                                label: "මුරපද විකල්පය",
                                message: {
                                    0: "මුරපදය සැකසීමට සබැඳිය සමඟ {{email}} වෙත විද්‍යුත් තැපෑලක් යවනු ලැබේ.",
                                    1: "මුරපදය පරිපාලක විසින් සකසා ඇත."
                                }
                            },
                            roles: "කාර්යභාරය (ය)",
                            username: "පරිශීලක නාමය"
                        }
                    },
                    changePasswordModal: {
                        header: "පරිශීලක මුරපදය වෙනස් කරන්න",
                        message: "සටහන" +
                            "able to log into any application using the current password."
                    }
                },
                profile: {
                    fields: {
                        /* eslint-disable @typescript-eslint/camelcase */
                        addresses_home: "නිවසේ ලිපිනය",
                        addresses_work: "වැඩ ලිපිනය",
                        emails: "විද්යුත් තැපෑල",
                        emails_home: "මුල් පිටුව විද්‍යුත් තැපෑල",
                        emails_other: "වෙනත් විද්‍යුත් තැපෑල",
                        emails_work: "වැඩ ඊමේල්",
                        generic: {
                            default: "{{FieldName} එකතු කරන්න"
                        },
                        name_familyName: "අවසන් නම",
                        name_givenName: "මුල් නම",
                        oneTimePassword: "එක් වරක් මුරපදය",
                        phoneNumbers: "දුරකතන අංකය",
                        phoneNumbers_home: "නිවසේ දුරකථන අංකය",
                        phoneNumbers_mobile: "ජංගම දූරකථන අංකය",
                        phoneNumbers_other: "වෙනත් දුරකථන අංකය",
                        phoneNumbers_work: "වැඩ කරන දුරකථන අංකය",
                        profileUrl: "URL",
                        userName: "පරිශීලක නාමය"
                        /* eslint-enable @typescript-eslint/camelcase */
                    },
                    forms: {
                        emailChangeForm: {
                            inputs: {
                                email: {
                                    label: "විද්යුත් තැපෑල",
                                    note: "සටහන",
                                    placeholder: "ඔබගේ විද්‍යුත් තැපැල් ලිපිනය ඇතුළත් කරන්න",
                                    validations: {
                                        empty: "විද්‍යුත් තැපැල් ලිපිනය අත්‍යවශ්‍ය ක්ෂේත්‍රයකි",
                                        invalidFormat: "ඊමේල් ලිපිනය නිවැරදි ආකෘතියෙන් නොවේ"
                                    }
                                }
                            }
                        },
                        generic: {
                            inputs: {
                                placeholder: "ඔබගේ {{fieldName}} ඇතුළත් කරන්න",
                                validations: {
                                    empty: "{{fieldName}} යනු අත්‍යවශ්‍ය ක්ෂේත්‍රයකි",
                                    invalidFormat: "{{FieldName}} නිවැරදි ආකෘතියෙන් නොවේ"
                                }
                            }
                        },
                        mobileChangeForm: {
                            inputs: {
                                mobile: {
                                    label: "ජංගම දූරකථන අංකය",
                                    note: "සටහන",
                                    placeholder: "ඔබගේ ජංගම දුරකථන අංකය ඇතුලත් කරන්න",
                                    validations: {
                                        empty: "ජංගම දුරකථන අංකය අත්‍යවශ්‍ය ක්ෂේත්‍රයකි",
                                        invalidFormat: "ජංගම දුරකථන අංකය නිවැරදි ආකෘතියෙන් නොවේ"
                                    }
                                }
                            }
                        },
                        nameChangeForm: {
                            inputs: {
                                firstName: {
                                    label: "මුල් නම",
                                    placeholder: "පළමු නම ඇතුළත් කරන්න",
                                    validations: {
                                        empty: "පළමු නම අත්‍යවශ්‍ය ක්ෂේත්‍රයකි"
                                    }
                                },
                                lastName: {
                                    label: "අවසන් නම",
                                    placeholder: "අවසාන නම ඇතුළත් කරන්න",
                                    validations: {
                                        empty: "අවසාන නම අත්‍යවශ්‍ය ක්ෂේත්‍රයකි"
                                    }
                                }
                            }
                        },
                        organizationChangeForm: {
                            inputs: {
                                organization: {
                                    label: "ආයතනය",
                                    placeholder: "ඔබේ සංවිධානයට ඇතුළු වන්න",
                                    validations: {
                                        empty: "සංවිධානය අත්‍යවශ්‍ය ක්ෂේත්‍රයකි"
                                    }
                                }
                            }
                        }
                    },
                    notifications: {
                        changeUserPassword: {
                            error: {
                                description: "{{description}}",
                                message: "පරිශීලක මුරපදය වෙනස් කිරීමේදී දෝෂයක් ඇතිවිය."
                            },
                            genericError: {
                                description: "පරිශීලක මුරපදය වෙනස් කිරීමේදී දෝෂයක් ඇතිවිය",
                                message: "යම් දෝෂයක් ඇති වී ඇත"
                            },
                            success: {
                                description: "පරිශීලකයාගේ මුරපදය සාර්ථකව වෙනස් කරන ලදි",
                                message: "මුරපදය සාර්ථකව වෙනස් කරන ලදි"
                            }
                        },
                        disableUserAccount: {
                            error: {
                                description: "{{description}}",
                                message: "පරිශීලක ගිණුම අක්‍රීය කිරීමේදී දෝෂයක් ඇතිවිය."
                            },
                            genericError: {
                                description: "පරිශීලක ගිණුම අක්‍රීය කිරීමේදී දෝෂයක් ඇතිවිය",
                                message: "යම් දෝෂයක් ඇති වී ඇත"
                            },
                            success: {
                                description: "පරිශීලක ගිණුම සාර්ථකව අක්‍රීය කර ඇත",
                                message: "{{name}} ගිණුම අක්‍රීය කර ඇත"
                            }
                        },
                        enableUserAccount: {
                            error: {
                                description: "{{description}}",
                                message: "පරිශීලක ගිණුම සක්‍රීය කිරීමේදී දෝෂයක් ඇතිවිය."
                            },
                            genericError: {
                                description: "පරිශීලක ගිණුම සක්‍රීය කිරීමේදී දෝෂයක් ඇතිවිය",
                                message: "යම් දෝෂයක් ඇති වී ඇත"
                            },
                            success: {
                                description: "පරිශීලක ගිණුම සාර්ථකව සක්‍රීය කර ඇත",
                                message: "{{name}} ගිණුම සක්‍රීය කර ඇත"
                            }
                        },
                        forcePasswordReset: {
                            error: {
                                description: "{{description}}",
                                message: "මුරපද යළි පිහිටුවීමේ ප්‍රවාහය ක්‍රියාත්මක කිරීමේදී දෝෂයක් ඇතිවිය."
                            },
                            genericError: {
                                description: "මුරපද යළි පිහිටුවීමේ ප්‍රවාහය ක්‍රියාත්මක කිරීමේදී දෝෂයක් ඇතිවිය",
                                message: "යම් දෝෂයක් ඇති වී ඇත"
                            },
                            success: {
                                description: "පරිශීලක ගිණුමේ මුරපද යළි පිහිටුවීම සාර්ථකව ක්‍රියාත්මක විය",
                                message: "මුරපද යළි පිහිටුවීම සාර්ථකව ක්‍රියාත්මක විය"
                            }
                        },
                        getProfileInfo: {
                            error: {
                                description: "{{description}}",
                                message: "පැතිකඩ විස්තර ලබා ගැනීමේදී දෝෂයක් ඇතිවිය"
                            },
                            genericError: {
                                description: "පැතිකඩ විස්තර ලබා ගැනීමේදී දෝෂයක් ඇතිවිය",
                                message: "යම් දෝෂයක් ඇති වී ඇත"
                            },
                            success: {
                                description: "අවශ්‍ය පරිශීලක පැතිකඩ විස්තර සාර්ථකව ලබා ගනී",
                                message: "පරිශීලක පැතිකඩ සාර්ථකව ලබා ගන්නා ලදි"
                            }
                        },
                        lockUserAccount: {
                            error: {
                                description: "{{description}}",
                                message: "පරිශීලක ගිණුම අගුළු දැමීමේදී දෝෂයක් ඇතිවිය."
                            },
                            genericError: {
                                description: "පරිශීලක ගිණුම අගුළු දැමීමේදී දෝෂයක් ඇතිවිය.",
                                message: "යම් දෝෂයක් ඇති වී ඇත"
                            },
                            success: {
                                description: "පරිශීලක ගිණුම සාර්ථකව අගුළු දමා ඇත.",
                                message: "{{name}} ගිණුම අගුළු දමා ඇත"
                            }
                        },
                        noPasswordResetOptions: {
                            error: {
                                description: "බල මුරපද විකල්ප කිසිවක් සක්‍රීය කර නැත.",
                                message: "බල මුරපද යළි පිහිටුවීම ක්‍රියාත්මක කිරීමට නොහැකි විය"
                            }
                        },
                        unlockUserAccount: {
                            error: {
                                description: "{{description}}",
                                message: "පරිශීලක ගිණුම අගුළු ඇරීමේදී දෝෂයක් ඇතිවිය."
                            },
                            genericError: {
                                description: "පරිශීලක ගිණුම අගුළු ඇරීමේදී දෝෂයක් ඇතිවිය.",
                                message: "යම් දෝෂයක් ඇති වී ඇත"
                            },
                            success: {
                                description: "පරිශීලක ගිණුම සාර්ථකව අගුළු හරින ලදි.",
                                message: "{{name}} ගිණුම අගුළු හරිනු ලැබේ"
                            }
                        },
                        updateProfileInfo: {
                            error: {
                                description: "{{description}}",
                                message: "පැතිකඩ විස්තර යාවත්කාලීන කිරීමේදී දෝෂයක් ඇතිවිය"
                            },
                            genericError: {
                                description: "පැතිකඩ විස්තර යාවත්කාලීන කිරීමේදී දෝෂයක් ඇතිවිය",
                                message: "යම් දෝෂයක් ඇති වී ඇත"
                            },
                            success: {
                                description: "අවශ්‍ය පරිශීලක පැතිකඩ විස්තර සාර්ථකව යාවත්කාලීන කරන ලදි",
                                message: "පරිශීලක පැතිකඩ සාර්ථකව යාවත්කාලීන කරන ලදි"
                            }
                        }
                    },
                    placeholders: {
                        SCIMDisabled: {
                            heading: "මෙම අංගය ඔබගේ ගිණුමට ලබා ගත නොහැක"
                        }
                    }
                },
                updateUser: {
                    groups: {
                        addGroupsModal: {
                            heading: "පරිශීලක කණ්ඩායම් යාවත්කාලීන කරන්න",
                            subHeading: "නව කණ්ඩායම් එකතු කරන්න හෝ පරිශීලකයාට පවරා ඇති පවතින"
                                + " කණ්ඩායම් ඉවත් කරන්න."
                        },
                        editGroups: {
                            groupList: {
                                emptyListPlaceholder: {
                                    subTitle: {
                                        0: "මේ වන විට පරිශීලකයාට කණ්ඩායම් පවරා නොමැත.",
                                        1: "මෙය පරිශීලකයාට නිශ්චිත දේ කිරීම සීමා කරයි",
                                        2: "සමහර යෙදුම් වලට ප්‍රවේශ වීම වැනි කාර්යයන්."
                                    },
                                    title: "කණ්ඩායම් පවරා නොමැත"
                                },
                                headers: {
                                    0: "වසම්",
                                    1: "නම"
                                }
                            },
                            heading: "පවරා ඇති කණ්ඩායම්",
                            popups: {
                                viewPermissions: "අවසර බලන්න"
                            },
                            searchPlaceholder: "කණ්ඩායම් සොයන්න",
                            subHeading: "පරිශීලකයාට පවරා ඇති කණ්ඩායම් එකතු කිරීම හෝ ඉවත් කිරීම සහ " +
                                "මෙය ඇතැම් කාර්යයන් ඉටු කිරීමට බලපාන බව සලකන්න."
                        },
                        notifications: {
                            addUserGroups: {
                                error: {
                                    description: "{{description}}",
                                    message: "පරිශීලක කණ්ඩායම් යාවත්කාලීන කිරීමේදී දෝෂයක් ඇතිවිය"
                                },
                                genericError: {
                                    description: "පරිශීලක කණ්ඩායම් යාවත්කාලීන කිරීමේදී දෝෂයක් ඇතිවිය",
                                    message: "යම් දෝෂයක් ඇති වී ඇත"
                                },
                                success: {
                                    description: "පරිශීලකයා සඳහා නව කණ්ඩායම් පැවරීම සාර්ථකයි",
                                    message: "යාවත්කාලීන පරිශීලක කණ්ඩායම් සාර්ථකයි"
                                }
                            },
                            fetchUserGroups: {
                                error: {
                                    description: "{{description}}",
                                    message: "කණ්ඩායම් ලැයිස්තුව ලබා ගැනීමේදී දෝෂයක් ඇතිවිය"
                                },
                                genericError: {
                                    description: "කණ්ඩායම් ලැයිස්තුව ලබා ගැනීමේදී දෝෂයක් ඇතිවිය",
                                    message: "යම් දෝෂයක් ඇති වී ඇත"
                                },
                                success: {
                                    description: "කණ්ඩායම් ලැයිස්තුව සාර්ථකව ලබා ගන්නා ලදි",
                                    message: "පරිශීලක කණ්ඩායම් ලැයිස්තුව සාර්ථකව ලබා ගන්නා ලදි"
                                }
                            },
                            removeUserGroups: {
                                error: {
                                    description: "{{description}}",
                                    message: "පරිශීලකයාගේ කණ්ඩායම් යාවත්කාලීන කිරීමේදී දෝෂයක් ඇතිවිය"
                                },
                                genericError: {
                                    description: "පරිශීලක කණ්ඩායම් යාවත්කාලීන කිරීමේදී දෝෂයක් ඇතිවිය",
                                    message: "යම් දෝෂයක් ඇති වී ඇත"
                                },
                                success: {
                                    description: "පරිශීලකයා සඳහා පවරා ඇති කණ්ඩායම් ඉවත් කිරීම සාර්ථකයි",
                                    message: "යාවත්කාලීන පරිශීලක කණ්ඩායම් සාර්ථකයි"
                                }
                            }
                        }
                    },
                    roles: {
                        addRolesModal: {
                            heading: "පරිශීලක භූමිකාවන් යාවත්කාලීන කරන්න",
                            subHeading: "නව භූමිකාවන් එක් කරන්න හෝ පරිශීලකයාට පවරා ඇති පවතින"
                                + " භූමිකාවන් ඉවත් කරන්න."
                        },
                        editRoles: {
                            heading: "පවරා ඇති භූමිකාවන්",
                            popups: {
                                viewPermissions: "අවසර බලන්න"
                            },
                            roleList: {
                                emptyListPlaceholder: {
                                    subTitle: {
                                        0: "මේ වන විට පරිශීලකයාට කිසිදු භූමිකාවක් පවරා නොමැත.",
                                        1: "මෙය පරිශීලකයාට නිශ්චිත දේ කිරීම සීමා කරයි",
                                        2: "සමහර යෙදුම් වලට ප්‍රවේශ වීම වැනි කාර්යයන්."
                                    },
                                    title: "භූමිකාවන් පවරා නොමැත"
                                },
                                headers: {
                                    0: "වසම්",
                                    1: "නම"
                                }
                            },
                            searchPlaceholder: "සෙවුම් භූමිකාවන්",
                            subHeading: "මෙම පරිශීලකයාට පවරා ඇති භූමිකාවන් එකතු කිරීම හෝ ඉවත් කිරීම සහ " +
                                "මෙය ඇතැම් කාර්යයන් ඉටු කිරීමට බලපානු ඇති බව සලකන්න."
                        },
                        notifications: {
                            addUserRoles: {
                                error: {
                                    description: "{{description}}",
                                    message: "පරිශීලක භූමිකාවන් යාවත්කාලීන කිරීමේදී දෝෂයක් ඇතිවිය"
                                },
                                genericError: {
                                    description: "පරිශීලක භූමිකාවන් යාවත්කාලීන කිරීමේදී දෝෂයක් ඇතිවිය",
                                    message: "යම් දෝෂයක් ඇති වී ඇත"
                                },
                                success: {
                                    description: "පරිශීලකයා සඳහා නව භූමිකාවන් පැවරීම සාර්ථකයි",
                                    message: "යාවත්කාලීන පරිශීලක භූමිකාවන් සාර්ථකයි"
                                }
                            },
                            fetchUserRoles: {
                                error: {
                                    description: "{{description}}",
                                    message: "භූමිකාවන් ලැයිස්තුව ලබා ගැනීමේදී දෝෂයක් ඇතිවිය"
                                },
                                genericError: {
                                    description: "භූමිකාවන් ලැයිස්තුව ලබා ගැනීමේදී දෝෂයක් ඇතිවිය",
                                    message: "යම් දෝෂයක් ඇති වී ඇත"
                                },
                                success: {
                                    description: "භූමිකාවන් ලැයිස්තුව සාර්ථකව ලබා ගන්නා ලදි",
                                    message: "පරිශීලක භූමිකාවන් ලැයිස්තුව සාර්ථකව ලබා ගන්නා ලදි"
                                }
                            },
                            removeUserRoles: {
                                error: {
                                    description: "{{description}}",
                                    message: "පරිශීලකයාගේ භූමිකාවන් යාවත්කාලීන කිරීමේදී දෝෂයක් ඇතිවිය"
                                },
                                genericError: {
                                    description: "පරිශීලක භූමිකාවන් යාවත්කාලීන කිරීමේදී දෝෂයක් ඇතිවිය",
                                    message: "යම් දෝෂයක් ඇති වී ඇත"
                                },
                                success: {
                                    description: "පරිශීලකයා සඳහා පවරා ඇති භූමිකාවන් ඉවත් කිරීම සාර්ථකයි",
                                    message: "යාවත්කාලීන පරිශීලක භූමිකාවන් සාර්ථකයි"
                                }
                            }
                        },
                        viewPermissionModal: {
                            backButton: "නැවත ලැයිස්තුවට",
                            editButton: "අවසර සංස්කරණය කරන්න",
                            heading: "{{role}} සඳහා අවසර"
                        }
                    }
                }
            },
            users: {
                advancedSearch: {
                    form: {
                        dropdown: {
                            filterAttributeOptions: {
                                email: "විද්යුත් තැපෑල",
                                username: "පරිශීලක නාමය"
                            }
                        },
                        inputs: {
                            filterAttribute: {
                                placeholder: "උදා. පරිශීලක නාමය, විද්‍යුත් තැපෑල යනාදිය."
                            },
                            filterCondition: {
                                placeholder: "උදා. ආදිය සමඟ ආරම්භ වේ."
                            },
                            filterValue: {
                                placeholder: "සෙවීමට අගය ඇතුළත් කරන්න"
                            }
                        }
                    },
                    placeholder: "පරිශීලක නාමයෙන් සොයන්න"
                },
                all: {
                    heading: "පරිශීලකයින්",
                    subHeading: "පරිශීලක ගිණුම් එකතු කිරීම සහ කළමනාකරණය කිරීම, පරිශීලකයින්ට භූමිකාවන්"
                        + " පැවරීම සහ පරිශීලක අනන්‍යතා පවත්වා ගැනීම."
                },
                buttons: {
                    addNewUserBtn: "නව පරිශීලක",
                    assignUserRoleBtn: "භූමිකාවන් පවරන්න",
                    metaColumnBtn: "තීරු"
                },
                confirmations: {
                    terminateAllSessions: {
                        assertionHint: "වින්‍යාසය එක් කරන්න <1>{{ name }}</1> ටයිප් කරන්න.",
                        content: "ඔබ මෙම ක්‍රියාව සමඟ ඉදිරියට ගියහොත්, පරිශීලකයා සියළුම ක්‍රියාකාරී සැසි වලින් " +
                            "ඉවත් වනු ඇත. ඔවුන් දැනට කරගෙන යන ඕනෑම කාර්යයක ප්‍රගතිය නැති කර දමනු ඇත. " +
                            "කරුණාකර ප්‍රවේශමෙන් ඉදිරියට යන්න.",
                        header: "ඔබට විශ්වාසද?",
                        message: "මෙම ක්‍රියාව ආපසු හැරවිය නොහැකි අතර සියලු ක්‍රියාකාරී සැසි ස්ථිරවම අවසන් වේ."
                    },
                    terminateSession: {
                        assertionHint: "තහවුරු කිරීමට කරුණාකර <1>{{ name }}</1> ටයිප් කරන්න.",
                        content: "ඔබ මෙම ක්‍රියාව සමඟ ඉදිරියට ගියහොත්, පරිශීලකයා තෝරාගත් සැසිවාරයෙන් ඉවත් " +
                            "වනු ඇත. ඔවුන් දැනට කරගෙන යන ඕනෑම කාර්යයක ප්‍රගතිය ලිහිල් කරනු ඇත. " +
                            "කරුණාකර ප්‍රවේශමෙන් ඉදිරියට යන්න.",
                        header: "ඔබට විශ්වාසද?",
                        message: "මෙම ක්‍රියාව ආපසු හැරවිය නොහැකි අතර සැසිය ස්ථිරවම අවසන් වේ."
                    }
                },
                editUser: {
                    tab: {
                        menuItems: {
                            0: "පැතිකඩ",
                            1: "කණ්ඩායම්",
                            2: "භූමිකාවන්",
                            3: "ක්‍රියාකාරී සැසි"
                        }
                    }
                },
                forms: {
                    validation: {
                        formatError: "ඇතුළත් කළ {{field}} ආකෘතිය වැරදිය."
                    }
                },
                list: {
                    columns: {
                        actions: "ක්‍රියා",
                        name: "නම"
                    }
                },
                notifications: {
                    addUser: {
                        error: {
                            description: "{{description}}",
                            message: "නව පරිශීලකයා එකතු කිරීමේදී දෝෂයකි"
                        },
                        genericError: {
                            description: "නව පරිශීලකයා එක් කිරීමට නොහැකි විය",
                            message: "යම් දෝෂයක් ඇති වී ඇත"
                        },
                        success: {
                            description: "නව පරිශීලකයා සාර්ථකව එකතු කරන ලදි.",
                            message: "පරිශීලකයා සාර්ථකව එකතු කරන ලදි"
                        }
                    },
                    deleteUser: {
                        error: {
                            description: "{{description}}",
                            message: "පරිශීලකයා මකාදැමීමේ දෝෂයකි"
                        },
                        genericError: {
                            description: "පරිශීලකයා මකා දැමිය නොහැක",
                            message: "යම් දෝෂයක් ඇති වී ඇත"
                        },
                        success: {
                            description: "පරිශීලකයා සාර්ථකව මකා දමන ලදි.",
                            message: "පරිශීලකයා සාර්ථකව මකා දමන ලදි"
                        }
                    },
                    fetchUsers: {
                        error: {
                            description: "{{description}}",
                            message: "පරිශීලකයින් ලබා ගැනීමේ දෝෂයකි"
                        },
                        genericError: {
                            description: "පරිශීලකයින් ලබා ගැනීමට නොහැකි විය",
                            message: "යම් දෝෂයක් ඇති වී ඇත"
                        },
                        success: {
                            description: "පරිශීලකයින් සාර්ථකව ලබා ගන්නා ලදි.",
                            message: "පරිශීලකයින් ලබා ගැනීම සාර්ථකයි"
                        }
                    }
                },
                placeholders: {
                    emptyList: {
                        action: "ලැයිස්තුව නැවුම් කරන්න",
                        subtitles: {
                            0: "පරිශීලක ලැයිස්තුව හිස්ව ය.",
                            1: "පරිශීලක ලැයිස්තුව ලබා ගැනීමේදී යමක් වැරදී ඇත"
                        },
                        title: "පරිශීලකයින් හමු නොවීය"
                    },
                    userstoreError: {
                        subtitles: {
                            0: "පරිශීලක වෙළඳසැලෙන් පරිශීලකයින් ගෙන්වා ගැනීමට උත්සාහ කිරීමේදී දෝෂයක් ඇතිවිය",
                            1: "කරුණාකර පරිශීලක වෙළඳසැලේ සම්බන්ධතා තොරතුරු නිවැරදි බවට වග බලා ගන්න."
                        },
                        title: "පරිශීලක වෙළඳසැලෙන් පරිශීලකයින් ගෙන්වා ගැනීමට නොහැකි විය"
                    }
                },
                userSessions: {
                    components: {
                        sessionDetails: {
                            actions: {
                                terminateAllSessions: "සියල්ල අවසන් කරන්න",
                                terminateSession: "සැසිය අවසන් කරන්න"
                            },
                            labels: {
                                browser: "බ්‍රව්සරය",
                                deviceModel: "උපාංග ආකෘතිය",
                                ip: "IP ලිපිනය",
                                lastAccessed: "අවසන් වරට ප්‍රවේශ වූයේ",
                                loggedInAs: "<1>{{ app }}</1> ලෙස <3>{{ user }}</3> ලෙස පුරනය වී ඇත.",
                                loginTime: "පිවිසුම් වේලාව",
                                os: "මෙහෙයුම් පද්ධතිය",
                                recentActivity: "මෑත ක්‍රියාකාරකම"
                            }
                        }
                    },
                    notifications: {
                        getUserSessions: {
                            error: {
                                description: "{{ description }}",
                                message: "ලබා ගැනීමේ දෝෂය"
                            },
                            genericError: {
                                description: "පරිශීලක සැසි ලබා ගැනීමේදී දෝෂයක් ඇතිවිය.",
                                message: "ලබා ගැනීමේ දෝෂය"
                            },
                            success: {
                                description: "පරිශීලක සැසි සාර්ථකව ලබා ගන්නා ලදි.",
                                message: "නැවත ලබා ගැනීම සාර්ථකයි"
                            }
                        },
                        terminateAllUserSessions: {
                            error: {
                                description: "{{ description }}",
                                message: "අවසන් කිරීමේ දෝෂය"
                            },
                            genericError: {
                                description: "පරිශීලක සැසි අවසන් කිරීමේදී දෝෂයක් ඇතිවිය.",
                                message: "අවසන් කිරීමේ දෝෂය"
                            },
                            success: {
                                description: "සියලුම පරිශීලක සැසි සාර්ථකව අවසන් කරන ලදි.",
                                message: "අවසන් කිරීම සාර්ථකයි"
                            }
                        },
                        terminateUserSession: {
                            error: {
                                description: "{{ description }}",
                                message: "අවසන් කිරීමේ දෝෂය"
                            },
                            genericError: {
                                description: "පරිශීලක සැසි අවසන් කිරීමේදී දෝෂයක් ඇතිවිය.",
                                message: "අවසන් කිරීමේ දෝෂය"
                            },
                            success: {
                                description: "පරිශීලක සැසිය සාර්ථකව අවසන් කරන ලදි.",
                                message: "අවසන් කිරීම සාර්ථකයි"
                            }
                        }
                    },
                    placeholders: {
                        emptyListPlaceholder: {
                            subtitles: "මෙම පරිශීලකයින් සඳහා සක්‍රීය සැසි නොමැත.",
                            title: "ක්‍රියාකාරී සැසි නොමැත"
                        }
                    }
                },
                usersList: {
                    list: {
                        emptyResultPlaceholder: {
                            addButton: "නව පරිශීලක",
                            subTitle: {
                                0: "දැනට පරිශීලකයින් නොමැත.",
                                1: "පහත සඳහන් දෑ අනුගමනය කිරීමෙන් ඔබට පහසුවෙන් නව පරිශීලකයෙකු එක් කළ හැකිය",
                                2: "පරිශීලක නිර්මාණ විශාරදයේ පියවර."
                            },
                            title: "නව පරිශීලකයෙකු එක් කරන්න"
                        },
                        iconPopups: {
                            delete: "මකන්න",
                            edit: "සංස්කරණය කරන්න"
                        }
                    },
                    metaOptions: {
                        columns: {
                            emails: "විද්යුත් තැපෑල",
                            id: "පරිශීලක ID",
                            lastModified: "අවසන් වරට වෙනස් කරන ලදි",
                            name: "නම",
                            userName: "පරිශීලක නාමය"
                        },
                        heading: "තීරු පෙන්වන්න"
                    },
                    search: {
                        emptyResultPlaceholder: {
                            clearButton: "සෙවුම් විමසුම හිස් කරන්න",
                            subTitle: {
                                0: "{{query}} සඳහා අපට කිසිදු ප්‍රතිපලයක් සොයාගත නොහැකි විය",
                                1: "කරුණාකර වෙනත් සෙවුම් පදයක් උත්සාහ කරන්න."
                            },
                            title: "ප්‍රතිපල හමු නොවීය"
                        }
                    }
                },
                userstores: {
                    userstoreOptions: {
                        all: "සියලුම පරිශීලක වෙළඳසැල්",
                        primary: "ප්‍රාථමික"
                    }
                }
            },
            userstores: {
                advancedSearch: {
                    error: "පෙරහන් විමසුම් ආකෘතිය වැරදිය",
                    form: {
                        inputs: {
                            filterAttribute: {
                                placeholder: "උදා. නම, විස්තරය ආදිය."
                            },
                            filterCondition: {
                                placeholder: "උදා. ආදිය සමඟ ආරම්භ වේ."
                            },
                            filterValue: {
                                placeholder: "උදා. ප්‍රාථමික, දෙවන ආදිය."
                            }
                        }
                    },
                    placeholder: "පරිශීලක වෙළඳසැල් නාමයෙන් සොයන්න"
                },
                confirmation: {
                    confirm: "තහවුරු කරන්න",
                    content: "ඔබ මෙම පරිශීලක වෙළඳසැල මකා දැමුවහොත්, මෙම පරිශීලක වෙළඳසැලේ පරිශීලක දත්ත ද "
                        + "මකා දැමෙනු ඇත. කරුණාකර ප්‍රවේශමෙන් ඉදිරියට යන්න.",
                    header: "ඔබට විශ්වාසද?",
                    hint: "තහවුරු කිරීමට කරුණාකර <1>{{name}}</1> ටයිප් කරන්න.",
                    message: "මෙම ක්‍රියාව ආපසු හැරවිය නොහැකි අතර තෝරාගත් පරිශීලක වෙළඳසැල සහ එහි "
                        + "ඇති දත්ත ස්ථිරවම මකා දමනු ඇත."
                },
                dangerZone: {
                    delete: {
                        actionTitle: "පරිශීලක වෙළඳසැල මකන්න",
                        header: "පරිශීලක වෙළඳසැල මකන්න",
                        subheader: "ඔබ පරිශීලක වෙළඳසැලක් මකා දැමූ පසු, ආපසු යාමක් නොමැත."
                            + " කරුණාකර ස්ථිර වන්න."
                    },
                    disable: {
                        actionTitle: "පරිශීලක වෙළඳසැල සබල කරන්න",
                        header: "පරිශීලක වෙළඳසැල සබල කරන්න",
                        subheader: "පරිශීලක වෙළඳසැලක් අක්‍රීය කිරීමෙන් පරිශීලක වෙළඳසැලේ පරිශීලකයින්ට ප්‍රවේශය අහිමි " +
                            "විය හැකිය. ප්‍රවේශමෙන් ඉදිරියට යන්න."
                    }
                },
                forms: {
                    connection: {
                        connectionErrorMessage: "කරුණාකර සපයා ඇති සම්බන්ධතා URL, නම, "
                            + "මුරපදය සහ ධාවක නාමය නිවැරදි බව සහතික කරන්න",
                        testButton: "පරීක්ෂණ සම්බන්ධතාවය"
                    },
                    custom: {
                        placeholder: "{{name}} ඇතුළත් කරන්න",
                        requiredErrorMessage: "{{name}} අවශ්‍ය වේ"
                    },
                    general: {
                        description: {
                            label: "විස්තර",
                            placeholder: "විස්තරයක් ඇතුළත් කරන්න"
                        },
                        name: {
                            label: "නම",
                            placeholder: "නමක් ඇතුළත් කරන්න",
                            requiredErrorMessage: "නම අත්‍යවශ්‍ය ක්ෂේත්‍රයකි",
                            validationErrorMessages: {
                                alreadyExistsErrorMessage: "මෙම නම සහිත පරිශීලක වෙළඳසැලක් දැනටමත් පවතී."
                            }
                        },
                        type: {
                            label: "වර්ගය",
                            requiredErrorMessage: "වර්ගයක් තෝරන්න"
                        }
                    }
                },
                notifications: {
                    addUserstore: {
                        genericError: {
                            description: "පරිශීලක වෙළඳසැල නිර්මාණය කිරීමේදී දෝෂයක් ඇතිවිය",
                            message: "යම් දෝෂයක් ඇති වී ඇත!"
                        },
                        success: {
                            description: "පරිශීලක වෙළඳසැල සාර්ථකව එකතු කර ඇත!",
                            message: "පරිශීලක වෙළඳසැල සාර්ථකව එකතු කරන ලදි!"
                        }
                    },
                    delay: {
                        description: "පරිශීලක වෙළඳසැල් ලැයිස්තුව යාවත්කාලීන කිරීමට ටික කාලයක් ගතවනු ඇත. "
                            + "යාවත්කාලීන කළ පරිශීලක වෙළඳසැල් ලැයිස්තුව ලබා ගැනීමට තත්පර කිහිපයකින් නැවුම් කරන්න.",
                        message: "පරිශීලක වෙළඳසැල් ලැයිස්තුව යාවත්කාලීන කිරීමට කාලය ගතවේ"
                    },
                    deleteUserstore: {
                        genericError: {
                            description: "පරිශීලක වෙළඳසැල මකාදැමීමේදී දෝෂයක් ඇතිවිය",
                            message: "යම් දෝෂයක් ඇති වී ඇත!"
                        },
                        success: {
                            description: "පරිශීලක වෙළඳසැල සාර්ථකව මකා දමා ඇත!",
                            message: "පරිශීලක වෙළඳසැල සාර්ථකව මකා දමන ලදි!"
                        }
                    },
                    fetchUserstoreMetadata: {
                        genericError: {
                            description: "මෙටා දත්ත වර්ගය ලබා ගැනීමේදී දෝෂයක් ඇතිවිය.",
                            message: "යම් දෝෂයක් ඇති වී ඇත"
                        }
                    },
                    fetchUserstoreTemplates: {
                        genericError: {
                            description: "පරිශීලක වෙළඳසැල් වර්ගයේ තොරතුරු ලබා ගැනීමේදී දෝෂයක් ඇතිවිය.",
                            message: "යම් දෝෂයක් ඇති වී ඇත"
                        }
                    },
                    fetchUserstoreTypes: {
                        genericError: {
                            description: "පරිශීලක වෙළඳසැල් වර්ග ලබා ගැනීමේදී දෝෂයක් ඇතිවිය.",
                            message: "යම් දෝෂයක් ඇති වී ඇත"
                        }
                    },
                    fetchUserstores: {
                        genericError: {
                            description: "පරිශීලක වෙළඳසැල් ලබා ගැනීමේදී දෝෂයක් ඇතිවිය",
                            message: "යම් දෝෂයක් ඇති වී ඇත"
                        }
                    },
                    testConnection: {
                        genericError: {
                            description: "පරිශීලක වෙළඳසැලට සම්බන්ධතාවය පරීක්ෂා කිරීමේදී දෝෂයක් ඇතිවිය",
                            message: "යම් දෝෂයක් ඇති වී ඇත"
                        },
                        success: {
                            description: "සම්බන්ධතාවය සෞඛ්ය සම්පන්නයි",
                            message: "සම්බන්ධතාවය සාර්ථකයි!"
                        }
                    },
                    updateDelay: {
                        description: "යාවත්කාලීන කළ ගුණාංග දර්ශණය වීමට යම් කාලයක් ගතවනු ඇත.",
                        message: "ගුණාංග යාවත්කාලීන කිරීමට කාලය ගතවේ"
                    },
                    updateUserstore: {
                        genericError: {
                            description: "පරිශීලක වෙළඳසැල යාවත්කාලීන කිරීමේදී දෝෂයක් ඇතිවිය.",
                            message: "යම් දෝෂයක් ඇති වී ඇත"
                        },
                        success: {
                            description: "මෙම පරිශීලක වෙළඳසැල සාර්ථකව යාවත්කාලීන කර ඇත!",
                            message: "පරිශීලක වෙළඳසැල සාර්ථකව යාවත්කාලීන කරන ලදි!"
                        }
                    }
                },
                pageLayout: {
                    edit: {
                        back: "පරිශීලක වෙළඳසැල් වෙත ආපසු යන්න",
                        description: "පරිශීලක වෙළඳසැල සංස්කරණය කරන්න",
                        tabs: {
                            connection: "සම්බන්ධතාවය",
                            general: "ජනරාල්",
                            group: "සමූහය",
                            user: "පරිශීලක"
                        }
                    },
                    list: {
                        description: "පරිශීලක වෙළඳසැල් සාදන්න සහ කළමනාකරණය කරන්න",
                        primaryAction: "නව පරිශීලක වෙළඳසැල",
                        title: "පරිශීලක වෙළඳසැල්"
                    },
                    templates: {
                        back: "පරිශීලක වෙළඳසැල් වෙත ආපසු යන්න",
                        description: "කරුණාකර පහත පරිශීලක වෙළඳසැල් වර්ග වලින් එකක් තෝරන්න.",
                        templateHeading: "ඉක්මන් පිහිටුවීම්",
                        templateSubHeading: "ඔබේ පරිශීලක වෙළඳසැල් නිර්මාණය වේගවත් කිරීම සඳහා පෙර සැකසූ"
                            + " සැකිලි සමූහයක්.",
                        title: "පරිශීලක වෙළඳසැල් වර්ගය තෝරන්න"
                    }
                },
                placeholders: {
                    emptyList: {
                        action: "නව පරිශීලක වෙළඳසැල",
                        subtitles: "දැනට පරිශීලක වෙළඳසැල් නොමැත. පරිශීලක වෙළඳසැල් නිර්මාණය "
                            + "කිරීමේ විශාරදයේ පියවර අනුගමනය කිරීමෙන් ඔබට "
                            + "පහසුවෙන් නව පරිශීලක වෙළඳසැලක් එක් කළ හැකිය.",
                        title: "නව පරිශීලක වෙළඳසැලක් එක් කරන්න"
                    },
                    emptySearch: {
                        action: "සෙවුම් විමසුම හිස් කරන්න",
                        subtitles: "{{සෙවුම් විමසුම} for සඳහා අපට කිසිදු ප්‍රතිපලයක් සොයාගත නොහැකි විය. "
                            + "කරුණාකර වෙනත් සෙවුම් පදයක් උත්සාහ කරන්න.",
                        title: "ප්‍රතිපල හමු නොවීය"
                    }
                },
                sqlEditor: {
                    create: "සාදන්න",
                    darkMode: "අඳුරු ප්‍රකාරය",
                    delete: "මකන්න",
                    read: "කියවන්න",
                    reset: "නැවත සකසන්න",
                    title: "SQL විමසුම් වර්ග",
                    update: "යාවත්කාලීන කරන්න"
                },
                wizard: {
                    header: "Store {{type}} පරිශීලක වෙළඳසැල එක් කරන්න",
                    steps: {
                        general: "ජනරාල්",
                        group: "සමූහය",
                        summary: "සාරාංශය",
                        user: "පරිශීලක"
                    }
                }
            }
        },
        notifications: {
            endSession: {
                error: {
                    description: "{{description}}",
                    message: "අවසන් කිරීමේ දෝෂයකි"
                },
                genericError: {
                    description: "වත්මන් සැසිය අවසන් කිරීමට නොහැකි විය.",
                    message: "යම් දෝෂයක් ඇති වී ඇත"
                },
                success: {
                    description: "වත්මන් සැසිය සාර්ථකව අවසන් කරන ලදි.",
                    message: "අවසන් කිරීම සාර්ථකයි"
                }
            },
            getProfileInfo: {
                error: {
                    description: "{{description}}",
                    message: "දත්ත ලබා ගැනීමේ දෝෂයක්"
                },
                genericError: {
                    description: "පරිශීලක පැතිකඩ විස්තර ලබා ගැනීමට නොහැකි විය.",
                    message: "දත්ත ලබා ගැනීමේ දෝෂයක්"
                },
                success: {
                    description: "පරිශීලක පැතිකඩ විස්තර සාර්ථකව ලබා ගන්නා ලදි.",
                    message: "දත්ත නැවත ලබා ගැනීම සාර්ථකයි"
                }
            },
            getProfileSchema: {
                error: {
                    description: "{{description}}",
                    message: "දත්ත ලබා ගැනීමේ දෝෂයක්"
                },
                genericError: {
                    description: "පරිශීලක පැතිකඩ යෝජනා ක්‍රම ලබා ගැනීමට නොහැකි විය.",
                    message: "දත්ත ලබා ගැනීමේ දෝෂයක්"
                },
                success: {
                    description: "පරිශීලක පැතිකඩ යෝජනා ක්‍රම සාර්ථකව ලබා ගන්නා ලදි.",
                    message: "නැවත ලබා ගැනීම සාර්ථකයි"
                }
            }
        },
        pages: {
            addEmailTemplate: {
                backButton: "{{name}} අච්චුව වෙත ආපසු යන්න",
                subTitle: null,
                title: "නව අච්චුව එක් කරන්න"
            },
            approvalsPage: {
                subTitle: "ඔබේ අනුමැතිය අවශ්‍ය මෙහෙයුම් කාර්යයන් සමාලෝචනය කරන්න",
                title: "අනුමත කිරීම්"
            },
            editTemplate: {
                backButton: "{{name}} අච්චුව වෙත ආපසු යන්න",
                subTitle: null,
                title: "{{template}}"
            },
            emailLocaleAdd: {
                backButton: "{{name}} අච්චුව වෙත ආපසු යන්න",
                subTitle: null,
                title: "ආකෘතිය සංස්කරණය කරන්න - {{name}}"
            },
            emailLocaleAddWithDisplayName: {
                backButton: "{{name}} ආකෘතිය වෙත ආපසු යන්න",
                subTitle: null,
                title: "{{displayName}} සඳහා නව ආකෘතියක් එක් කරන්න"
            },
            emailTemplateTypes: {
                subTitle: "සැකිලි වර්ග සාදන්න සහ කළමනාකරණය කරන්න.",
                title: "විද්‍යුත් තැපැල් ආකෘති වර්ග"
            },
            emailTemplates: {
                backButton: "ඊමේල් සැකිලි වර්ග වෙත ආපසු යන්න",
                subTitle: null,
                title: "විද්‍යුත් තැපැල් ආකෘති වර්ග"
            },
            emailTemplatesWithDisplayName: {
                backButton: "යෙදුම් වෙත ආපසු යන්න",
                subTitle: null,
                title: "සැකිලි - {{displayName}}"
            },
            groups: {
                subTitle: "පරිශීලක කණ්ඩායම් සාදන්න සහ කළමනාකරණය කරන්න, කණ්ඩායම් සඳහා අවසර ලබා දෙන්න.",
                title: "කණ්ඩායම්"
            },
            overview: {
                subTitle: "පරිශීලකයින්, භූමිකාවන්, උපභාෂා, සේවාදායක වින්‍යාසයන් වින්‍යාස කිරීම " +
                    "සහ කළමනාකරණය කිරීම.",
                title: "සාදරයෙන් පිළිගනිමු, {{firstName}}"
            },
            roles: {
                subTitle: "භූමිකාවන් සාදන්න සහ කළමනාකරණය කරන්න, භූමිකාවන් සඳහා අවසර ලබා දෙන්න.",
                title: "භූමිකාවන්"
            },
            rolesEdit: {
                backButton: "{{Type} වෙත ආපසු යන්න",
                subTitle: null,
                title: "භූමිකාව සංස්කරණය කරන්න"
            },
            serverConfigurations: {
                subTitle: "සේවාදායකයේ සාමාන්‍ය වින්‍යාසයන් කළමනාකරණය කරන්න.",
                title: "සාමාන්‍ය වින්‍යාසයන්"
            },
            users: {
                subTitle: "පරිශීලකයින්, පරිශීලක ප්‍රවේශය සහ පරිශීලක පැතිකඩ සාදන්න සහ කළමනාකරණය කරන්න.",
                title: "පරිශීලකයින්"
            },
            usersEdit: {
                backButton: "නැවත පරිශීලකයින් වෙත යන්න",
                subTitle: "{{name}}",
                title: "{{email}}"
            }
        },
        placeholders: {
            404: {
                action: "ආපසු ප්‍රධාන පිටුවට යන්න",
                subtitles: {
                    0: "ඔබ සොයන පිටුව අපට සොයාගත නොහැකි විය.",
                    1: "මුල් පිටුව වෙත හරවා යැවීමට කරුණාකර URL එක පරීක්ෂා කරන්න හෝ පහත බොත්තම ක්ලික් කරන්න."
                },
                title: "පිටුව හමු නොවීය"
            },
            accessDenied: {
                action: "ඉවත් වීම දිගටම කරගෙන යන්න",
                subtitles: {
                    0: "මෙම ද්වාරය භාවිතා කිරීමට ඔබට අවසර නොමැති බව පෙනේ.",
                    1: "කරුණාකර වෙනත් ගිණුමක් සමඟ පුරනය වන්න."
                },
                title: "ඔබට අවසර නැත"
            },
            consentDenied: {
                action: "ඉවත් වීම දිගටම කරගෙන යන්න",
                subtitles: {
                    0: "මෙම යෙදුම සඳහා ඔබ කැමැත්ත ලබා දී නොමැති බව පෙනේ.",
                    1: "කරුණාකර යෙදුම භාවිතා කිරීමට කැමැත්ත ලබා දෙන්න."
                },
                title: "ඔබ කැමැත්ත ප්‍රතික්ෂේප කර ඇත"
            },
            emptySearchResult: {
                action: "සෙවුම් විමසුම හිස් කරන්න",
                subtitles: {
                    0: "\"{{query}}\" සඳහා අපට කිසිදු ප්‍රතිපලයක් සොයාගත නොහැකි විය",
                    1: "කරුණාකර වෙනත් සෙවුම් පදයක් උත්සාහ කරන්න."
                },
                title: "ප්‍රතිපල හමු නොවීය"
            },
            genericError: {
                action: "පිටුව නැවුම් කරන්න",
                subtitles: {
                    0: "මෙම පිටුව ප්‍රදර්ශනය කිරීමේදී යම් දෝෂයක් ඇති වී ඇත.",
                    1: "තාක්ෂණික විස්තර සඳහා බ්‍රව්සර් කොන්සෝලය බලන්න."
                },
                title: "යම් දෝෂයක් ඇති වී ඇත"
            },
            loginError: {
                action: "ඉවත් වීම දිගටම කරගෙන යන්න",
                subtitles: {
                    0: "මෙම ද්වාරය භාවිතා කිරීමට ඔබට අවසර නොමැති බව පෙනේ.",
                    1: "කරුණාකර වෙනත් ගිණුමක් සමඟ පුරනය වන්න."
                },
                title: "ඔබට අවසර නැත"
            },
            sessionStorageDisabled: {
                subtitles: {
                    0: "මෙම යෙදුම භාවිතා කිරීමට, ඔබගේ වෙබ් බ්‍රව්සර සැකසුම් තුළ කුකී සක්‍රීය කළ යුතුය.",
                    1: "කුකීස් සක්‍රීය කරන්නේ කෙසේද යන්න පිළිබඳ වැඩි විස්තර සඳහා, ඔබේ වෙබ් බ්‍රව්සරයේ උපකාරක"
                        + " අංශය බලන්න."
                },
                title: "ඔබගේ බ්‍රව්සරයේ cookies අක්‍රීය කර ඇත."
            },
            unauthorized: {
                action: "ඉවත් වීම දිගටම කරගෙන යන්න",
                subtitles: {
                    0: "මෙම ද්වාරය භාවිතා කිරීමට ඔබට අවසර නොමැති බව පෙනේ.",
                    1: "කරුණාකර වෙනත් ගිණුමක් සමඟ පුරනය වන්න."
                },
                title: "ඔබට අවසර නැත"
            },
            underConstruction: {
                action: "ආපසු ප්‍රධාන පිටුවට යන්න",
                subtitles: {
                    0: "අපි මේ පිටුවේ යම් වැඩක් කරනවා.",
                    1: "කරුණාකර  පසුව එන්න. ඔබේ ඉවසීමට ස්තුතියි."
                },
                title: "පිටුව ඉදිවෙමින් පවතී"
            }
        }
    }
};
