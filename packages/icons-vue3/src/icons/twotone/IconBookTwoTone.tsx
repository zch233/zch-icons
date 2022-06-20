// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import BookTwoToneSvg from 'icon-base/es/asn/BookTwoTone';

export interface BookTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconBookTwoTone: BookTwoToneIconType = (props, context) => <Icon name='BookTwoTone' {...{ ...props, ...context.attrs }} icon={BookTwoToneSvg} />;

IconBookTwoTone.displayName = 'IconBookTwoTone';

export default IconBookTwoTone;
