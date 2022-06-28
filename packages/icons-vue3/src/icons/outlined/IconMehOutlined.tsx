// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import MehOutlinedSvg from 'gupo-icons-base/es/asn/MehOutlined';

export interface MehOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconMehOutlined: MehOutlinedIconType = (props, context) => <Icon name='MehOutlined' {...{ ...props, ...context.attrs }} icon={MehOutlinedSvg} />;

IconMehOutlined.displayName = 'IconMehOutlined';
IconMehOutlined.theme = 'outlined';
IconMehOutlined.originName = 'meh';

export default IconMehOutlined;
