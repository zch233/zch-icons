// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import StarFilledSvg from 'icons-base/es/asn/StarFilled';

export interface StarFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconStarFilled: StarFilledIconType = (props, context) => <Icon name='StarFilled' {...{ ...props, ...context.attrs }} icon={StarFilledSvg} />;

IconStarFilled.displayName = 'IconStarFilled';
IconStarFilled.theme = 'filled';
IconStarFilled.originName = 'star';

export default IconStarFilled;
