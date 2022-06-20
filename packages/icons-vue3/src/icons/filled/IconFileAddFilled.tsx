// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FileAddFilledSvg from 'icon-base/es/asn/FileAddFilled';

export interface FileAddFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconFileAddFilled: FileAddFilledIconType = (props, context) => <Icon name='FileAddFilled' {...{ ...props, ...context.attrs }} icon={FileAddFilledSvg} />;

IconFileAddFilled.displayName = 'IconFileAddFilled';

export default IconFileAddFilled;
