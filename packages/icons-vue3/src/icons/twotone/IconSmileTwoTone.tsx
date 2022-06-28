// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import SmileTwotoneSvg from 'gupo-icons-base/es/asn/SmileTwotone';

export interface SmileTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconSmileTwotone: SmileTwotoneIconType = (props, context) => <Icon name='SmileTwotone' {...{ ...props, ...context.attrs }} icon={SmileTwotoneSvg} />;

IconSmileTwotone.displayName = 'IconSmileTwotone';
IconSmileTwotone.theme = 'twotone';
IconSmileTwotone.originName = 'smile';

export default IconSmileTwotone;
