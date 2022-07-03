// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import WomanOutlinedSvg from 'icons-base/es/asn/WomanOutlined';

export interface WomanOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconWomanOutlined: WomanOutlinedIconType = (props, context) => <Icon name='WomanOutlined' {...{ ...props, ...context.attrs }} icon={WomanOutlinedSvg} />;

IconWomanOutlined.displayName = 'IconWomanOutlined';
IconWomanOutlined.theme = 'outlined';
IconWomanOutlined.originName = 'woman';

export default IconWomanOutlined;
