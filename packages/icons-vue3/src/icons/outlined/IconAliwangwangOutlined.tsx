// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import AliwangwangOutlinedSvg from 'icons-base/es/asn/AliwangwangOutlined';

export interface AliwangwangOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconAliwangwangOutlined: AliwangwangOutlinedIconType = (props, context) => (
    <Icon name='AliwangwangOutlined' {...{ ...props, ...context.attrs }} icon={AliwangwangOutlinedSvg} />
);

IconAliwangwangOutlined.displayName = 'IconAliwangwangOutlined';
IconAliwangwangOutlined.theme = 'outlined';
IconAliwangwangOutlined.originName = 'aliwangwang';

export default IconAliwangwangOutlined;
