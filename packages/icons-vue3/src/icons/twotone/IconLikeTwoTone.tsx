// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import LikeTwoToneSvg from 'icon-base/es/asn/LikeTwoTone';

export interface LikeTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconLikeTwoTone: LikeTwoToneIconType = (props, context) => <Icon name='LikeTwoTone' {...{ ...props, ...context.attrs }} icon={LikeTwoToneSvg} />;

IconLikeTwoTone.displayName = 'IconLikeTwoTone';

export default IconLikeTwoTone;
