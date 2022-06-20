// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import UpOutlinedSvg from 'icon-base/es/asn/UpOutlined';

export interface UpOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconUpOutlined: UpOutlinedIconType = (props, context) => <Icon name='UpOutlined' {...{ ...props, ...context.attrs }} icon={UpOutlinedSvg} />;

IconUpOutlined.displayName = 'IconUpOutlined';

export default IconUpOutlined;
