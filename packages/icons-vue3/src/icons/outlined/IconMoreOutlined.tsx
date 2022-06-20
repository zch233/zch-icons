// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import MoreOutlinedSvg from 'icon-base/es/asn/MoreOutlined';

export interface MoreOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconMoreOutlined: MoreOutlinedIconType = (props, context) => <Icon name='MoreOutlined' {...{ ...props, ...context.attrs }} icon={MoreOutlinedSvg} />;

IconMoreOutlined.displayName = 'IconMoreOutlined';

export default IconMoreOutlined;
