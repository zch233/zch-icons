// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FireOutlinedSvg from 'icon-base/es/asn/FireOutlined';

export interface FireOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconFireOutlined: FireOutlinedIconType = (props, context) => <Icon name='FireOutlined' {...{ ...props, ...context.attrs }} icon={FireOutlinedSvg} />;

IconFireOutlined.displayName = 'IconFireOutlined';

export default IconFireOutlined;
