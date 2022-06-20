// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import DownOutlinedSvg from 'icon-base/es/asn/DownOutlined';

export interface DownOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconDownOutlined: DownOutlinedIconType = (props, context) => <Icon name='DownOutlined' {...{ ...props, ...context.attrs }} icon={DownOutlinedSvg} />;

IconDownOutlined.displayName = 'IconDownOutlined';

export default IconDownOutlined;
