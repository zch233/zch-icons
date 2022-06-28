// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import AliyunOutlinedSvg from 'gupo-icons-base/es/asn/AliyunOutlined';

export interface AliyunOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconAliyunOutlined: AliyunOutlinedIconType = (props, context) => (
    <Icon name='AliyunOutlined' {...{ ...props, ...context.attrs }} icon={AliyunOutlinedSvg} />
);

IconAliyunOutlined.displayName = 'IconAliyunOutlined';
IconAliyunOutlined.theme = 'outlined';
IconAliyunOutlined.originName = 'aliyun';

export default IconAliyunOutlined;
