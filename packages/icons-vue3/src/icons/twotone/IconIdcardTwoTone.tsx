// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import IdcardTwoToneSvg from 'icon-base/es/asn/IdcardTwoTone';

export interface IdcardTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconIdcardTwoTone: IdcardTwoToneIconType = (props, context) => <Icon name='IdcardTwoTone' {...{ ...props, ...context.attrs }} icon={IdcardTwoToneSvg} />;

IconIdcardTwoTone.displayName = 'IconIdcardTwoTone';

export default IconIdcardTwoTone;
