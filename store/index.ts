type Permission = 'design' | 'publish';

export const permission = reactive<{ [key in Permission]: boolean }>({
    design: false,
    publish: false,
});

export const setPermission = (key: Permission, value: boolean) => {
    permission[key] = value;
};
