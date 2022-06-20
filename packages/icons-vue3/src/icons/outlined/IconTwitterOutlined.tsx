// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import TwitterOutlinedSvg from 'icon-base/es/asn/TwitterOutlined';

export interface TwitterOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconTwitterOutlined: TwitterOutlinedIconType = (props, context) => (
    <Icon name='TwitterOutlined' {...{ ...props, ...context.attrs }} icon={TwitterOutlinedSvg} />
);

IconTwitterOutlined.displayName = 'IconTwitterOutlined';

export default IconTwitterOutlined;
