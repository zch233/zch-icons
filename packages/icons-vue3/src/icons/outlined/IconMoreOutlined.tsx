// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import MoreOutlinedSvg from 'gupo-icons-base/es/asn/MoreOutlined';

export interface MoreOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconMoreOutlined: MoreOutlinedIconType = (props, context) => <Icon name='MoreOutlined' {...{ ...props, ...context.attrs }} icon={MoreOutlinedSvg} />;

IconMoreOutlined.displayName = 'IconMoreOutlined';
IconMoreOutlined.theme = 'outlined';
IconMoreOutlined.originName = 'more';

export default IconMoreOutlined;
