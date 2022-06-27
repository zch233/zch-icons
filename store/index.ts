import stageDigestData from '~/svg/digest.json';

type Permission = 'design' | 'publish';

export const permission = reactive<{ [key in Permission]: boolean }>({
    design: false,
    publish: false,
});

export const setPermission = (key: Permission, value: boolean) => {
    permission[key] = value;
};

export const stageDigest = ref(stageDigestData);

export const setStageDigest = (data: any) => (stageDigest.value = data);
