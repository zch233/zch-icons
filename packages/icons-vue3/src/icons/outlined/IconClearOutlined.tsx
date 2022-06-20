// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ClearOutlinedSvg from 'icon-base/es/asn/ClearOutlined';

export interface ClearOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconClearOutlined: ClearOutlinedIconType = (props, context) => <Icon name='ClearOutlined' {...{ ...props, ...context.attrs }} icon={ClearOutlinedSvg} />;

IconClearOutlined.displayName = 'IconClearOutlined';

export default IconClearOutlined;
